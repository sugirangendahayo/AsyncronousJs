self.onmessage = (e) => {
  if (e.data.type === "start") {
    // Heavy computation in worker
    let sum = 0;
    for (let i = 0; i < 1e10; i++) {
      sum += i;
    }
    // Send result back to main thread
    self.postMessage({ type: "result", sum });
  }
};
