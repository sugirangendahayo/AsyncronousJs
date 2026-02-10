try {
  let user = JSON.parse("Bad json format");
} catch (error) {
  console.error("Error handled!", error);
}
console.log("After");
