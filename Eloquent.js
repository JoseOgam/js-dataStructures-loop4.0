//function definion
const square = function(x) { //one parameter
    return x * x;
}
console.log(square(3));


const makeNoise = function() { // no parameter
    console.log('ping');
}

makeNoise();

const power = function(base, exponent) { // more than one parameter
    let result = 1;
    for (let count = 0; count < exponent; count++) {
        result *= base;
    }
    return result;
}

console.log(power(2, 10));

//Bindings and Scopes
let x = 10;
if (true) {
    let y = 20;
    var z = 30;
    result = x + y + z;
    console.log(result);
}
console.log(x + z);

//Nested Scope

const humms = function(factor) {
    const ingredients = function(amount, unit, name) {
        let ingredientsAmount = amount * factor;
        if (ingredientsAmount > 1) {
            unit += 's';
        }
        console.log(`${ingredientsAmount} ${unit} ${name}`)
    };
    ingredients(0.5, 'cup', 'chicken');
    ingredients(1, 'teaspoon', 'sugar');
};

console.log(humms(2));

//Arrow function

const squ = (x) => { return x * x };
console.log(squ(5));

const minus = (a, b) => {
    if (b === undefined) {
        return -a;
    } else {
        return a - b;
    }
}

console.log(minus(10));
console.log(minus(10, 5));