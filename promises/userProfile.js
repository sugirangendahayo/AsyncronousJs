function fetchUserProfile(userId) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ id: userId, name: "Solomon", age: 38 });
    }, 1000);
  });
}
function fetchUserPosts(userId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: 1,
          title: "Travelling to dubai!",
          comment: "Wow amazing that place",
        },
        {
          id: 2,
          title: "Cooking Amatoki!",
          comment: "I like this food",
        },
      ]);
    }, 2000);
  });
}
function fethUserFriends() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(["Solomon", "Yvettes", "Aline"]);
    }, 3000);
  });
}
async function getUserData(userId) {
  try {
    const [user, posts, friends] = await Promise.all([
      fetchUserProfile(userId),
      fetchUserPosts(userId),
      fethUserFriends(userId),
    ]);

  console.log("Our user is:", user);
  console.log("His posts including comments are:", posts);
  console.log("And here are his friends:", friends);

    return { user, posts, friends };
  } catch (error) {
    console.error("Error: ", error);
  }
}
getUserData(123);
