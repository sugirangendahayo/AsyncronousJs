function calculateAsync(a, b, operation, callback) {
  setTimeout(() => {
    let result;
    switch (operation) {
      case "Add":
        result = a + b;
        break;

      case "Subtract":
        result = a + b;
        break;

      case "Multiply":
        result = a + b;
        break;

      case "Divide":
        result = b !== 0 ? a / b : "Error: Division by zero!";
        break;

      default:
        result = "Invalid operation!";
    }
    callback(result);
  }, 1000);
}
calculateAsync(4, 2, "Add", (result) => {
  console.log("The result of 2 and 4 is: ", result);
});
