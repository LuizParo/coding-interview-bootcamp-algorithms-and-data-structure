// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');

// my first solution
// class Queue {

//     constructor() {
//         this._stackOne = new Stack();
//         this._stackTwo = new Stack();
//     }

//     add(element) {
//         while(this._stackTwo.peek()) {
//             this._stackOne.push(this._stackTwo.pop());
//         }

//         this._stackOne.push(element);
//     }

//     remove() {
//         while(this._stackOne.peek()) {
//             this._stackTwo.push(this._stackOne.pop());
//         }

//         return this._stackTwo.pop();
//     }

//     peek() {
//         while(this._stackOne.peek()) {
//             this._stackTwo.push(this._stackOne.pop());
//         }

//         return this._stackTwo.peek();
//     }
// }

// solution #1
class Queue {

    constructor() {
        this.first = new Stack();
        this.second = new Stack();
    }

    add(record) {
        this.first.push(record);
    }

    remove() {
        while(this.first.peek()) {
            this.second.push(this.first.pop());
        }

        const record = this.second.pop();

        while(this.second.peek()) {
            this.first.push(this.second.pop());
        }

        return record;
    }

    peek() {
        while(this.first.peek()) {
            this.second.push(this.first.pop());
        }

        const record = this.second.peek();

        while(this.second.peek()) {
            this.first.push(this.second.pop());
        }

        return record;
    }
}

module.exports = Queue;
