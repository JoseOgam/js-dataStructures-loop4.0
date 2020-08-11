/*
function to remove ! mark toward the end of a sentence
*/

const remove = (s) => {
  return s.replace(/!*$/g, "");
};
console.log(remove("!hello!!!!!!!"));
console.log(new Date());
