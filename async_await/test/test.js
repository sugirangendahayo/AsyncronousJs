async function testFetch() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/psts");
    console.log(res);
  } catch (error) {
    console.log(error);
  }
}

testFetch();
