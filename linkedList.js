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
    get() {

    }
    clear() {
        this.head = null;
    }
    removeFirst() {

        if (!this.head) {
            return;
        } else {
            this.head = this.head.next;
            return this.head;
        }

    }
    removeLast() {

        if (!this.head) {
            return;
        }
        if (!this.head.next) {
            this.head = null;
            return;
        }
        let previous = this.head;
        let current = this.head.next;
        while (current.next) {
            previous = current;
            current = current.next;
        }
        previous.next = null;

    }
    insertLast() {


    }
    getAt() {

    }

}

var node = new Node('a', 'b');
// console.log(node.data);
// console.log(node.next);

var list = new LinkedList();
list.insertFirst(5);
list.insertFirst(4);
list.insertFirst(7);
// list.removeLast();
list.insertLast(40);
console.log(list);