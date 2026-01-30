async function fetchData() {
  const randomTime = Math.floor(Math.random() * 2000);
  let money = 1000;
  setTimeout(() => {
    console.log(`You reached here in ${randomTime} ms`);
  }, randomTime);
  return randomTime > 1000
    ? `Time exceeded you are not allowed to take that ${money} $ !`
    : `Time did not exceed , Here is ur ${money} $`;
}
async function getData() {
  const result = await fetchData();
  console.log(result);
}
getData();
