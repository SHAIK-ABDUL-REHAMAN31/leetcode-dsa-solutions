/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {

   
    
    let cleanStr = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

    let left = 0;
    let right = cleanStr.length-1;




    while(left <= right ){


        if(cleanStr[left] != cleanStr[right]){
           return false;
        }else{

            right--;
            left++;
        }


    }

    return true;

   
   
    
};