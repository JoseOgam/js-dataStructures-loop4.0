/* Isogram : An isogram is a word that has no repeating letters,
 consecutive or non-consecutive. For eg.: Joseph*/
function isogram(str) {
    let arr = str.toLowerCase().split("");
    let newArr = []
    for (let i = 0; i < arr.length; i++) {

        if (!newArr[arr[i]]) {

            newArr[arr[i]] === arr[i];
        } else {

            return false;
        }
    }
    return true;
}

console.log(isogram('book'));
console.log(isogram('Joseph'));