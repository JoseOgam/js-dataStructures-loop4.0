//removing a falsy value from an array

const arr = [0, 1, false, "a", "", 3, null, undefined];
const remove = arr.filter(Boolean);
console.log(remove);
