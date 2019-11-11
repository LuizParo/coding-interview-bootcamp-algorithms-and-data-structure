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

    add(data) {
        this.children.push(new Node(data));
    }

    remove(data) {
        this.children = this.children.filter(node => node.data !== data);
    }
}

class Tree {

    constructor() {
        this.root = null;
    }

    // my first solution
    // traverseBF(fn) {
    //     const nodes = [this.root];

    //     while(nodes.length != 0) {
    //         const currentNode = nodes[0];
    //         fn(currentNode);

    //         if (currentNode.children) {
    //             currentNode.children.forEach(node => nodes.push(node));
    //         }

    //         nodes.splice(0, 1);
    //     }
    // }

    traverseDF(fn) {
        const nodes = [this.root];

        while(nodes.length) {
            const currentNode = nodes.shift();
            fn(currentNode);

            nodes.unshift(...currentNode.children);
        }
    }

    // solution #1
    traverseBF(fn) {
        const arr = [this.root];

        while(arr.length) {
            const node = arr.shift();
            arr.push(...node.children);

            fn(node);
        }
    }
}

module.exports = { Tree, Node };
