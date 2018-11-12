// https://leetcode.com/problems/median-of-two-sorted-arrays/description/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    var arr = mergeArrays(nums1, nums2);
    if (arr.length%2 === 1) {
        return arr[(arr.length-1)/2];
    } else {
        return (arr[arr.length/2] + arr[arr.length/2-1])/2;
    }
};

var mergeArrays = function (nums1, nums2) {
    var pos = 0;
    var arrPos = 0;
    var k = nums1.length + nums2.length;
    var arr = new Array(k);
    for (let i = 0; i<nums1.length; i++) {
        if(arrPos < nums2.length) {
            for (let j=arrPos;j<nums2.length;j++) {
                    if (nums2[j] < nums1[i]) {
                        arr[pos] = nums2[j];
                        pos++;
                        arrPos++;
                    }
            }
            arr[pos] = nums1[i];
            pos++;
        } else {
            arr[pos] = nums1[i];
            pos++;
        }
    }
    for (let i = arrPos; i<nums2.length; i++){
        arr[pos] = nums2[i];
        pos++;
    }
    return arr;
}