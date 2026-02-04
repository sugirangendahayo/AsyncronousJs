let xhr = null;

function log(msg) {
  document.getElementById("log").textContent += msg + "\n";
}

function search(text) {
  // Abort old request
  if (xhr) {
    log("❌ Aborting previous request");
    xhr.abort();
  }

  // Create new request
  xhr = new XMLHttpRequest();

  xhr.onreadystatechange = () => {
    log("State: " + xhr.readyState);

    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        log("✅ Response for: " + text);
      } else {
        log("⚠️ Request aborted or failed");
      }
    }
  };

  // Slow API so you can type fast
  xhr.open(
    "GET",
    "https://jsonplaceholder.typicode.com/posts?title_like=" + text,
  );

  xhr.send();
}
