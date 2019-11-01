// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// my first solutiom
function chunk(array, size) {
    const numberOfChunks = Math.ceil(array.length / size);
    const chunkedArray = [];
    let currentArrayIndex = 0;

    for (let index = 0; index < numberOfChunks; index++) {
        const chunk = [];

        for (let chunkIndex = 0; chunkIndex < size && currentArrayIndex < array.length; chunkIndex++) {
            const currentArrayElement = array[currentArrayIndex];

            chunk[chunkIndex] = currentArrayElement;
            currentArrayIndex++;
        }

        chunkedArray[index] = chunk;
    }

    return chunkedArray;
};

module.exports = chunk;
