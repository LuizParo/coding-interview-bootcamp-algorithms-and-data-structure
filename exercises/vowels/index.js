// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function _isVowel(char) {
    return char === 'a'
        || char == 'e'
        || char == 'i'
        || char == 'o'
        || char == 'u';
};

function vowels(str) {
    return str.toLowerCase()
              .split('')
              .filter(_isVowel)
              .length;
};

module.exports = vowels;
