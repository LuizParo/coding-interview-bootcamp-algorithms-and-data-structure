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

function selectionSort(arr) {

}

function mergeSort(arr) {

}

function merge(left, right) {

}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
