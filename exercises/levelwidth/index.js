// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

// my first solution
// function levelWidth(root) {
//     const stopSignal = 'stop';

//     const nodes = [root, stopSignal];
//     const counterByLevel = [0];
//     let currentLevel = 0;

//     while (nodes.length > 1) {
//         const currentNode = nodes.shift();

//         if (currentNode === stopSignal) {
//             currentLevel++;
//             counterByLevel[currentLevel] = 0;

//             nodes.push(stopSignal);
//             continue;
//         }

//         const children = currentNode.children || [];
//         nodes.push(...children);

//         counterByLevel[currentLevel]++;
//     }

//     return counterByLevel;
// };

// solution #1
function levelWidth(root) {
    const arr = [root, 's'];
    const counters = [0];

    while(arr.length > 1) {
        const node = arr.shift();

        if (node === 's') {
            counters.push(0);
            arr.push('s');
        } else {
            arr.push(...node.children);
            counters[counters.length - 1]++;
        }
    }

    return counters;
};

module.exports = levelWidth;
