// 3 async functions (placeOrder, prepareFood, deliverFood)

function placeOrder(item) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const orderId = Math.floor(Math.random() * 1000);
      console.log(`Order placed of item with order id: ${orderId}`);
      resolve(orderId);
    });
  }, 1000);
}
function prepareFood(orderId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Order prepared of item with order id: ${orderId}`);
      resolve(orderId);
    }, 2000);
  });
}
function deliverFood(orderId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Order delivered of item with order id: ${orderId}`);
      resolve(orderId);
    }, 3000);
  });
}
placeOrder("Pizza")
  .then((orderId) => {
    return prepareFood(orderId);
  })
  .then((orderId) => {
    return deliverFood(orderId);
  })
  .then((result) => {
    console.log("Result: ", result);
  })
  .catch((error) => {
    console.error(error);
  });
