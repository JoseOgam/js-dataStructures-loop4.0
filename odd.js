// let num = 1000;
// for (let i = 0; i < num; i++) {
//   if (i % 2 !== 0) {
//     console.log(`${i} is odd number`);
//   }
// }

// function buildString(...template) {
//   return `I like #{template.join(',')}`;
// }

function buildString(...template) {
  return `I like ${template}`;
}
console.log(buildString("cheese", " milk", " honey"));

// const myArray = [1, 2, NaN, 4];
// console.log(myArray.indexOf(NaN) + myArray.indexOf(4));
