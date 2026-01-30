function fetchData() {
  return new Promise((resolve, reject) => {
    const data = "Data fetched successfully!";
    const error = null;
    error ? reject("Error: ", error) : resolve(data);
  });
}
fetchData()
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error("Error: ", error);
  });
