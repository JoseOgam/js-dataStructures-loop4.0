let result = 1
let nest = () => {
  
    return result
}

console.log(nest())

let local = () => {
 
    return result
}

console.log(local())