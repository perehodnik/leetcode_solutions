//https://leetcode.com/problems/string-to-integer-atoi/description/

/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    var output = "";
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) !== ' ') {
            if (!isNaN(str.charAt(i)) || str.charAt(i) === '-' || str.charAt(i) === '+') {
                output+=str.charAt(i)
                for (let j = i+1; j < str.length; j++) {
                    if (isNaN(str.charAt(j)) || str.charAt(j) === ' ' ) {
                        return checkValidNumber(output);
                    } else {
                        output+=str.charAt(j);
                    }
                }
            }
            console.log(output);
            return checkValidNumber(output);
        }
    }
    return checkValidNumber(output);
};

function checkValidNumber(num) {
    var result = Number(num);
    if (isNaN(num)) {
        return 0;
    }else if (result === 0) {
        return result;
    } else if (result < 0) {
        return Math.max(result, -2147483648);
    }else {
        return Math.min(result, 2147483647);
    }
}