/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {

    if (s1.length > s2.length) return false;

    let need = new Map();
    let window = new Map();

    // Frequency of characters in s1
    for (let char of s1) {
        need.set(char, (need.get(char) || 0) + 1);
    }

    let left = 0;

    for (let right = 0; right < s2.length; right++) {

        // Add current character
        window.set(
            s2[right],
            (window.get(s2[right]) || 0) + 1
        );

        // Keep window size equal to s1.length
        if (right - left + 1 > s1.length) {
            let char = s2[left];

            window.set(char, window.get(char) - 1);

            if (window.get(char) === 0) {
                window.delete(char);
            }

            left++;
        }

        // Check if frequencies match
        if (right - left + 1 === s1.length) {

            let match = true;

            for (let [char, count] of need) {
                if (window.get(char) !== count) {
                    match = false;
                    break;
                }
            }

            if (match) return true;
        }
    }

    return false;
};