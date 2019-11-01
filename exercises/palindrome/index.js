// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// my first solution
function palindrome(str) {
    let isPalindrome = true;

    for (let index = 0, reverseIndex = str.length - 1; index < Math.ceil(str.length / 2); index++, reverseIndex--) {
        isPalindrome = isPalindrome && (str.charAt(index) == str.charAt(reverseIndex));
    }

    return isPalindrome;
};

module.exports = palindrome;
