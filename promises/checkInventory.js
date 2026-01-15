function checkInventory(item) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const inStock = ["laptop", "phone", "tablet"];
      inStock.includes(item.toLowerCase())
        ? resolve("Item found, resolved!")
        : reject("Not found, rejected!");
    });
  });
}
checkInventory("LAPTOP")
  .then((item) => {
    console.log(item);
  })
  .catch((error) => {
    console.error(error);
  });
