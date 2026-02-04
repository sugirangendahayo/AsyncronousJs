// let count = 0;
// const log = document.getElementById("log");

// function poll() {
//   if (count === 5) return;

//   fetch("https://jsonplaceholder.typicode.com/todos/1")
//     .then((res) => res.json())
//     .then((data) => {
//       count++;
//       log.textContent += `Fetch #${count}: ${JSON.stringify(data)}\n`;

//       setTimeout(() => {
//         poll(); // wait 2 seconds THEN fetch again
//       }, 2000);
//     })
//     .catch((err) => console.error(err));
// }

// poll();
let count = 0;
const log = document.getElementById("log");

function poll() {
  if (count === 5) return; // stop after 5 calls

  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://jsonplaceholder.typicode.com/todos/1");

  xhr.onload = function () {
    if (xhr.status === 200) {
      const data = JSON.parse(xhr.responseText);

      count++;
      log.textContent += `XHR #${count}: ${JSON.stringify(data)}\n`;

      poll(); // call again AFTER response (polling)
    }
  };

  xhr.onerror = function () {
    console.error("XHR error");
  };

  xhr.send();
}

// start polling
poll();
