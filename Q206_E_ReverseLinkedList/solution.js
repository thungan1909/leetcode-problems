// Problem: 206. Reverse Linked List
// Solution: Using iterative approach
// Time complexity: O(n)
// Space complexity: O(1)
// Link solution: https://leetcode.com/problems/reverse-linked-list/solutions/4905498/beats-89-53-of-users-with-javascript/

/**
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  let prev = null;
  let curr = head;
  while (curr !== null) {
    let nextTemp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = nextTemp;
  }
  return prev;
};

// Test case
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

const head = new ListNode(
  1,
  new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))
);
console.log(reverseList(head)); // 5 -> 4 -> 3 -> 2 -> 1
