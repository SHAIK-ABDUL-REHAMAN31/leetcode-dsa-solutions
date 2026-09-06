/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {

    let freq = new Map();

    for(let char of s){
        freq.set(char , (freq.get(char)|| 0) +1);
    }

    for(let i = 0 ; i < s.length ; i++){
        if(freq.get(s[i] ) === 1){
            return i;
        }
    }

    return -1;
    
};