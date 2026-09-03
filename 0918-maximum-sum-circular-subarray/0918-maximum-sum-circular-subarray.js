/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubarraySumCircular = function(nums) {
    let total = 0;

    let currentMax = 0;
    let maxSum = -Infinity;

    let currentMin = 0;
    let minSum = Infinity;

    for (let num of nums) {
        // Kadane for maximum subarray
        currentMax = Math.max(num, currentMax + num);
        maxSum = Math.max(maxSum, currentMax);

        // Kadane for minimum subarray
        currentMin = Math.min(num, currentMin + num);
        minSum = Math.min(minSum, currentMin);

        total += num;
    }

    // All elements are negative
    if (maxSum < 0) {
        return maxSum;
    }

    // Maximum of:
    // 1. Normal subarray
    // 2. Circular subarray
    return Math.max(maxSum, total - minSum);
};