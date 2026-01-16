async function getFastPosts() {
  const response = await Promise.any([
    fetch("https://dummyjson.com/posts"),
    fetch("https://this-may-not-exist.com/posts"),
    fetch("https://jsonplaceholder.typicode.com/posts"),
  ]);

  const data = await response.json();
  return data;
}

getFastPosts().then((posts) => {
  console.log(posts);
});
