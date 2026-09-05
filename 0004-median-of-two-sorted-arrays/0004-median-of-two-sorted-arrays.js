/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {

    // Always binary search the smaller array
    if (nums1.length > nums2.length) {
        [nums1, nums2] = [nums2, nums1];
    }

    let m = nums1.length;
    let n = nums2.length;

    let left = 0;
    let right = m;

    let half = Math.floor((m + n + 1) / 2);

    while (left <= right) {

        // Partition nums1
        let i = Math.floor((left + right) / 2);

        // Partition nums2
        let j = half - i;

        // Values around partition
        let leftA = i === 0 ? -Infinity : nums1[i - 1];
        let rightA = i === m ? Infinity : nums1[i];

        let leftB = j === 0 ? -Infinity : nums2[j - 1];
        let rightB = j === n ? Infinity : nums2[j];

        // Correct partition
        if (leftA <= rightB && leftB <= rightA) {

            // Odd number of elements
            if ((m + n) % 2 === 1) {
                return Math.max(leftA, leftB);
            }

            // Even number of elements
            return (
                Math.max(leftA, leftB) +
                Math.min(rightA, rightB)
            ) / 2;
        }

        // Partition i is too far right
        if (leftA > rightB) {
            right = i - 1;
        }

        // Partition i is too far left
        else {
            left = i + 1;
        }
    }
};