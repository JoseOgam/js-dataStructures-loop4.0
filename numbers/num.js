// let num = 11e9;
// console.log(num);

// let a = 1.2e-2;
// console.log(a);

const numbers = function(a, b) {
    let result = a / b;
    return (+result.toFixed(1));
}
console.log(numbers(7, 4));