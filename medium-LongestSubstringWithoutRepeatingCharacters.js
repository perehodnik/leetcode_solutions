//https://leetcode.com/problems/longest-substring-without-repeating-characters/description/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    max_len = 0;
    var substring = [];
    for (let i=0; i<s.length; i++) {
        let w = s.charAt(i);
        if (substring.includes(w)) {
            if (max_len < substring.length) {
                max_len = substring.length;
            }
            for (let j=0;j<substring.length; j++){
                if (substring[j] === w) {
                    substring = substring.slice(j+1,);
                }
            }
        }
        substring.push(w);
    }
    if (max_len < substring.length) {
        max_len = substring.length;
    }
    return max_len;
};