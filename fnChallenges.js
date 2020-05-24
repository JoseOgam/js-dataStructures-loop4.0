function sum(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
        return "sorry seems like you are not using numbers";
    }
    let result = a + b;
    return result;
}

console.log(sum(-5, -5));


//Write a function that takes an integer minutes and converts it to seconds.

function convert(minutes) {
    let result = minutes * 60;
    return result;
}

console.log(convert(5));

//Create a function that takes height and width and finds the perimeter of a rectangle.

function perimeter(height, width) {
    let findPerimeter = (height * 2) + (width * 2);
    return findPerimeter;
}

console.log(perimeter(8, 2));

//create a function that return the first value of an array
function getFirstValue(arr) {
    return arr[0];
}

console.log(getFirstValue([1, 3, 4, 5]));

//create a function that calculate football points
//case study liverpool fc
function footballPoints(wins, draws, losses) {
    let points = (wins * 3) + (draws * 1) + (losses * 0);
    return points;
}

console.log(footballPoints(27, 1, 1));