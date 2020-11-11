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


// const map = Object.create(null)

// map.count = 1

// if (map.count === 5) {
//     console.log("count key with numeric value")
// } else {
//     console.log("greater than 1")
// }

let set = new Set([1,2,3,4,5,6])
// set.add(5)
// set.add("5")

// let key1 = {}
// let key2 = {}

// set.add(key1)
// set.add(key2)

// console.log(set)
// console.log(set.has(key2))

// set.forEach((key,value, ownerset) => {
//     console.log(`${key} ${value}`)
//     console.log(ownerset === set)
    

// })

// let array = [...set]
// console.log(array)

let map = new Map()

let key1 = {}
let key2 = {}

map.set(key1, 5)
map.set(key2, 45)
map.set('name', 'Joseph')
map.set('age', 26)


// console.log(map.get("name"))
// console.log(map.has("name"))
// console.log(map.size)

map.forEach((items,value, ownermap) => {
    console.log(`${items} ${value}`)
    console.log(ownermap === map)
})