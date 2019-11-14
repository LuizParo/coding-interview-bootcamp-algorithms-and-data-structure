// --- Directions
// Create an 'eventing' library out of the
// Events class.  The Events class should
// have methods 'on', 'trigger', and 'off'.

class Events {

    // my first solution
    constructor() {
        this.eventMap = {};
    }

    // Register an event handler
    on(eventName, callback) {
        const events = this.eventMap[eventName];

        if (!events) {
            this.eventMap[eventName] = [callback];
            return;
        }

        events.push(callback);
    }

    // Trigger all callbacks associated
    // with a given eventName
    trigger(eventName) {
        const events = this.eventMap[eventName];

        if (!events) {
            return;
        }

        events.forEach(callback => callback());
    }

    // Remove all event handlers associated
    // with the given eventName
    off(eventName) {
        delete this.eventMap[eventName];
    }
}

module.exports = Events;
