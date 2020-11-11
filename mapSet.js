// let map = new Map();

// map.set("1", "str1")
// map.set(1, "numeric1")
// map.set(true, "bool1")

// console.log(map.delete(true))
// console.log(map.size)

// let reciepeMap = new Map([
//     ["cucumber", 500],
//     ["onion", 200],
//     ["tomatoes", 400]
// ])

// for (let vegetable of reciepeMap) {
//     console.log(vegetable)
// // }

// let obj = {
//     name: "Joseph Otieno",
//     age: 26
// }

// let map = new Map(Object.entries(obj))
//  console.log(map.get("name"))


const map = Object.create(null)

map.count = 1

if (map.count === 5) {
    console.log("count key with numeric value")
} else {
    console.log("greater than 1")
}