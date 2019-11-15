// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// my first recursive solution
// function fib(n) {
//     if (n <= 1) {
//         return n;
//     }

//     return fib(n - 1) + fib(n - 2);
// };

// my first iterative solution
// function fib(n) {
//     const result = [0, 1];

//     for (let i = 2; i <= n; i++) {
//         result[i] = result[i - 1] + result[i - 2];
//     }

//     return result[n];
// };

// solution #1
// function fib(n) {
//     const result = [0, 1];

//     for (let i = 2; i <= n; i++) {
//         const a = result[i - 1];
//         const b = result[i - 2];

//         result.push(a + b);
//     }

//     return result[n];
// };

// solution #2
// function fib(n) {
//     if (n < 2) {
//         return n;
//     }

//     return fib(n - 1) + fib(n - 2); 
// };

// solution #3
function memoize(fn) {
    let cache = {};

    return function(...args) {
        if (cache[args]) {
            return cache[args];
        }

        const result = fn.apply(this, args);
        cache[args] = result;

        return result;
    };
};

function fib(n) {
    if (n < 2) {
        return n;
    }

    return memoizedFib(n - 1) + memoizedFib(n - 2);
};

const memoizedFib = memoize(fib);

module.exports = memoizedFib;
