// // // try,catch and finally

// // // try {
// // //   throw new Error("my custom  errors");
// // // } catch (err) {
// // //   console.log("err", err);
// // // } finally {
// // //   console.log("this will alway executes");
// // // }

// // //creating a promise

// // let promise = new Promise(function (resolve, reject) {
// //   setTimeout(resolve, 100, "someValue");
// // });
// // console.log(promise);
// // let journal = [];

// // function addEntry(events, squirrel) {
// //   return journal.push({ events, squirrel });
// // }

// // console.log(addEntry(["weekend", "cycling", "break", "peanuts", "beer"], true));

// function Journal(events = [], squirrel) {
//   this.events = events;
//   this.squirrel = squirrel;
// }

// let addEntry = new Journal(
//   ["weekend", "cycling", "break", "peanuts", "beer"],
//   true
// );
// console.log(addEntry);

let arr = ["weekend", "cycling", "break", "peanuts", "beer"];
console.log(arr.length - 1);
