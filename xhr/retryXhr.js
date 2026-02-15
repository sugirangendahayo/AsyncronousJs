function fetchWithRetry(url, maxRetries = 3, delay = 1000) {
  return new Promise((resolve, reject) => {
    let attempt = 0;

    function makeRequest() {
      const xhr = new XMLHttpRequest();
      xhr.open("GET", url, true);

      xhr.onload = () => {
        if (xhr.status >= 200 && xhr.status < 300) {
          resolve(xhr.responseText);
        } else {
          retry(`HTTP ${xhr.status}`);
        }
      };

      xhr.onerror = () => retry("Network error");
      xhr.ontimeout = () => retry("Timeout");

      xhr.send();
    }

    function retry(reason) {
      attempt++;

      console.error(`Attempt ${attempt} failed: ${reason}`);

      if (attempt >= maxRetries) {
        reject(new Error(`Failed after ${maxRetries} attempts...`));
        return;
      }
      
      const backoff = delay * Math.pow(2, attempt - 1);

      setTimeout(makeRequest, backoff);
    }

    makeRequest();
  });
}
fetchWithRetry("https://jsonplaceholder.typicode.com/posts", 3);