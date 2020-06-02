// --- Directions
// Return the 'middle' node of a linked list.
// If the list has an even number of elements, return
// the node at the end of the first half of the list.
// *Do not* use a counter variable, *do not* retrieve
// the size of the list, and only iterate
// through the list one time.
// --- Example
//   const l = new LinkedList();
//   l.insertLast('a')
//   l.insertLast('b')
//   l.insertLast('c')
//   midpoint(l); // returns { data: 'b' }

class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor(values = []) {
        this.head = null;

        for (let value of values) {
            this.insertLast(value);
        }
    }
    insertLast(data) {
        const last = this.getLast();

        if (last) {
            last.next = new Node(data);
            return last.next;
        } else {
            this.head = new Node(data);
            return this.head;
        }
    }
    getLast() {

        let node = this.head;
        while (node) {
            if (!node.next) {
                return node;
            }
            node = node.next;
        }

    }
}

function midpoint(list) {
    let tail = { data: "data5", next: null };
    let node4 = { data: "data4", next: tail };
    let node3 = { data: "data3", next: node4 };
    let node2 = { data: "data2", next: node3 };
    let head = { data: "data1", next: node2 };

    let current = head;
    let length = 0;
    let middle = head;

    while (current.next != null) {
        length++;
        if (length % 2 == 0) {
            middle = middle.next;
        }
        current = current.next;

    }
}
const l = new LinkedList();
l.insertLast('a');
l.insertLast('b');
l.insertLast('c');

console.log(midpoint(l));