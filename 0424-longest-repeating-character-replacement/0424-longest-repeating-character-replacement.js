/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    let map = new Map();

    let left = 0;
    let maxFreq = 0;
    let longest = 0;

    for (let right = 0; right < s.length; right++) {

        // Add current character
        map.set(s[right], (map.get(s[right]) || 0) + 1);

        // Highest frequency character in current window
        maxFreq = Math.max(maxFreq, map.get(s[right]));

        // Characters that need to be replaced
        let replacements = (right - left + 1) - maxFreq;

        // Window is invalid
        while (replacements > k) {
            map.set(s[left], map.get(s[left]) - 1);
            left++;

            replacements = (right - left + 1) - maxFreq;
        }

        // Update answer
        longest = Math.max(longest, right - left + 1);
    }

    return longest;
};