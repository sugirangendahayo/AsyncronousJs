async function asyncCounter() {
  try {
    const result = [];

    for (let i = 1; i <= 5; i++) {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      result.push(i);
    }

    return result;
  } catch (error) {
    throw error;
  }
}
