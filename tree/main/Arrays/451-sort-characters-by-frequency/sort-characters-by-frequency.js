/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function (s) {

    const freq = new Map();

    for (const ch of s) {

        freq.set(ch, (freq.get(ch) || 0) + 1);

    }

    const arr = [...freq.entries()];

    arr.sort((a , b) => {
        if(a[1] !== b[1]){
            return b[1] - a[1];
        }


    })

    let result = "";

    for(const [ch , value] of arr){
        result += ch.repeat(value);
    }

    return result;

};