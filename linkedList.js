// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' html document
class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;

    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }
    insertFirst(data) {
        this.head = new Node(data, this.head);
    }
    size() {
        let count = 0;
        let node = this.head;
        while (node) {
            count++;
            node = node.next;
        }
        return count;

    }
    getFirst() {
        this.head[this.head - 1];
    }

}

var node = new Node('a', 'b');
// console.log(node.data);
// console.log(node.next);

var list = new LinkedList();
list.insertFirst(5);
list.insertFirst(4);
list.insertFirst(7);

console.log(list.getFirst());