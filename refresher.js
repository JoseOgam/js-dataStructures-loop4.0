// // for (let n =1; n <= 10; n++)
// //     {
// //         if (n % 2 !== 0)
// //         {
// //             console.log(`${n}: is an odd number`)
// //         } 
// //

// // let arr = [];
// // arr.push(1, 2, 3, 4, 5)
// // arr.pop()
// // arr.shift()
// // arr.unshift(5)

// // console.log(arr)

// // let arrs = ['a', 'b', 'c']

// // // for (let arr of arrs)
// // // {
// // //     console.log(arr)
// // // }
// // console.log(arrs.join(""))

// // const str = 'coconuts'
// // console.log(str.slice(4, 7))
// // console.log(str.indexOf('u'))



// const randomPointOnCircle = (radius) => {
//     var angle = Math.random() * 2 * Math.PI;
//     return ({
//         x: radius * Math.cos(angle), y: radius * Math.sin(angle)
//     })
// }
// console.log(randomPointOnCircle(2))
//https://www.codewars.com/kata/5761a717780f8950ce001473/train/javascript
function  calculateAge(a,b) {
   var currentY = b-a;
    var futureDate = a - b
    var one = b - a == 1
    var inOne = a-b == 1

   if(b>a){
     return `You are ${currentY} years old.`
   }
  else if(a>b){
    return `You will be born in ${futureDate} years.`
  }else if (a===b){
    return `You were born this very year!`
  }
  else if(one){
    return  `You are 1 year old.`
  }
  else if(inOne){
    return `You will be born in 1 year.`
  }
  else{
    return `Do you know what you doing?!`
  }

}

console.log(calculateAge(1993, 1994))