const promises = [
    new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("Success 1")
        }, 3000)
    }),
    Promise.reject("Error 2"),
    Promise.resolve("Success 3"),
];

Promise.any(promises).then((results) => {
  console.log(results);
});
