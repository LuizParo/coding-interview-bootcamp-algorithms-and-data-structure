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

// my first solution
class Stack {

    constructor() {
        this._elements = [];
        this._lastIndex = -1;
    }

    push(element) {
        this._elements[++this._lastIndex] = element;
    }

    pop() {
        if (this._lastIndex === -1) {
            return;
        }

        const elementToBeRemoved = this._elements[this._lastIndex];
        this._elements.splice(this._lastIndex--);

        return elementToBeRemoved;
    }

    peek() {
        return this._elements[this._lastIndex];
    }
};

module.exports = Stack;
