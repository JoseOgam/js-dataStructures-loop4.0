class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}​
class LinkedList {
    constructor(values = []) {
        this.head = null;​
        for (let value of values) {
            this.insertLast(value);
        }
    }
    getFirst() {
        return this.head;
    }
    getLast() {
        if (!this.head) {
            return null;
        }​
        let node = this.head;
        while (node) {
            if (!node.next) {
                return node;
            }
            node = node.next;
        }
    }
    insertLast(data) {
        const last = this.getLast();​
        if (last) {
            last.next = new Node(data);
            return last.next;
        } else {
            this.head = new Node(data);
            return this.head;
        }
    }
}​
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
​
function midpoint(list) {
    let slow = list.getFirst();
    let fast = list.getFirst();​
    while (fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
}​
// ----> [A-----B-----C-----D-----E-----F-----G] ---->
// ------                  (s)               (f)
​
// ----> [A-----B-----C-----D-----E-----F]
//                   (s)         (f)
​
var data1 = new LinkedList();
data1.insertLast("a");
data1.insertLast("b");
data1.insertLast("c");
data1.insertLast("d");
data1.insertLast("e");
data1.insertLast("f");​
console.log(midpoint(data1));