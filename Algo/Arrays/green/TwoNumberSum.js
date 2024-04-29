function twoNumberSum(arr, targetSum) {
    arr.sort((a, b) => a - b);
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
        let curSum = arr[left] + arr[right];
        if (curSum === targetSum) {
            return [arr[left], arr[right]];
        } else if (curSum < targetSum) {
            left++;
        } else if (curSum > targetSum) {
            right--;
        }
    }
    return [];
}

// Test Case 1 -> [11, -1]
// {
//   "array": [3, 5, -4, 8, 11, 1, -1, 6],
//   "targetSum": 10
// }
//
// Test Case 2 -> [4, 6]
// {
//   "array": [4, 6],
//   "targetSum": 10
// }
