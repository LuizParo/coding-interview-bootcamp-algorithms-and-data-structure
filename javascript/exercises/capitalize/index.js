// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

// my first solution
// function capitalize(str) {
//     return str.split(' ')
//               .map(word => word.charAt(0).toUpperCase() + word.slice(1))
//               .join(' ');
// };

// solution #1
// function capitalize(str) {
//     const words = [];

//     for (let word of str.split(' ')) {
//         words.push(word[0].toUpperCase() + word.slice(1));
//     }

//     return words.join(' ');
// };

// solution #2
function capitalize(str) {
    let result = str[0].toUpperCase();

    for (let index = 1; index < str.length; index++) {
        if (str[index - 1] === ' ') {
            result += str[index].toUpperCase();
        } else {
            result += str[index];
        }
    }

    return result;
};

module.exports = capitalize;
