const controller = new AbortController();
const timeoutId = setTimeout(() => {
  controller.abort(); // abort fetch after 5ms
}, 5);

fetch("https://jsonplaceholder.typicode.com/posts", {
  signal: controller.signal,
})
  .then((response) => {
    clearTimeout(timeoutId); // stop timeout if request succeeds
    return response.json();
  })
  .then((data) => {
    console.log("Success:", data);
  })
  .catch((error) => {
    if (error.name === "AbortError") {
      console.log("Fetch aborted due to timeout");
    } else {
      console.log("Fetch failed:", error);
    }
  });
