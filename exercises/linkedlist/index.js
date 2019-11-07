// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

// my first solution
class Node {

    constructor(data, prev, next) {
        this.data = data;
        this.prev = prev;
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
        const newFirstNode = new Node(element, null, previousFirstNode);

        previousFirstNode.prev = newFirstNode;

        this.length++;

        this.head = newFirstNode;
    }

    insertLast(element) {
        if (this.length === 0) {
            return this._insertFirstElement(element);
        }

        const previousTailNode = this.tail;
        const newTailNode = new Node(element, previousTailNode, null);

        previousTailNode.next = newTailNode;

        this.tail = newTailNode;

        if (this.length === 1) {
            this.head.next = newTailNode;
        }

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
            return;
        }

        if (this.length === 1) {
            this.clear();
            return;
        }

        let newLastNode = this.getAt(this.length - 2);
        newLastNode.next = null;

        this.length--;

        if (this.length <= 0) {
            return this._insertFirstElement(newLastNode.data);
        }

        this.tail = newLastNode;
    }

    removeAt(index) {
        if (this.length === 0) {
            return;
        }

        if (this.length === 1) {
            this.clear();
            return;
        }

        const nodeToBeRemoved = this.getAt(index);
        const prev = nodeToBeRemoved.prev;
        const next = nodeToBeRemoved.next;

        prev.next = next;
        next.prev = prev;
        this.length--;
    }

    getFirst() {
        return this.head;
    }

    getLast() {
        return this.tail;
    }

    getAt(index) {
        if (this.length === 0) {
            return null;
        }

        if (index === 0) {
            return this.head;
        }

        let node = null;
        const middle = (this.length - 1) / 2;

        if (index <= middle) {
            node = this.head;
            for (let i = 1; i <= index; i++) {
                node = (node || {}).next;
            }
        } else {
            node = this.tail;
            for (let i = this.length - 1; i > index; i--) {
                node = (node || {}).prev;
            }
        }

        return node;
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
        this.head = new Node(element, null, null);
        this.tail = new Node(element, null, null);
        this.length++;
    }
}

module.exports = { Node, LinkedList };
