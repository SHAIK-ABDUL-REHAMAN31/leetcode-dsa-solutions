/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function (num1, num2) {

    if(num1 === "0" || num2 === "0") return "0";

    let n = num1.length;
    let m = num2.length;

    let result = new Array( n + m).fill(0);

    for(let i = n-1 ; i >= 0 ; i-- ){
        for(let j = m-1 ; j >= 0 ; j--){
            const mul = Number(num1[i]) * Number(num2[j]);

            const sum = mul + result[i + j + 1];

            result[i + j + 1] = sum % 10;

            result[i + j] += Math.floor(sum / 10);
        }
    }

    return result.join("").replace(/^0+/, "") || "0";
};