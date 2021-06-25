// //arrays and function

// function practice() {
//     let fruits = ["Bananas", "Apples"];
//     console.log(fruits.push("Oranges", "watermelon")); // add element
//     console.log(fruits.pop()); // remove element from the end
//     console.log(fruits.shift()); // remove element from front
//     console.log(fruits.unshift("strawberry")); //add elemebt to the front
//     console.log(fruits);

//     //printing out days of the week

//     let daysOfTheWeek = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
//     for (let i = 0; i < daysOfTheWeek.length; i++) {
//         console.log(daysOfTheWeek[i]);
//     }
// }
// practice();

// let arr = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
// let found = arr.find((day) => day === "monda")
// console.log(found)

function pascalsTriangle(n) {
  //return a flat array representing the values of Pascal's Triangle to the n-th level
    if (n === 0) return [];
    if (n === 1) return [1];
    let result = [];
    for (let row = 1; row <= n; row++) {
        let arr = [];
        for (let col = 0; col < row; col++) {
            if (col === 0 || col === row - 1) {
                arr.push(1);
            } else {
                arr.push((result[row-2][col-1] + result[row-2][col]));
            }
        }
        result.push(arr);
    }
    return result;
}
console.log(pascalsTriangle(2))