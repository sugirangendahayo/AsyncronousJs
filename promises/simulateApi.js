function fetchUserProfile(userId) {
  return new Promise((resolve, reject) => {
    userId > 3
      ? resolve({ id: userId, name: "Solomon", role: "Software engineer" })
      : reject("Invalid user ID");
  });
}
fetchUserProfile(5)
  .then((user) => {
    console.log(user);
  })
  .catch((error) => {
    console.error(error);
  });
