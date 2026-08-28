/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function(nums, k) {
    let left = 0 ;
    let ZeroCount = 0 ;
    let maxCount = 0;

    for(let right = 0 ; right < nums.length ; right++){

        if(nums[right] === 0){
            ZeroCount++;
        }

        while(ZeroCount > k){

            if(nums[left] === 0){
                ZeroCount--;
            }

            left++;
        }

        maxCount = Math.max(maxCount , right-left+1 );
    }

    return maxCount;

    
    
};