
function placeOrder(item) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const orderId = Math.floor(Math.random() * 1000);
      // console.log(`Order placed for ${item}. Order ID: ${orderId}`);
      resolve(orderId);
    }, 1000);
  });
}
function prepareFood(orderId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Food is being prepared for order ${orderId}`);
      resolve(orderId);
    }, 2000);
  });
}
function deliverFood(orderId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Food is delivered for order ${orderId}`);
      resolve(orderId);
    }, 3000);
  });
}

placeOrder("Pizza")
  .then((orderId) => {
    console.log("orderId from first promise: ", orderId);
    return prepareFood(orderId)
  })
  .then((dfbs) => {
    console.log("orderId from second promise: ", dfbs);
    return deliverFood(dfbs)
  })

  .then((result) => console.log("Final: ", result))
  .catch((error) => console.error(error));



