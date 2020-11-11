const parent = { a: 99 }

const child = Object.create(null)

console.log(child.a)

console.log(child.__proto__ === parent)

// const user = { name: "full name" }

// const mallicious = { isAdmin: true }

// user["__proto__"] = mallicious

// console.log(user.isAdmin)