/*
Implement a function that adds two numbers together and returns their 
sum in binary. The conversion can be done before, or after the addition.
*/
// https: //www.codewars.com/kata/551f37452ff852b7bd000139/train/javascript
function addBinary(a, b) {
    let result = a + b;
    return result.toString();
}
console.log(addBinary(3, 7));