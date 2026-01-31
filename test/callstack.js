console.log('A');

setTimeout(() => console.log('B'), 0);

Promise.resolve()
    .then(() => console.log('C'))
    .then(() => console.log('D'));

setTimeout(() => {
    console.log('E');
    Promise.resolve().then(() => console.log('F'));
}, 0);

Promise.resolve().then(() => {
    console.log('G');
    setTimeout(() => console.log('H'), 0);
});

console.log('I');
```



```
A
I
C
G
D
B
E
F
H