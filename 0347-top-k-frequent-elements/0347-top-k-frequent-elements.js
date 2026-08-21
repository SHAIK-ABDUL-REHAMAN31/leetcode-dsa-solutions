/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {

    let freq = new Map();
    let result = [];

    for (const num of nums ){
        freq.set(num  , (freq.get(num)|| 0 ) +1 );
    }

    const numbers = [...freq.keys()];

    numbers.sort((a , b)=>{
        return freq.get(b) - freq.get(a);
    })


    return numbers.slice(0 , k);

    
    
};