let obj1 = { a: 1, b: 2 };
let obj2 = { c: 3, d: 4 };

let obj3 = Object.assign(obj1, obj2);
obj3.c = 6;
obj3.d = 7;

console.log(obj3);
