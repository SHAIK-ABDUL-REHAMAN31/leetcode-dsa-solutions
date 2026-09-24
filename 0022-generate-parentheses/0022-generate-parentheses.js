/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {

    let result = [];

    function genParenthesis(current, open, close){

        if (current.length === 2 * n) {

            result.push(current);
            return;


        }

        if (open < n) {
            genParenthesis(current + "(", open + 1, close);
        }

        if (close < open) {
            genParenthesis(current + ")", open, close + 1);
        }
    }

    genParenthesis("" , 0 , 0);

    return result;

};