// const string = () => {
//     let doublequote = "Joseph";
//     let singlequote = 'Otieno';
//     let backtick = `Ochieng`;

//     return `my name is ${doublequote} ${singlequote} ${backtick}`
// }

// console.log(string());


// const sum = function(a, b) {
//     return a + b;
// }
// console.log(`10 + 5 = ${sum(10, 5)}`);


// function list() {
//     let guestlist = `Guests:
//     * John
//     * Pete
//     * Mary 
//     `;
//     return guestlist;
// }
// console.log(list());

// var len = function(params) {
//     let str = "hello"
//         //the last element/character
//         // return str[str.length - 1];
//         // return str[1000]; // undefined
//     let k = str[4].toLocaleUpperCase(); //string empty
//     return k;
// }
// console.log(len());


// //iterating through a string using for....of

// // function it(params) {
// //     for (let char of "Hello")
// //         return char;
// // }
// // console.log(it());

// //searching for string str.indexOf()

// function search() {
//     let str = "widget with id";
//     let look = str.indexOf("id", 2)
//     return look;
// }

// console.log(search())

const loop = () => {
    let str = 'As sly as a fox, as strong as an ox';
    let target = 'as';
    let pos = 0;
    while (true) {
        let foundPos = str.indexOf(target, pos);
        if (foundPos === -1) break;
        return (`found at ${foundPos}`);
        pos = foundPos + 1;
    }
}
console.log(loop());