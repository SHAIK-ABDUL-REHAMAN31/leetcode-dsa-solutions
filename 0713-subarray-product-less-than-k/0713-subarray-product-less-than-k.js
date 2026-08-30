/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function (nums, k) {

    if (k <= 1) return 0;

    let left = 0;
    let count = 0;
    let windowProduct = 1;

    for (let right = 0; right < nums.length; right++) {

        // Add right element
        windowProduct *= nums[right];

        // Shrink window while product is invalid
        while (windowProduct >= k) {
            windowProduct /= nums[left];
            left++;
        }

        // All subarrays ending at right are valid
        count += right - left + 1;
    }

    return count;
};