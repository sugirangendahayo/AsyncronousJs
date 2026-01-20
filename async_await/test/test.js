async function testFetch() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  console.log(res);
}

testFetch();

