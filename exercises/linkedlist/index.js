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

        this.head = newFirstNode;

        if (this.length === 1) {
            this.tail.next = null;
            this.tail.prev = newFirstNode;
        }

        this.length++;
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
            this.head.prev = null;
        }

        this.length++;
    }

    removeFirst() {
        if (this.length === 0) {
            return null;
        }

        if (this.length === 1) {
            this.clear();
            return;
        }

        this.head = this.head.next;
        this.length--;

        if (this.length === 1) {
            this.tail.next = null;
            this.tail.prev = this.head;
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

        let newLastNode = this.tail.prev;
        newLastNode.next = null;

        this.length--;

        if (this.length === 1) {
            this.head.next = newLastNode;
            this.head.prev = null;
        }

        if (this.length <= 0) {
            return this._insertFirstElement(newLastNode.data);
        }

        this.tail = newLastNode;
    }

    removeAt(index) {
        if (!this._checkValidIndex(index)) {
            return null;
        }

        if (index === 0) {
            this.removeFirst();
            return null;
        }

        if (index === this.length - 1) {
            this.removeLast();
            return null;
        }

        const nodeToBeRemoved = this.getAt(index);
        const prev = nodeToBeRemoved.prev;
        const next = nodeToBeRemoved.next;

        prev.next = next;
        next.prev = prev;

        if (index === 1) {
            this.head.next = next;
            this.head.prev = null;

            this.tail.prev = prev;
            this.tail.next = null;
        }

        this.length--;
    }

    getFirst() {
        return this.head;
    }

    getLast() {
        return this.tail;
    }

    getAt(index) {
        if (!this._checkValidIndex(index)) {
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
        const head = new Node(element, null, null);
        const tail = new Node(element, this.head, null);

        head.next = tail;

        this.head = head;
        this.tail = tail;
        this.length++;
    }

    _checkValidIndex(index) {
        return this.length > 0 && index >= 0 && index < this.length;
    }
}

module.exports = { Node, LinkedList };
