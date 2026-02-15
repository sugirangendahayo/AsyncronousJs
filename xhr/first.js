async function getFastPosts() {
  try {
    const urls = [
      "https://dummyjson.com/posts",
      "https://this-may-not-exist.com/posts",
      " https://jsonplaceholder.typicode.com/posts",
    ];
    const response = await Promise.any(urls.map((url) => fetch(url)));
    console.log("First response to resolve is: ", response);
  } catch (error) {
    console.error(error);
    
  }

}
getFastPosts();
