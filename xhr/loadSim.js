function loadDashboardData(userId) {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", `https://dummyjson.com/users/${userId}`);

  xhr.onload = function () {
    if (xhr.status === 200) {
      const user = JSON.parse(xhr.responseText);
      console.log("User:", user);
      console.log("Address:", user.address);
      console.log("Bank:", user.bank);
    }
  };

  xhr.send();
}

loadDashboardData(2);
