let rightpyramid = (rows) => {
  for (let i = 1; i <= rows; i++) {
    let str = "";
    //add white space to the left
    for (let k = 1; k <= rows - i; k++) {
      str += " ";
    }
    //Add the '*' for each row
    for (let j = 1; j <= i; j++) {
      str += "*";
    }
    console.log(str);
  }
};
console.log(rightpyramid(6));
