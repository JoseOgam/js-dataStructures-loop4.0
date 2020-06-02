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
}

// --- Directions
// Given a linked list, return true if the list
// is circular, false if it is not.
// --- Examples
//   const l = new List();
//   const a = new Node('a');
//   const b = new Node('b');
//   const c = new Node('c');
//   l.head = a;
//   a.next = b;
//   b.next = c;
//   c.next = b;
//   circular(l) // true

function circular(list) {
    let slow, fast;

    if (!head || !head.next) {
        return false;
    }

    slow = head;
    fast = head;

    if (head.next === head) {
        return true;

    }
    while (fast.next.next) {

        slow = slow.next;
        fast = fast.next.next;

        if (slow === fast) {
            return true;
        }
    }

    return false;
}

const l = new Li();
const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
l.head = a;
a.next = b;
b.next = c;
c.next = b;
circular(l); // true