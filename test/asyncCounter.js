async function asyncCounter() {
  let result = [];
  for (let i = 1; i <= 5; i++) {
    await new Promise((resolve) => {
      setTimeout(resolve, 1000);
    });
    result.push(i);
    console.log("Current number: ", i);
    // console.log("Current result: ", result);
  }
  return result;
}
async function runCounters() {
  try {
    const result = await asyncCounter();
    console.log("Final result: ", result);
  } catch (error) {
    console.error("Error: ", error);
    
  }
}
runCounters();
d