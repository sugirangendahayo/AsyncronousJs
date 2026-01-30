// async function testFetch() {
//   const urls = [
//     "https://jsonplaceholder.typicode.com/users",
//     "https://jsonplaceholder.typicode.com/posts",
//     "https://jsonplaceholder.typicode.com/prodcucts",
//   ];
//   let results = [];
//   for (let url of urls) {
//     const res = await fetch(url);
//     results.push(res);
//     const data = await res.json();
//     results.push("Data: ", data);
//   }
//   console.log(results);
// }

// testFetch();
let start = performance.now();

function firstPromise() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("This takes 3 seconds to resolve");
    }, 3000);
  });
}
function secondPromise() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("This takes 2 seconds to resolve");
    }, 2000);
  });
}
function thirdPromise() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("This takes 1 second to resolve");
    }, 1000);
  });
}

firstPromise()
  .then((result) => {
    console.log(result);
    return secondPromise();
  })
  .then((result) => {
    console.log(result);
    return thirdPromise();
  })
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    let end = performance.now(); 
    console.log(
      "Total time taken:",
      ((end - start) / 1000).toFixed(2),
      "seconds",
    );
  });
