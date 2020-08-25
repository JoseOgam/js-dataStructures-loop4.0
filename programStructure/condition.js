function conditional(theNumber) {
  if (Number(theNumber)) {
    return `the number is the square root of ${theNumber * theNumber}`;
  } else {
    return `hey, why don't give me a valid number to deal with`;
  }
}

console.log(conditional("34r5"));

//////////

const multiple = (num) => {
  if (num < 10) {
    return `small`;
  } else if (num < 50) {
    return `medium`;
  } else if (num < 100) {
    return `large`;
  } else {
    return `extra large`;
  }
};
console.log(multiple(3));
