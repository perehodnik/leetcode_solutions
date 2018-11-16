//https://leetcode.com/problems/reverse-integer/description/

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    var sign = 1;
    if (x<0) {
        sign = -1;
    }
    var remainder = Math.abs(x);
    var output = 0;
    while(remainder) {
        output = 10*output + remainder%10;
        if (output*sign > 2147483647 || output*sign < -2147483648) {
            return 0;
        }
        remainder = Math.floor(remainder/10);
    }
    return output * sign;
};