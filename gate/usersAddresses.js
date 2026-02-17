async function usersAddresses() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();

    return users.slice(0, 3).map((user) => ({
      address: user.address,
    }));
  } catch (error) {
    throw error;
  }
}

usersAddresses()
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
// async function usersAddresses() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const users = await response.json();
//     return users.slice(0, 3).map((user)=>({
//         address: user.address
//     }))
//   } catch (error) {}
// }
// async function main() {
//   try {
//     const result = await usersAddresses();
//     console.log("Result: ", result);
//   } catch (error) {
//     console.error("Error: ", error);
//   }
// }
// main()
