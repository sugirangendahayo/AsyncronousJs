try {
  let x = y + 1; // y does not exist → error happens NOW
} catch (e) {
  console.log("caught");
}
