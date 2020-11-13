// function mixArg(first, second) {
//     "use strict"
//     console.log(arguments.length)
//     console.log(first === arguments[0])
//     console.log(second === arguments[1])
    
//     first = "c"
//     second = "d"
    
//     console.log(first === arguments[0])
//     console.log(second === arguments[1])
// }
// mixArg("a","b")

function getValue() {
    return 5
}

function addition(first, second = getValue()) {
    return first + second
}

console.log(addition(1,9))