// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// my first solution
// function steps(n) {
//     for (let row = 0; row < n; row++) {
//         let currentStep = '';

//         for (let column = 0; column < n; column++) {
//             if (column <= row) {
//                 currentStep += '#';
//             } else {
//                 currentStep += ' ';
//             }
//         }

//         console.log(currentStep);
//     }
// };

// solution #1
function steps(n) {
    for (let row = 0; row < n; row++) {
        let stair = '';

        for (let column = 0; column < n; column++) {
            if (column <= row) {
                stair += '#';
            } else {
                stair += ' ';
            }
        }

        console.log(stair);
    }
};

module.exports = steps;
