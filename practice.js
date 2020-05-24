//common type of conversions
console.log(Number.parseInt('55'));
console.log(Number.parseFloat('55.444444556'));

//operaters 

// 1 equality operators

let num = 123;
console.log(num === '123');

/*
== will try to convert variable to same type
=== will ensure that variables remain to the same type
*/

// 2 unary operators

//let year = 1994;
//console.log(year--);
//console.log(year);

//3 logical operators

if (5 === 5 && 6 === 7) {
    console.log(true);
} else {
    console.log(false);
}


let userSettings = { name: 'Ogam' };
let defaultSettings = { name: 'default' };

console.log(userSettings || defaultSettings);

//conditional operators

console.log((5 > 4) ? 'yes' : 'no');

// Assignment operators

let year = 1994;
year -= 10;
console.log(year);

function carWash(a, b) {

    let result = a * b;

    return result;

}

console.log(carWash(400, 50));