/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function(nums) {

    let map = new Map();
    map.set(0 , -1);


    let prefixSum = 0;
    let maxLength = 0;

    for(let i = 0 ; i < nums.length ; i++){
        if(nums[i] ===0){
            prefixSum -= 1;
        }else{
            prefixSum += 1;
        }


        if(map.has(prefixSum)){
            let length = i - map.get(prefixSum);
            maxLength = Math.max(maxLength , length);
        }else{
            map.set(prefixSum , i);
        }


    }

    return maxLength;
    
};