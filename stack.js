class Stack {
  constructor() {
    this.elements = [];
  }
  add(elements) {
    return this.elements.push(elements);
  }
  remove() {
    return this.elements.pop();
  }
  peek() {
    return this.elements[this.elements.length - 1];
  }
}

let s = new Stack();
s.add(1);
s.add(2);
s.add(3);
s.add("a");
s.add("b");
s.add("c");

console.log(s.peek());
