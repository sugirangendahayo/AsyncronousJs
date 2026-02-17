// function myFetch(url) {
//   return new Promise((resolve, reject) => {
//     try {
//       const xhr = new XMLHttpRequest();
//       xhr.open("GET", url);
//       xhr.responseType = "json";

//       xhr.onload = () => {
//         if (xhr.status >= 200 && xhr.status < 300) {
//           resolve(xhr.response);
//         } else {
//           reject(new Error("Request failed"));
//         }
//       };

//       xhr.onerror = () => reject(new Error("Network error"));
//       xhr.send();
//     } catch (error) {
//       reject(error);
//     }
//   });
// }

/**
 * myFetch function is a custom implementation of the fetch API using XMLHttpRequest.
 * It takes a URL as a parameter and returns a Promise that resolves with the response
 * from the request if the status code is between 200-299, otherwise it rejects with an error.
 * @param {string} url - The URL to send the request to.
 * @returns {Promise} - A Promise that resolves with the response from the request.
 */
function myFetch(url) {
  return new Promise((resolve, reject) => {
    try {
      const xhr = new XMLHttpRequest();
      xhr.open("GET", url);
      xhr.responseType = "json";

      xhr.onload = () => {
        if (xhr.status >= 200 && xhr.status <= 300) {
          resolve(xhr.response);
        } else {
          reject(new Error("Request failed"));
        }
      };
      xhr.onerror = () => {
        reject(new Error("Network error!"));
      };
      xhr.send();
    } catch (error) {
      reject(error);
    }
  });
}
async function main() {
  try {
    const result = await myFetch("https://jsonplaceholder.typicode.com/users");
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}
main();
