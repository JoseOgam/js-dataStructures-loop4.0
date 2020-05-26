// --- Directions
// Implement a 'peek' method in this Queue class.
// Peek should return the last element (the next
// one to be returned) from the queue *without*
// removing it


class Queue {
    constructor() {
        //initialize the items in queue
        this.items = []


    }

    add(items) {
        //push items into the queue
        return this.items.unshift(items);
    }

    remove(items) {
        //pull out the first item from the queue
        return this.items.pop();
    }

    peek() {
        //peek at the first item from the queue
        return this.items[this.items.length - 1]
    }

}

let q = new Queue();
q.add(1);
q.add(2);
q.add(3);
q.add('a');
q.add('b');
q.add('c');
console.log(q.peek());