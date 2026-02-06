async function getFastPosts() {
  const urls = [
    "https://dummyjson.com/posts",
    "https://this-may-not-exist.com/posts",
    "https://jsonplaceholder.typicode.com/posts",
  ];


  const fetchPromises = urls.map((url) => fetch(url));
  console.log("Fetch urls using array: ", fetchPromises);
  
 
  const response = await Promise.any(fetchPromises);

  const data = await response.json();
  return data;
}

getFastPosts()
  .then((posts) => {
    console.log(posts);
  })
  .catch((err) => {
    console.log("All requests failed , Error happens here", err);
  });
