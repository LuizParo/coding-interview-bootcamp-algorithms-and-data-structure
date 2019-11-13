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
function levelWidth(root) {
    const stopSignal = 'stop';

    const nodes = [root, stopSignal];
    const counterByLevel = [0];
    let currentLevel = 0;

    while (nodes.length > 1) {
        const currentNode = nodes.shift();

        if (currentNode === stopSignal) {
            currentLevel++;
            counterByLevel[currentLevel] = 0;

            nodes.push(stopSignal);
            continue;
        }

        const children = currentNode.children || [];
        nodes.push(...children);

        counterByLevel[currentLevel]++;
    }

    return counterByLevel;
};

module.exports = levelWidth;
