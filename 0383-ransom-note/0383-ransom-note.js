/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {

    let freq = new Map();

    for(let char of magazine){
        freq.set(char , (freq.get(char)||0 ) +1);

    }

    for(let char of ransomNote){
        if( !freq.has(char)){
            return false;
        }

        freq.set(char , (freq.get(char) || 0) -1);

        if(freq.get(char) < 0){
            return false;
        }
    }

    return true;
    
};