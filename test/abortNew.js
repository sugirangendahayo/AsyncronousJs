async function abortRequest(url, time) {
  const signal = AbortSignal.timeout(time);

  try {
    const response = await fetch(url, { signal });
    const data = await response.json();
    console.log("Data: ", data);
  } catch (error) {
    if (error.name === "TimeoutError") {
      console.log("Time out Error: ", error.message);
    } else {
      console.log("Other error: ", error);
    }
  }
}
abortRequest("https://jsonplaceholder.typicode.com/posts", 5);
