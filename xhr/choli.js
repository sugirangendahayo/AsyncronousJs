try {
  let user = JSON.parse("wrong json"); // error happens immediately
  console.log(user);
} catch (error) {
  console.log(error);
}
