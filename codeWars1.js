function capital(capitals) {

    let output = [];

    capitals.forEach(function(f) {

        output.push("The capital of " + (f.state || f.country) + " is " + f.capital);
    });

    return output;
}
console.log(capital([{ 'country': 'Kenya', 'capital': 'Nairobi' }]));
console.log(capital([{ 'country': 'SA', 'capital': 'Pretoria' }]));

/*
Write a method that takes a sequence of objects with two keys each: 
country or state, and capital. Keys may be symbols or strings

The method should return an array of sentences declaring
 the state or country and its capital.
*/