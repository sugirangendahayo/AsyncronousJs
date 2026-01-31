const promise1 = Promise.resolve(3);
const promise2 = new Promise((resolve) =>
  setTimeout(() => resolve("foo"), 1000),
);
const promise3 = Promise.resolve(42);

Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log(values); 
});
