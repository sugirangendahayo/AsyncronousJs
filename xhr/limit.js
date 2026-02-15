const xhr = new XMLHttpRequest();

xhr.open("GET", "https://jsonplaceholder.typicode.com/posts?_limit=2", true);

xhr.onload = function () {
  if (xhr.status === 200) {
    const posts = JSON.parse(xhr.responseText);
    posts.forEach((post, index) => {
      console.log(`${index + 1} . ${post.title}`);
    });
  } else {
    console.log("Failed to load posts!");
  }
};
xhr.onerror = function () {
  console.error("Network error occured!");
};
xhr.send()