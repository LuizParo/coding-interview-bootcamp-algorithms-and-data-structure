// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

// my first solution
class Node {

    constructor(data, next) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    insertFirst(element) {
        if (this.length === 0) {
            return this._insertFirstElement(element);
        }

        const previousFirstNode = this.head;
        const newFirstNode = new Node(element, previousFirstNode);
        this.length++;

        this.head = newFirstNode;
    }

    insertLast(element) {
        if (this.length === 0) {
            return this._insertFirstElement(element);
        }

        const newTailNode = new Node(element, null);
        const previousLastNode = this.tail;

        previousLastNode.next = newTailNode;

        this.tail = newTailNode;
        this.length++;
    }

    removeFirst() {
        if (this.length === 0) {
            return null;
        }

        this.head = this.head.next;
        this.length--;

        if (this.length === 1) {
            this.tail = this.head;
        }
    }

    removeLast() {
        if (this.length === 0) {
            return null;
        }

        if (this.length === 1) {
            this.clear();
            return;
        }
        
        this.length--;        
        
        let newLastNode = new Node(null, null);
        for (let i = 0; i < this.length - 1; i++) {
            newLastNode = newLastNode.next || this.head.next;
        }

        if (this.length <= 0) {
            return this._insertFirstElement(newLastNode.data);
        }

        this.tail = newLastNode;
    }

    getFirst() {
        return this.head;
    }

    getLast() {
        return this.tail;
    }

    clear() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    size() {
        return this.length;
    }

    _insertFirstElement(element) {
        this.head = new Node(element, null);
        this.tail = new Node(element, null);
        this.length++;
    }
}

module.exports = { Node, LinkedList };
