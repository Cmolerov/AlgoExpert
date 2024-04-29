function threeNumberSum(array, targetSum) {
    // Write your code here.
    array.sort((a, b) => a - b);
    let triplets = [];
    for (let i = 0; i < array.length - 2; i++) {
        let left = i + 1;
        let right = array.length - 1;
        while (left < right) {
            let curSum = array[i] + array[left] + array[right];
            if (curSum === targetSum) {
                triplets.push([array[i], array[left], array[right]]);
                right--;
                left++;
            }
            if (curSum > targetSum) right--;
            if (curSum < targetSum) left++;
        }
    }
    return triplets;
}

// Test Case 1- >
// {
//   "array": [12, 3, 1, 2, -6, 5, -8, 6],
//   "targetSum": 0
// }
// Expected Output
// [
//   [-8, 2, 6],
//   [-8, 3, 5],
//   [-6, 1, 5]
// ]
// console.log(threeNumberSum([12, 3, 1, 2, -6, 5, -8, 6], 0));
// Test Case 2
// {
//   "array": [1, 2, 3],
//   "targetSum": 6
// }
// Expected Output
// [
//   [1, 2, 3]
// ]
