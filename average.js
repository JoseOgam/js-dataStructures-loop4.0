// https://www.codewars.com/kata/57a2013acf1fa5bfc4000921/train/javascript
function find_average(array) {
    var sum = array.reduce((a, b) => a + b, 0);
    return sum / array.length;
}
console.log(find_average([2, 4, 1, 5]));