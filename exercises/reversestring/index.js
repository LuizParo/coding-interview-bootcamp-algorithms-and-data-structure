// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// my solution
// function reverse(str) {
//     let reverseString = [];

//     for (let i = str.length, j = 0; i >= 0; i--, j++) {
//         reverseString[j] = str.charAt(i);
//     }

//     return reverseString.join('');
// }

// solution #1
function reverse(str) {
    return str.split('')
              .reverse()
              .join('');
};

module.exports = reverse;
