// --- Directions
// Create a stack data structure.  The stack
// should be a class with methods 'push', 'pop', and
// 'peek'.  Adding an element to the stack should
// store it until it is removed.
// --- Examples
//   const s = new Stack();
//   s.push(1);
//   s.push(2);
//   s.pop(); // returns 2
//   s.pop(); // returns 1
//   s.peek(); // retuns the last element

class Stack {
  constructor() {
    this.elements = [];
  }
  push(elements) {
    return this.elements.push(elements);
  }
  pop() {
    return this.elements.pop();
  }
  peek() {
    return this.elements[this.elements.length - 1];
  }
}
let s = new Stack();
s.push("a");
s.push("b");
s.push("c");
s.push("d");
s.push(1);
s.push(2);
s.push(3);
s.pop();
console.log(s.peek());
