//https://leetcode.com/problems/zigzag-conversion/description/

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    var loopcount = numRows*2 - 2;
    var rows = initRows(numRows);
    if (numRows === 1) {
        return s;
    }
    for (let i = 0; i<s.length; i++) {
        var k = i%loopcount;
        if (k > numRows - 1){
            k = loopcount - k;
        }
        rows[k]+= s.charAt(i);
    }
    return rows.join("");
};
    
var initRows = function (num){
    var arr = [];
    for(var i=0;i<num;i++){
        arr.push("");
    }
    return arr;
}