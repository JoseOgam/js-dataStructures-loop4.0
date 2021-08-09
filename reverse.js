//https://www.codewars.com/kata/5583090cbe83f4fd8c000051/train/javascript
function digitize(n) {
    var initialArray = ("" + n).split('');
    var reversedArray = [];
    for (var i = initialArray.length - 1; i >= 0; i--) {
        reversedArray[i] = parseInt(initialArray.shift(), 10);
    }
    return reversedArray;
}

// console.log(digitize(348597));


// let arr = [1, 2, 3, 4, 5]
// let add = arr.reduce((a, b) => {
//     return a + b
// })
// console.log(add)

// // for (l of arr)
// // {
// //     console.log(l)
// // }

// // arr.map((n) => {
// //     console.log(n)
// // })

// let k = arr.filter((n) => n !== 1)
// console.log(k)

let str = (n) => {
    let spt = ("" + n).split('')
    let reverse = spt.reverse()
    return reverse
}

console.log(str(12345))