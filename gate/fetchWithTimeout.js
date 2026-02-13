async function fetchWithTimeout(url, timeout = 5) {
  const controller = new AbortController();

  try {
    const timer = setTimeout(() => controller.abort(), timeout);

    const response = await fetch(url, { signal: controller.signal });
    const data = await response.json();

    clearTimeout(timer);
    return data;
  } catch (error) {
    throw error;
  }
}
