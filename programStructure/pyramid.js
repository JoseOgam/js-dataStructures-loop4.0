let pyramid = (rows) => {
  for (let i = 1; i <= rows; i++) {
    let str = "";
    //add white space to the left
    for (let k = 1; k <= rows - i; k++) {
      str += " ";
    }
    //Add the '*' for each row
    for (let j = 0; j != 2 * i - 1; j++) {
      str += "*";
    }
    //add space to the right
    for (let k = 1; k <= rows; k++) {
      str += " ";
    }
    console.log(str);
  }
};
console.log(pyramid(6));
