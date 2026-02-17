//Create a returnProm function that returns a promise which resolve with the response form the request or reject with the occured Error
const xhr = new XMLHttpRequest();
xhr.open("GET", "https://jsonplaceholder.typicode.com/comments");

xhr.onload = () => {
  if (xhr.status === 200) {
    console.log("Request successful : ", xhr.responseText);
  }
};
xhr.send();




