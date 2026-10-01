/**
 * @param {string} s
 * @param {string[]} dictionary
 * @return {string}
 */
var findLongestWord = function(s, dictionary) {
    let answer = "";

    for (let word of dictionary) {
        let i = 0;
        let j = 0;

        while (i < s.length && j < word.length) {
            if (s[i] === word[j]) {
                j++;
            }

            i++;
        }

        if (j === word.length) {
            if (
                word.length > answer.length ||
                (word.length === answer.length && word < answer)
            ) {
                answer = word;
            }
        }
    }

    return answer;
};