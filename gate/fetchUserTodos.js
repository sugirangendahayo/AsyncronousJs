async function fetchUserTodos() {
  try {
    const usersUrl = "https://jsonplaceholder.typicode.com/users";
    const todosUrl = "https://jsonplaceholder.typicode.com/todos";

 const [users, todos] = await Promise.all([
  fetch(usersUrl).then(res=> res.json()),
  fetch(todosUrl).then(res=> res.json()),
 ])

    return users.map((user) => ({
      ...user,
      todos: todos.filter((todo) => todo.userId === user.id),
    }));
  } catch (error) {
    throw error;
  }
}
(async () => {
  const data = await fetchUserTodos();
  console.log(data);
})();
