// try,catch and finally

// try {
//   throw new Error("my custom  errors");
// } catch (err) {
//   console.log("err", err);
// } finally {
//   console.log("this will alway executes");
// }

//creating a promise

let promise = new Promise(function (resolve, reject) {
  setTimeout(resolve, 100, "someValue");
});
console.log(promise);
