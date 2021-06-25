// for (let n =1; n <= 10; n++)
//     {
//         if (n % 2 !== 0)
//         {
//             console.log(`${n}: is an odd number`)
//         } 
//

// let arr = [];
// arr.push(1, 2, 3, 4, 5)
// arr.pop()
// arr.shift()
// arr.unshift(5)

// console.log(arr)

// let arrs = ['a', 'b', 'c']

// // for (let arr of arrs)
// // {
// //     console.log(arr)
// // }
// console.log(arrs.join(""))

// const str = 'coconuts'
// console.log(str.slice(4, 7))
// console.log(str.indexOf('u'))



const randomPointOnCircle = (radius) => {
    var angle = Math.random() * 2 * Math.PI;
    return ({
        x: radius * Math.cos(angle), y: radius * Math.sin(angle)
    })
}
console.log(randomPointOnCircle(2))