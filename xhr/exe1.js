console.log("A");

const xhr = new XMLHttpRequest();

xhr.open("GET", "https://dummyjson.com/users", true);
xhr.onload = function () {
  if (xhr.status === 200) {
    const data = JSON.parse(xhr.responseText);
    console.log("Data: ", data);
  }
};
xhr.send();
console.log("B");
