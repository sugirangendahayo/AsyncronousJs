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


// async function fetchUsersWithTodos() {
//   try {
//     const urls = [
//       "https://jsonplaceholder.typicode.com/users",
//       "https://jsonplaceholder.typicode.com/todos",
//     ];

//     // 1️⃣ Fetch in parallel
//     const responses = await Promise.all(urls.map((url) => fetch(url)));

//     // 2️⃣ Parse in parallel
//     const [users, todos] = await Promise.all(
//       responses.map((res) => res.json()),
//     );

//     // 3️⃣ Combine users with their todos
//     const usersWithTodos = users.map((user) => ({
//       ...user,
//       todos: todos.filter((todo) => todo.userId === user.id),
//     }));

//     console.log(usersWithTodos);
//   } catch (error) {
//     console.error("Error:", error);
//   }
// }

// fetchUsersWithTodos();
