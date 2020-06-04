// // function trial() {
// //     let arr = [1, 2, 3, 4];
// //     console.log(arr.length);
// //     for (i = 0; i < arr.length; i++) {
// //         console.log(arr[i]);
// //     }

// // }
// // trial();

// const fib = () => {
//     const fibonacci = [];
//     fibonacci[1] = 1;
//     fibonacci[2] = 1;

//     for (i = 3; i < 20; i++) {
//         fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
//     }
//     for (let i = 1; i < fibonacci.length; i++) {
//         console.log(fibonacci[i]);
//     }
//     return fibonacci;
// }
// fib();

const numbers = () => {
    let arr = ['b', 'c', 'd', 'e'];
    arr.push('f', 'g');
    arr.unshift('a');
    arr.splice(1, 0, 'h', 'i', 'j', 'k')
    arr.pop();
    arr.shift()
    return arr;
}
console.log(numbers());