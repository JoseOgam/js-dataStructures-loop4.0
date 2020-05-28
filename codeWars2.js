/*
You are going to be given a word. Your job is to return the middle
 character of the word. If the word's length is odd, return the
  middle character. If the word's length is even, return the middle
   2 characters.
*/

function getMiddle(word) {

    let middle = Math.floor(word.length / 2);
    if (word.length % 2 === 0) {
        return word[middle - 1] + word[middle];
    } else {
        return word[middle];
    }
}
console.log(getMiddle("kiu"));
console.log(getMiddle("testing"));
console.log(getMiddle("middle"));
console.log(getMiddle("Joseph"));