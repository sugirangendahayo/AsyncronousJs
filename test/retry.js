async function fetchWithRetry(url, maxRetries = 3) {
  for (let i = 0; i < maxRetries; i++) {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error(`Attempt ${i + 1} failed: `, error.message);

      if (i === maxRetries - 1) {
        throw new Error(`Failed after ${maxRetries} attempts`);
      }
      await new Promise((resolve) => {
        setTimeout(resolve, 1000 * Math.pow(2, i));
      });
    }
  }
}
fetchWithRetry("https://dummyjson.com/users", 3);