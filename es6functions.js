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

// function getValue() {
//     return 5
// }

// function addition(first, second = getValue()) {
//     return first + second
// }

// console.log(addition(1,9))
// let arr = [1, 2]

// const addition = (a, ...arr) => {
//     return a + arr
// }
// console.log(3)


// const parent = {
//     name: "Joseph Otieno",
//     kid: "Jose Jr"
// }

// const child = Object.create(parent)

// console.log(child.__proto__ === parent)


// const createPerson = (name, age) => {
//     return {
//         name,
//         age
//     }
// }

// console.log(createPerson("Joseph Otieno" , 26))

// console.log(+0 == -0)
// console.log(+0 === -0)
// console.log(Object.is(+0, -0))

let cd = ()=>{
    var time = new Date().getHours()
    if (time < 16) {
        return `have a nice day`
    } else {
        return `goodnight!! its ${time}hours`
    }
    // return `${time} hours`
}
console.log(cd())