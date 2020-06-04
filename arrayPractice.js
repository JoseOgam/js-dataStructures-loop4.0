const my_collection = [4, 7, 0, 6];

//increment each array index by 2
let new_array = my_collection.map((e, i) => e + 2);
console.log(new_array);


//array definitions in js
//function declaration

let array_demo = [];

console.log("oririginal array", array_demo);

function addTwo(a, b, c) {
    array_demo.push(a, b, c);

    console.log("new look array following push", array_demo);


    let addByTwo = array_demo.map((e, i) => e + 2);
    return addByTwo;
}

console.log(addTwo(4, 9, 7));




//function expression

array_demo = [];

const ongezaMbili = function(a, b, c) {
    array_demo.push(a, b, c);

    console.log("new look array following push", array_demo);


    let addByTwo = array_demo.map((e, i) => e + 2);
    return addByTwo;
};

console.log(ongezaMbili(3, 8, 2));


//Arrow Function
// let array_demo = [];

const zaidiYaMbili = (a, b, c) => {
    array_demo.push(a, b, c);

    console.log("new look array following push", array_demo);


    let addByTwo = array_demo.map((e, i) => e + 2);
    return addByTwo;
};
console.log(zaidiYaMbili(3, 8, 2));