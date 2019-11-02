// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// my first solution
// function anagrams(stringA, stringB) {
//     const charMapStringA = _toCharMap(stringA);
//     const charMapStringB = _toCharMap(stringB);
//     let isAnagram = true;

//     if (Object.keys(charMapStringA).length != Object.keys(charMapStringB).length) {
//         return false;
//     }

//     for (let char in charMapStringA) {
//         isAnagram = isAnagram
//             && charMapStringA.hasOwnProperty(char)
//             && charMapStringB.hasOwnProperty(char)
//             && charMapStringA[char] == charMapStringB[char];
//     }

//     return isAnagram;
// };

// solution #1
function anagrams(stringA, stringB) {
    const aCharMap = _toCharMap(stringA);
    const bCharMap = _toCharMap(stringB);

    if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
        return false;
    }

    for (let char in aCharMap) {
        if (aCharMap[char] !== bCharMap[char]) {
            return false;
        }
    }

    return true;
};

function _toCharMap(string = '') {
    const charMap = {};

    for (let char of string.replace(/[^\w]/g, '').toLowerCase()) {
        charMap[char] = ++charMap[char] || 1;
    }

    return charMap;
};

module.exports = anagrams;
