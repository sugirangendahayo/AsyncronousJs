try {
    fetch("url"); // ❌ ReferenceError outside async? Not caught by fetch.catch()
  console.log(nonExistentVar); // ReferenceError
} catch (err) {
  console.log(err); 
}

