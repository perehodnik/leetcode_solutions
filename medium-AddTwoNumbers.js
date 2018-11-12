// https://leetcode.com/problems/add-two-numbers/description/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    var overflow=0;
    var nextL1 = l1;
    var nextL2 = l2;
    var output = [];
    var l;
    while(nextL1 || nextL2) {
        var sum = 0;
        if (nextL1) {
            sum = sum + nextL1.val;
            nextL1 = nextL1.next;
        }
        if (nextL2) {
            sum = sum + nextL2.val;
            nextL2 = nextL2.next;
        }
        var nodeValue = 0;
        if ((sum + overflow)>9) {
            nodeValue = sum + overflow - 10;
            overflow = 1;
        } else {
            nodeValue = sum + overflow;
            overflow = 0;
        }
        output.push(nodeValue);
    };
    if (overflow) {
        output.push(overflow);
    }
    
    console.log(output);
    for (let i=output.length-1;i>=0;i--){
        let newNode = new ListNode(output[i]);
        newNode.next=l;
        l=newNode;
    }
    return l;
};