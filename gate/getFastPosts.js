// async function getFastPosts() {
//   try {
//     const urls = [
//       "https://dummyjson.com/posts",
//       "https://this-may-not-exist.com/posts",
//       "https://jsonplaceholder.typicode.com/posts",
//     ];

//     const requests = urls.map((url) =>
//       fetch(url).then((res) => {
//         if (!res.ok) throw new Error("Request failed");
//         return res.json();
//       }),
//     );

//     return await Promise.race(requests);
//   } catch (error) {
//     throw error;
//   }
// }
async function getFastPosts() {
  try {
    const urls = [
      "https://dummyjson.com/posts",
      "https://this-may-not-exist.com/posts",
      "https://jsonplaceholder.typicode.com/posts",
    ];
    const requests = urls.map((url) =>
      fetch(url).then((res) => {
        if (!res.ok) throw new Error("Request failed");
        return res.json();
      }),
    );
    return await Promise.any(requests);
  } catch (error) {
    console.log("Error : ", error);
  }
}
async function main() {
  try {
    const result = await getFastPosts();
    console.log("Fatest request: ", result);
  } catch (error) {
    console.error("Error: ", error)
  }
}
main()
