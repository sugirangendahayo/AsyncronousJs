// Create functions that fetch user data, user posts, and user friends (all return Promises with delays). Use Promise.all() to fetch all three simultaneously and log the combined result.


function fetchUserProfile(userId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id: userId, name: "Solomon", age: 28 });
    }, 1000);
  });
}
function fetchUserPosts(userId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, title: "Welcome to dubai!", comment: "Wow, amazing country" },
        {
          id: 2,
          title: "Visiting china!",
          comment: "Wow, i plan also to visit that country!",
        },
      ]);
    }, 1500);
  });
}
function fetchUserFriends(userId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(["Bob", "Rihanna", "Caleb"]);
    }, 2000);
  });
}
async function fetchUserData(userId) {
  try {
    const [user, posts, friends] = await Promise.all([
      fetchUserProfile(userId),
      fetchUserPosts(userId),
      fetchUserFriends(userId),
    ]);
    console.log("User profile: ", user);
    console.log("User posts: ", posts);
    console.log("User friends: ", friends);

    return { user, posts, friends };
  } catch (error) {
    console.error("Error: ", error);
  }
}
fetchUserData(123);
