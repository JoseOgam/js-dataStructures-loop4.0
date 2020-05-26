// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' html document
class Node {
    constructor(data, next = null) {
        this.next = next;
        this.data = data;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }
}

const list = new LinkedList();
console.log(list.head);

const n = new Node('There');
n.data // 'there'
n.next // null
const n2 = new Node('Hi', n);
n.next // returns n

console.log(n.data);