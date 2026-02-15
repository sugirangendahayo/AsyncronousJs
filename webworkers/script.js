// const btn = document.getElementById("btn");
// let count = 0;

// btn.addEventListener("click", () => {
//   count++;
//   document.getElementById("output").innerText = count;
// });

// function heavyTask() {
//   let sum = 0;
//   for (let i = 0; i < 1e10; i++) {
//     // bigger number for visible freeze
//     sum += i;
//   }
//   return sum;
// }

// console.log("Start");
// heavyTask(); // blocks UI
// console.log("End");
const btn = document.getElementById("startBtn");
const output = document.getElementById("output");
const counter = document.getElementById("counter");

// Create a new Web Worker
const worker = new Worker("worker.js");

// Listen to messages from worker
worker.onmessage = (e) => {
  if (e.data.type === "result") {
    output.innerText = "Result: " + e.data.sum;
  }
};

// Live counter to show main thread is responsive
let count = 0;
setInterval(() => {
  count++;
  counter.innerText = "Counter: " + count;
}, 100); // updates every 100ms

// Start heavy computation when button is clicked
btn.addEventListener("click", () => {
  output.innerText = "Working...";
  worker.postMessage({ type: "start" });
});

