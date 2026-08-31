/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraysDivByK = function(nums, k) {
    
    let map = new Map();

    map.set(0 , 1);

    let prefixSum = 0;
    let count = 0 ;

    for(const num of nums){
        prefixSum += num;

        let remainder = prefixSum % k;

        if(remainder < 0){
            remainder += k;
        }

        if(map.has(remainder)){
            count += map.get(remainder);
        }

       map.set(remainder , (map.get(remainder)|| 0) +1);
    }

    return count;
    
};