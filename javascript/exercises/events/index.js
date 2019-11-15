// --- Directions
// Create an 'eventing' library out of the
// Events class.  The Events class should
// have methods 'on', 'trigger', and 'off'.

class Events {

    // my first solution
    // constructor() {
    //     this.eventMap = {};
    // }

    // // Register an event handler
    // on(eventName, callback) {
    //     const events = this.eventMap[eventName];

    //     if (!events) {
    //         this.eventMap[eventName] = [callback];
    //         return;
    //     }

    //     events.push(callback);
    // }

    // // Trigger all callbacks associated
    // // with a given eventName
    // trigger(eventName) {
    //     const events = this.eventMap[eventName];

    //     if (!events) {
    //         return;
    //     }

    //     events.forEach(callback => callback());
    // }

    // // Remove all event handlers associated
    // // with the given eventName
    // off(eventName) {
    //     delete this.eventMap[eventName];
    // }

    // solution #1
    constructor() {
        this.events = {};
    }

    // Register an event handler
    on(eventName, callback) {
        if (this.events[eventName]) {
            this.events[eventName].push(callback);
        } else {
            this.events[eventName] = [callback];
        }
    }

    // Trigger all callbacks associated
    // with a given eventName
    trigger(eventName) {
        if (this.events[eventName]) {
            for (let callback of this.events[eventName]) {
                callback();
            }
        }
    }

    // Remove all event handlers associated
    // with the given eventName
    off(eventName) {
        delete this.events[eventName];
    }
}

module.exports = Events;
