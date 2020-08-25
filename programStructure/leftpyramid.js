let leftpyramid = (rows) => {
  for (let i = 1; i <= rows; i++) {
    let str = "";

    // add * for each row
    for (let p = 1; p <= i; p++) {
      str += "*";
    }
    console.log(str);
  }
};
console.log(leftpyramid(5));
