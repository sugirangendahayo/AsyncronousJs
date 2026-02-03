async function fetchUserWithTodos() {
  try {
    const [userRes, todosRes] = await Promise.all([
      fetch("https://jsonplaceholder.typicode.com/users"),
      fetch("https://jsonplaceholder.typicode.com/todos"),
    ]);

    const [users, todos] = await Promise.all([userRes.json(), todosRes.json()]);

    const usersWithTodos = users.map((user) => ({
      ...user,
      todos: todos.filter((todo) => todo.userId === user.id),
    }));
    console.log("Users with todos: ", usersWithTodos);
  } catch (error) {
    console.error(error);
  }
}
fetchUserWithTodos();
