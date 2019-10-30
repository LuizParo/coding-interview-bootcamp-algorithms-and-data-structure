// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    let reverseString = [];

    for (let i = str.length, j = 0; i >= 0; i--, j++) {
        reverseString[j] = str.charAt(i);
    }

    return reverseString.join('');
}

module.exports = reverse;
