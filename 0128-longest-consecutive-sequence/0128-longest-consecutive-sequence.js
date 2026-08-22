/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
    if (nums.length === 0) {
        return 0;
    }

    nums.sort((a, b) => a - b);

    let longest = 1;
    let currentStreak = 1;

    for (let i = 1; i < nums.length; i++) {
        // Ignore duplicate numbers
        if (nums[i] === nums[i - 1]) {
            continue;
        }

        // Consecutive: for example, 2 follows 1
        if (nums[i] === nums[i - 1] + 1) {
            currentStreak++;
        } else {
            // Sequence broke; begin a new sequence
            currentStreak = 1;
        }

        longest = Math.max(longest, currentStreak);
    }

    return longest;
};