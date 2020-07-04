// // const arr = [1, 2, 3, 4, 5, 6, 7, 8];
// // console.log(arr.slice(2, -2));
// function array(arr) {
//   //Good luck
//   if (!arr) {
//     return null;
//   } else {
//     return arr.slice(1, -1);
//   }
// }
// console.log(array("1,2,3,4"));
// let name = "Joseph";
// let res = name.split("");
// let q = res.join("");
// console.log(res);
// console.log(q);

/*
remove all exclamation from the end of a statement
*/
// function remove(s) {
//   //coding and coding....
//   return s.replace(/!*$/g, ""); ----. g rep all the occurences dollar sign towards the end
// }
// console.log(remove("!hi!!!"));

function remove(s) {
  return s.split("!").join("");
}
console.log(remove("!hi!!"));
