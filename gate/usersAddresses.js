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
