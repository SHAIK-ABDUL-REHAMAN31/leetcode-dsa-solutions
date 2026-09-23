/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var removeDuplicates = function(s, k) {

    let stack = [];

    for(const ch of s){
        if(stack.length > 0 && stack[stack.length -1] [0] === ch){
            stack[stack.length -1][1]++;
        }else{
            stack.push([ch , 1]);
        }


        if(stack.length > 0 && stack[stack.length -1][1] === k ){
            stack.pop();
        }
    }

    let result = "";

    for(const [ch , count] of stack){
        result += ch.repeat(count);
    }

    return result;
    
};