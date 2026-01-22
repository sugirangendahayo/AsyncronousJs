const race1 = new Promise((resolve) => setTimeout(()=> resolve("Slow"), 2000));
const race2 = new Promise((resolve) => setTimeout(()=> resolve("Fast"), 500));

Promise.all([race1, race2]).then((result) => {
  console.log("From all: ", result);
});
Promise.allSettled([race1, race2]).then((result) => {
  console.log("From all settled: ", result);
});
Promise.race([race1, race2]).then((result) => {
  console.log("From race: ", result);
});
Promise.any([race1, race2]).then((result) => {
  console.log("From any: ", result);
});

