/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    const stack = [];

    let currentString = "";
    let num = 0;

    for (const ch of s) {
        if (ch >= "0" && ch <= "9") {
            num = num * 10 + Number(ch);
        } 
        else if (ch === "[") {
            stack.push([currentString, num]);
            currentString = "";
            num = 0;
        } 
        else if (ch === "]") {
            const [prevString, repeatCount] = stack.pop();
            currentString = prevString + currentString.repeat(repeatCount);
        } 
        else {
            currentString += ch;
        }
    }

    return currentString;
};