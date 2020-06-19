const string = () => {
    let doublequote = "Joseph";
    let singlequote = 'Otieno';
    let backtick = `Ochieng`;

    return `my name is ${doublequote} ${singlequote} ${backtick}`
}

console.log(string());


const sum = function(a, b) {
    return a + b;
}
console.log(`10 + 5 = ${sum(10, 5)}`);


function list() {
    let guestlist = `Guests:
    * John
    * Pete
    * Mary 
    `;
    return guestlist;
}
console.log(list());

var len = function(params) {
    let str = "hello"
        //the last element/character
        // return str[str.length - 1];
        // return str[1000]; // undefined
    let k = str[3].toLocaleUpperCase(); //string empty
    return k;
}
console.log(len());


//iterating through a string using for....of

// function it(params) {
//     for (let char of "Hello")
//         return char;
// }
// console.log(it());