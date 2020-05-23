//arrays and function

function practice() {
    let fruits = ["Bananas", "Apples"];
    console.log(fruits.push("Oranges", "watermelon")); // add element
    console.log(fruits.pop()); // remove element from the end
    console.log(fruits.shift()); // remove element from front
    console.log(fruits.unshift("strawberry")); //add elemebt to the front
    console.log(fruits);

    //printing out days of the week

    let daysOfTheWeek = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
    for (let i = 0; i < daysOfTheWeek.length; i++) {
        console.log(daysOfTheWeek[i]);
    }
}
practice();