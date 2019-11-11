// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

// my first solution
// class Node {

//     constructor(data, prev, next) {
//         this.data = data;
//         this.prev = prev;
//         this.next = next;
//     }
// }

// class LinkedList {
    
//     constructor() {
//         this.head = null;
//         this.tail = null;
//         this.length = 0;
//     }

//     insertFirst(element) {
//         if (this.length === 0) {
//             return this._insertFirstElement(element);
//         }

//         const previousFirstNode = this.head;
//         const newFirstNode = new Node(element, null, previousFirstNode);

//         previousFirstNode.prev = newFirstNode;

//         this.head = newFirstNode;

//         if (this.length === 1) {
//             this.tail.next = null;
//             this.tail.prev = newFirstNode;
//         }

//         this.length++;
//     }

//     insertLast(element) {
//         if (this.length === 0) {
//             return this._insertFirstElement(element);
//         }

//         const previousTailNode = this.tail;
//         const newTailNode = new Node(element, previousTailNode, null);

//         previousTailNode.next = newTailNode;

//         this.tail = newTailNode;

//         if (this.length === 1) {
//             this.head.next = newTailNode;
//             this.head.prev = null;
//         }

//         this.length++;
//     }

//     insertAt(element, index) {
//         if (index === 0) {
//             return this.insertFirst(element);
//         }

//         if (index >= this.length) {
//             return this.insertLast(element);
//         }

//         if (!this._checkValidIndex(index)) {
//             return null;
//         }

//         const indexNode = this.getAt(index);
//         const newNode = new Node(element, indexNode.prev, indexNode);

//         indexNode.prev.next = newNode;

//         this.length++;
//     }

//     removeFirst() {
//         if (this.length === 0) {
//             return null;
//         }

//         if (this.length === 1) {
//             this.clear();
//             return;
//         }

//         this.head = this.head.next;
//         this.length--;

//         if (this.length === 1) {
//             this.tail.next = null;
//             this.tail.prev = this.head;
//         }
//     }

//     removeLast() {
//         if (this.length === 0) {
//             return;
//         }

//         if (this.length === 1) {
//             this.clear();
//             return;
//         }

//         let newLastNode = this.tail.prev;
//         newLastNode.next = null;

//         this.length--;

//         if (this.length === 1) {
//             this.head.next = newLastNode;
//             this.head.prev = null;
//         }

//         this.tail = newLastNode;
//     }

//     removeAt(index) {
//         if (!this._checkValidIndex(index)) {
//             return null;
//         }

//         if (index === 0) {
//             this.removeFirst();
//             return null;
//         }

//         if (index === this.length - 1) {
//             this.removeLast();
//             return null;
//         }

//         const nodeToBeRemoved = this.getAt(index);
//         const prev = nodeToBeRemoved.prev;
//         const next = nodeToBeRemoved.next;

//         prev.next = next;
//         next.prev = prev;

//         if (index === 1) {
//             this.head.next = next;
//             this.head.prev = null;

//             this.tail.prev = prev;
//             this.tail.next = null;
//         }

//         this.length--;
//     }

//     getFirst() {
//         return this.head;
//     }

//     getLast() {
//         return this.tail;
//     }

//     getAt(index) {
//         if (!this._checkValidIndex(index)) {
//             return null;
//         }

//         if (index === 0) {
//             return this.head;
//         }

//         if (index === this.length - 1) {
//             return this.tail;
//         }

//         let node = null;
//         const middle = (this.length - 1) / 2;

//         if (index <= middle) {
//             node = this.head;
//             for (let i = 1; i <= index; i++) {
//                 node = (node || {}).next;
//             }
//         } else {
//             node = this.tail;
//             for (let i = this.length - 1; i > index; i--) {
//                 node = (node || {}).prev;
//             }
//         }

//         return node;
//     }

//     clear() {
//         this.head = null;
//         this.tail = null;
//         this.length = 0;
//     }

//     size() {
//         return this.length;
//     }

//     forEach(fn) {
//         if (this.length === 0) {
//             return;
//         }

//         let node = this.head;
//         fn(node);

//         for (let i = 1; i < this.length; i++) {
//             node = (node || {}).next;
//             fn(node);
//         }
//     }

//     [Symbol.iterator]() {
//         const length = this.length;
//         const getAt = this.getAt.bind(this);

//         return {
//             current: 0,
//             last: length,
//             next: function() {
//                 const node = getAt(this.current);

//                 return {
//                     value: node,
//                     done: this.current++ >= length
//                 };
//             }
//         };
//     }

//     _insertFirstElement(element) {
//         const head = new Node(element, null, null);
//         const tail = new Node(element, this.head, null);

//         head.next = tail;

//         this.head = head;
//         this.tail = tail;
//         this.length++;
//     }

//     _checkValidIndex(index) {
//         return this.length > 0 && index >= 0 && index < this.length;
//     }
// }

// solution #1
class Node {

    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {

    constructor() {
        this.head = null;
    }

    insertFirst(data) {
        this.insertAt(data, 0);
    }

    size() {
        let counter = 0;
        let node = this.head;

        while(node) {
            counter++;
            node = node.next;
        }

        return counter;
    }

    getFirst() {
        return this.getAt(0);
    }

    getLast() {
        // not performatic because we'd be double looping the linked list
        // return this.getAt(this.size() - 1);

        if (!this.head) {
            return null;
        }

        let node = this.head;
        while(node.next) {
            node = node.next;
        }

        return node;
    }

    clear() {
        this.head = null;
    }

    removeFirst() {
        if (!this.head) {
            return;
        }

        this.head = this.head.next;
    }

    removeLast() {
        if (!this.head) {
            return;
        }

        if (!this.head.next) {
            this.head = null;
            return;
        }

        let previous = this.head;
        let node = this.head.next;
        while(node.next) {
            previous = node;
            node = node.next;
        }

        previous.next = null;
    }

    insertLast(data) {
        const last = this.getLast();

        if (last) {
            last.next = new Node(data);
        } else {
            this.head = new Node(data);
        }
    }

    getAt(index) {
        if (!this.head) {
            return null;
        }

        if (index === 0) {
            return this.head;
        }

        let node = this.head;
        for (let i = 1; i <= index; i++) {
            if (!node) {
                break;
            }

            node = node.next
        }

        return node;
    }

    removeAt(index) {
        if (!this.head || index < 0) {
            return;
        }

        if (index === 0) {
            return this.removeFirst();
        }

        const previous = this.getAt(index - 1);
        if (!previous) {
            return;
        }
        
        const nodeToBeRemoved = previous.next;
        if (nodeToBeRemoved) {
            previous.next = nodeToBeRemoved.next;
            nodeToBeRemoved.next = null;
        }
    }

    insertAt(data, index) {
        if (index < 0) {
            return;
        }

        if (index === 0) {
            this.head = new Node(data, this.head);
            return;
        }

        const previous = this.getAt(index - 1);
        if (!previous || !previous.next) {
            return this.insertLast(data);
        }

        const next = previous.next;
        previous.next = new Node(data, next);
    }

    forEach(fn) {
        let currentNode = this.head;
        let currentIndex = 0;

        while(currentNode) {
            fn(currentNode, currentIndex);

            currentNode = currentNode.next;
            currentIndex++;
        }
    }

    *[Symbol.iterator]() {
        let node = this.head;

        while (node) {
            yield node;
            node = node.next;
        }
    }
}

module.exports = { Node, LinkedList };
