// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

// my first iterative solution
// function pyramid(n) {
//     const numberOfColumns = n * 2 - 1;
//     const middleOfThePyramid = n - 1;

//     for (let row = 0; row < n; row++) {
//         let currentStep = '';

//         for (let column = 0; column < numberOfColumns; column++) {
//             if (column >= middleOfThePyramid - row && column <= middleOfThePyramid + row) {
//                 currentStep += '#';
//             } else {
//                 currentStep += ' ';
//             }
//         }

//         console.log(currentStep);
//     }
// };

// my first recursive solution
// function pyramid(n = 0, row = 0, currentStep = '') {
//     const numberOfColumns = n * 2 - 1;
//     const middleOfThePyramid = n - 1;
//     const lengthOfStep = currentStep.length;

//     if (row === n) {
//         return;
//     }

//     if (currentStep.length === numberOfColumns) {
//         console.log(currentStep);
//         pyramid(n, row + 1);
//         return;
//     }

//     if (lengthOfStep >= middleOfThePyramid - row && lengthOfStep <= middleOfThePyramid + row) {
//         currentStep += '#';
//     } else {
//         currentStep += ' ';
//     }

//     pyramid(n, row, currentStep);
// };

// solution #1
function pyramid(n = 0, row = 0, currentStep = '') {
    const midpoint = Math.floor((2 * n - 1) / 2);

    for (let row = 0; row < n; row++) {
        let level = '';

        for (let column = 0; column < 2 * n - 1; column++) {
            if (midpoint - row <= column && midpoint + row >= column) {
                level += '#';
            } else {
                level += ' ';
            }
        }

        console.log(level);
    }
};

module.exports = pyramid;
