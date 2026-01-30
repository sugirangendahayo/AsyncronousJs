async function asyncCounter() {
  let result = [];
  for (let i = 1; i <= 5; i++) {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    result.push(i);
    console.log(i);
  }
  return result;
}
try {
  const result = await asyncCounter();
  console.log("Result: ", result);
} catch (error) {
  console.log("Error: ", error);
}
