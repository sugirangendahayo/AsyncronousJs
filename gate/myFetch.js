function myFetch(url) {
  return new Promise((resolve, reject) => {
    try {
      const xhr = new XMLHttpRequest();
      xhr.open("GET", url);
      xhr.responseType = "json";

      xhr.onload = () => {
        if (xhr.status >= 200 && xhr.status < 300) {
          resolve(xhr.response);
        } else {
          reject(new Error("Request failed"));
        }
      };

      xhr.onerror = () => reject(new Error("Network error"));
      xhr.send();
    } catch (error) {
      reject(error);
    }
  });
}
