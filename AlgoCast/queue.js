// --- Directions
// Implement a 'peek' method in this Queue class.
// Peek should return the last element (the next
// one to be returned) from the queue *without*
// removing it

class Queue {
  constructor() {
    //initialize the items in a queue
    this.items = [];
  }
  add(items) {
    //first in first out
    return this.items.unshift(items);
  }
  remove() {
    return this.items.pop();
  }
  peek() {
    return this.items[this.items.length - 1];
  }
}

let q = new Queue();

q.add("a");
q.add("c");
q.add("d");
q.remove();

console.log(q.peek());
