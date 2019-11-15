// --- Description
// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.remove(); // returns 1;

// my first solution
// class Queue {

//     constructor() {
//         this._internalArray = [];
//         this._tailIndex = 0;
//     }

//     add(element) {
//         this._internalArray[this._tailIndex] = element;
//         this._tailIndex++;
//     }

//     remove() {
//         if (this._tailIndex === 0) {
//             return;
//         }

//         const headElementToBeRemoved = this._internalArray[0];
//         this._internalArray = this._internalArray.splice(1, --this._tailIndex); 

//         return headElementToBeRemoved;
//     }
// }

// solution #1
class Queue {

    constructor() {
        this.data = [];
    }

    add(record) {
        this.data.unshift(record);
    }

    remove() {
        return this.data.pop();
    }
}

module.exports = Queue;
