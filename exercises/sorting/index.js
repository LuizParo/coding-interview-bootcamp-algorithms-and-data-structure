// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

// my first implementation
// function bubbleSort(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr.length - i - 1; j++) {
//             const current = arr[j];
//             const next = arr[j + 1];

//             if (current > next) {
//                 arr[j + 1] = current;
//                 arr[j] = next
//             }
//         }
//     }

//     return arr;
// }

// solution #1
function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < (arr.length - i - 1); j++) {
            if (arr[j] > arr[j + 1]) {
                const lesser = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = lesser
            }
        }
    }

    return arr;
}

// my first solution
// function selectionSort(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         let indexOfMin = i;
//         let min = arr[i];

//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[j] < min) {
//                 min = arr[j];
//                 indexOfMin = j;
//             }
//         }

//         if (arr[i] > arr[indexOfMin]) {
//             const lesser = arr[indexOfMin];
//             const greater = arr[i];

//             arr[i] = lesser;
//             arr[indexOfMin] = greater;
//         }
//     }

//     return arr;
// }

// solution #1
function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let indexOfMin = i;

        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[indexOfMin]) {
                indexOfMin = j;
            }
        }

        if (indexOfMin !== i) {
            const lesser = arr[indexOfMin];
            arr[indexOfMin] = arr[i];
            arr[i] = lesser;
        }
    }

    return arr;
}

function mergeSort(arr) {

}

// my first implementation
// function merge(left, right) {
//     const result = [];
//     let currentIndex = 0;
//     let currentIndexForLeft = 0;
//     let currentIndexForRight = 0;

//     while(currentIndexForLeft < left.length && currentIndexForRight < right.length) {
//         const currentLeft = left[currentIndexForLeft];
//         const currentRight = right[currentIndexForRight];

//         if (currentLeft < currentRight) {
//             result[currentIndex] = currentLeft;
//             currentIndexForLeft++;
//         } else {
//             result[currentIndex] = currentRight;
//             currentIndexForRight++;
//         }

//         currentIndex++;
//     }

//     while (currentIndexForLeft < left.length) {
//         result[currentIndex] = left[currentIndexForLeft];
//         currentIndexForLeft++;
//         currentIndex++;
//     }

//     while (currentIndexForRight < right.length) {
//         result[currentIndex] = right[currentIndexForRight];
//         currentIndexForRight++;
//         currentIndex++;
//     }

//     return result;
// }

// solution #1
function merge(left, right) {
    const results = [];

    while (left.length && right.length) {
        if (left[0] < right[0]) {
            results.push(left.shift());
        } else {
            results.push(right.shift());
        }
    }

    return [...results, ...left, ...right];
}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
