async function fetchUsersWithTodos() {
  try {
    const [usersRes, todosRes] = await Promise.all([
      fetch("https://jsonplaceholder.typicode.com/users"),
      fetch("https://jsonplaceholder.typicode.com/todos"),
    ]);

    const [users, todos] = await Promise.all([
      usersRes.json(),
      todosRes.json(),
    ]);

    const usersWithTodos = users.map((user) => ({
      ...user,
      todos: todos.filter((todo) => todo.userId === user.id),
    }));

    console.log(usersWithTodos);
  } catch (error) {
    console.error("Error:", error);
  }
}

fetchUsersWithTodos();
