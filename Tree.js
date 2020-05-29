// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree
class Node {
    constructor(value) {
        this.value = value;
        this.children = [];
    }
    add() {

    }
    remove() {

    }
}

class Tree {
    constructor(value) {
        this.value = value;
        this.children = [];
        this.parent = null;
    }
}

// creating nodes with values
const king = new Node('King');
const queen = new Node('Queen');
const prince = new Node('Prince');
const maids = new Node('Maids');
const kingdom = new Node('Kingdom');

//// associate parents with its childrens
king.children.push(queen, prince, maids);

console.log(king.children);