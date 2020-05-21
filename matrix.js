// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// 4*4 matrix
function matrix(n) {
    let result = new Array(n).fill().map(() => new Array(n).fill('')); // create empty n x n array
    let counter = 1;
    let startCol = 0;
    let endCol = n - 1;
    let startRow = 0;
    let endRow = n - 1;
    //the conditon
    while (startCol <= endCol && startRow <= endRow) {
        for (let i = startCol; i <= endCol; i++) { //  Loop from startCol => endCol
            result[startRow][i] = counter; // Fill in the number
            counter++;
        }

        startRow++;
        for (let j = startRow; j <= endRow; j++) { //Loop from startRow => endRow
            result[j][endCol] = counter; // Fill in the number
            counter++;
        }

        endCol--;

        for (let i = endCol; i >= startCol; i--) { //Loop from endCol => startCol
            result[endRow][i] = counter; //Fill in the number
            counter++;
        }

        endRow--;
        for (let i = endRow; i >= startRow; i--) { //Loop from endRow => startRow
            result[i][startCol] = counter; //fill in the number
            counter++;
        }

        startCol++;

    }

    return result;

}
console.log(matrix(4));