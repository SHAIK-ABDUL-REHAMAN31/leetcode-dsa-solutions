/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {

    if (s.length > t.length) {
        return false;
    }

    if (s.length === 0) {
        return true;
    }

    let write = 0;

    for (let read = 0; read < t.length; read++) {

        if (s[write] === t[read]) {
            write++;
        }

        if (write === s.length) {
            return true;
        }
    }

    return false;
};