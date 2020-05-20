// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

//function declaration
function pyramid(n) {
    // looping through the levels
    for (let i = 0; i < n; i++) {

        var output = ''; // reset each level of the loop
        for (let j = 0; j < n - i; j++) output += ' '; //
        for (let k = 0; k <= i; k++) output += '# '; //Add the '#' for each row
        console.log(output); //Print the pyramid pattern for each row
    }

    /* for (let i = 1; i <= n; i++) {
         let str = '';

         //Add the white space to the left
         for (let k = 1; k <= (n - i); k++) {
             str += ' ';
         }

         //Add the '*' for each row
         for (let j = 0; j != (2 * i - 1); j++) {
             str += '*';
         }

         //Add the white space to the right
         for (let k = i + 1; k <= n; k++) {
             str += ' ';
         }

         //Print the pyramid pattern for each row
         console.log(str);
     } */
}

pyramid(10) // pass number of row of pyramid you want.