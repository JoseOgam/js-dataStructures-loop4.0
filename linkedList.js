// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' html document
​
class Node {
    constructor(data, next){
        this.data = data;
        this.next = next;
}
data(){
    return this.data;
}
next(){
    if (this.next ? :(''))
    return 'null';
    else  
    return this.next
}
}
​
const n = new Node ('There')
​
console.log(n.next())
​
​
​
​
class LinkedList {
    constructor(){
        this.node = [];
    }
head(){
    return this.node;
}
​
insertFirst(data){
    return this.node.push(data);
}
​
size(){
    return this.node.length();
}
​
getFirst(){
    return this.node.shift(); //Removes the first element from an array and returns that element.
}
​
getLast(){
    for( let i = 0; i < this.node.length; i++) {
        return this.node.slice(i);
    }
}
​
clear(){
    return this.node.








