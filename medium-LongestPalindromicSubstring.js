/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    var max_pal_len = 0;
    var max_pal_pos = 0;
    var arr_pal = [];
    if (s.length === 1) {
        return s;
    }
    for (let i=0; i<s.length; i++) {
        let offset = 0;
        for (j=arr_pal.length-1; j>=0;j--){
            if ((i - arr_pal[j] - 1)>=0 && (s.charAt(i) === s.charAt(i - arr_pal[j] - 1))){
                arr_pal[j]+=2;
            }else{
                arr_pal.splice(j,1);
            }
        }
        if (s.charAt(i) === s.charAt(i - 2)){
            arr_pal.push(3);
        }
        if (s.charAt(i) === s.charAt(i - 1)){
            arr_pal.push(2);
        }
            
        if (arr_pal[0] >= max_pal_len) {
            max_pal_len = arr_pal[0];
            max_pal_pos = i;
        }
    }
    if (max_pal_len === 0) {
        return s.charAt(s.length - 1);
    }
    return(s.slice(max_pal_pos+1-max_pal_len,max_pal_pos+1));
};