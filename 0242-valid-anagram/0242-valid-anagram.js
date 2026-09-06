/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {

    if( s.length != t.length){

        return false;

    }


    let freq= new Map();

    for(let letter of s ){
        freq.set(letter , (freq.get(letter)|| 0 ) +1);
    }

    for(let letter of t ){
        if(! freq.has(letter)){
            return false;
        }

        freq.set(letter , (freq.get(letter)|| 0) - 1);

        if(freq.get(letter) < 0){
            return false;
        }
    }

    return true;
    
};