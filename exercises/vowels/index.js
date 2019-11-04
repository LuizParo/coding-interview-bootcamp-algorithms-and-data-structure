// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

// function _isVowel(char) {
//     return char === 'a'
//         || char == 'e'
//         || char == 'i'
//         || char == 'o'
//         || char == 'u';
// };

// my first solution
// function vowels(str) {
//     return str.toLowerCase()
//               .split('')
//               .filter(_isVowel)
//               .length;
// };

// solution #1
function vowels(str) {
    let count = 0;
    const vowels = ['a', 'e', 'i', 'o', 'u'];

    for (let char of str.toLowerCase()) {
        if (vowels.includes(char)) {
            count++;
        }
    }

    return count;
};

module.exports = vowels;
