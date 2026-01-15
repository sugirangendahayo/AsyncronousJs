const myPromise = new Promise((resolve, reject) => {
  const success = true;
  success ? resolve("Success!") : reject("Rejected");
});
myPromise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  });
