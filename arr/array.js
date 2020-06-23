// function arrList() {
//     let arr = ['a', 'b', 'd', 'e'];
//     // for (let i = 0; i < arr.length; i++) {
//     //     return arr[i];
//     // }

//     return arr.includes('h')
// }
// console.log(arrList());

function found() {
    let arr = [{
        id: 1,
        name: 'joseph'
    }, {
        id: 2,
        name: 'bonnie'
    }, {
        id: 3,
        name: 'mike'
    }, {
        id: 4,
        name: 'john'
    }, {
        id: 5,
        name: 'gabu'
    }, ];


    // let get = arr.find(item => item.id == 4);
    let fil = arr.filter(item => item.id < 5);
    return fil.length;
    // return get.name;
}
console.log(found());