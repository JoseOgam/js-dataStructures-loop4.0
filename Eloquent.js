// //function definion
// const square = function(x) { //one parameter
//     return x * x;
// }
// console.log(square(3));


// const makeNoise = function() { // no parameter
//     console.log('ping');
// }

// makeNoise();

// const power = function(base, exponent) { // more than one parameter
//     let result = 1;
//     for (let count = 0; count < exponent; count++) {
//         result *= base;
//     }
//     return result;
// }

// console.log(power(2, 10));

// //Bindings and Scopes
// let x = 10;
// if (true) {
//     let y = 20;
//     var z = 30;
//     result = x + y + z;
//     console.log(result);
// }
// console.log(x + z);

//Nested Scope

const hummus = function(factor) {
    const ingredient = function(amount, unit, name) {
        let ingredientAmount = amount * factor;
        if (ingredientAmount > 1) {
            unit += 's';
        }
        console.log(`${ingredientAmount} ${unit} ${name}`)
    };
    ingredient(1, "can", "chickpeas");
    ingredient(0.25, "cup", "tahini");
    ingredient(0.25, "cup", "lemon juice");
    ingredient(1, "clove", "garlic");
    ingredient(2, "tablespoon", "olive oil");
    ingredient(0.5, "teaspoon", "cumin");
};
console.log(hummus(2));