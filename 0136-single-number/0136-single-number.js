/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {

    let frequency = new Map ();
    let output ; 

    for (const num of nums){

        frequency.set(num , (frequency.get(num)|| 0) +1 );

        
    }


    for (const [num , count ] of frequency){
        if (count === 1){
            return num;
        }
    }

   

    
    
};