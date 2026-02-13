// function fetchData(callback) {
//   setTimeout(() => {
//     const data = "Data fetched successfully!";
//     callback(null, data);
//   }, 1000);
// }
function fetchDataPromise() {
  return new Promise((resolve, reject) => {
    try {
      setTimeout(() => {
        const data = "Data fetched successfully!";
        resolve(data);
      }, 1000);
    } catch (error) {
      reject(error);
    }
  });
}
