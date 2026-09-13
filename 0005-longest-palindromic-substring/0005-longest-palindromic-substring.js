var longestPalindrome = function(s) {
    let start = 0;
    let end = 0;

    function expand(left, right) {
        while (
            left >= 0 &&
            right < s.length &&
            s[left] === s[right]
        ) {
            left--;
            right++;
        }

        return [left + 1, right - 1];
    }

    for (let i = 0; i < s.length; i++) {

        let [l1, r1] = expand(i, i);

        let [l2, r2] = expand(i, i + 1);

        if (r1 - l1 > end - start) {
            start = l1;
            end = r1;
        }

        if (r2 - l2 > end - start) {
            start = l2;
            end = r2;
        }
    }

    return s.slice(start, end + 1);
};