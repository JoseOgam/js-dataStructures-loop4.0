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
    constructor(data) {
        this.data = data;
        this.children = [];
    }
    add(info) {
        this.children.push(new Node(info));
    }
    remove(items) {
        this.children = this.children.filter((node) => {
            return node.data !== items;
        });

    }
}

class Tree {
    constructor(value) {

        this.root = null;
    }
    traverseBF(fn) {
        var arr = [this.root];
        while (arr.length) {
            var node = arr.shift();
            arr.push(...node.children);
            fn(node);
        }
    }
    traverseDF(fn) {
        var arr = [this.root];
        while (arr.length) {
            var node = arr.shift();
            arr.unshift(...node.children);
            fn(node);
        }
    }
}
var items = [];
var t = new Tree();
t.root = new Node(13);
t.root.add('a');
t.root.add('b');
t.root.add('c');
t.root.add('d');
t.root.children[1].add('j');
t.root.children[1].add('k');


t.traverseDF((node) => {
    items.push(node.data);
})
console.log(items);
// // creating nodes with values
// const king = new Node('King');
// const queen = new Node('Queen');
// const prince = new Node('Prince');
// const princes = new Node('Princes');
// const maids = new Node('Maids');

// //// associate parents with its childrens
// king.children.push(queen);
// queen.children.push(prince, princes, maids);

// // console.log(king.children);
// var a = new Node(13);
// console.log(a);

// a.add('b');
// a.add('c');
// a.add('d');

// console.log(a);

// a.remove('d');
// console.log(a);