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

Promise.all([firstPromise(), secondPromise(), thirdPromise()])
  .then((results) => {
    results.forEach((result) => result);
  })
  .catch((error) => {
    console.error();
  })
  .finally(() => {
    const end = performance.now();
    console.log(
      "Total time taken:",
      ((end - start) / 1000).toFixed(2),
      "seconds",
    );
  });
