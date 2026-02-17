// Fetch users and todos concurrently and combine them by userId
// users("https://jsonplaceholder.typicode.com/users");
// todoa("https://jsonplaceholder.typicode.com/todos");

async function fetchUserWithTodos() {
    try {
        const usersUrl = "https://jsonplaceholder.typicode.com/users";
        const todosUrl = "https://jsonplaceholder.typicode.com/todos";

        const [users, todos] = await Promise.all([
          fetch(usersUrl).then((res) => res.json()),
          fetch(todosUrl).then((res) => res.json()),
        ]);
        return users.map((user) => ({
          ...user,
          todos: todos.filter((todo) => todo.userId === user.id),
        }));
    } catch (error) {
        throw error;
    }
  
}
async function main() {
  try {
    const result = await fetchUserWithTodos();
    console.log("Result: ", result);
  } catch (error) {
    throw error;
  }
}
main()