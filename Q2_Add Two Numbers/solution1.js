// Source: https://leetcode.com/problems/add-two-numbers/
// SOLUTION 1: USING A WHILE LOOP
// Time complexity: O(max(m, n))
// Space complexity: O(max(m, n))
// Link: https://leetcode.com/problems/add-two-numbers/solutions/4628009/add-two-numbers/

/** Definition for singly-linked list. */
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let dummyHead = new ListNode(0);

  let current = dummyHead;
  let carry = 0;

  while (l1 || l2) {
    let x = l1 ? l1.val : 0;
    let y = l2 ? l2.val : 0;

    let sum = x + y + carry;

    carry = Math.floor(sum / 10);
    current.next = new ListNode(sum % 10);
    current = current.next;

    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
  }

  if (carry > 0) {
    current.next = new ListNode(carry);
  }

  return dummyHead.next;
};

// Test cases
let l1 = new ListNode(2);
l1.next = new ListNode(4);
l1.next.next = new ListNode(3);

let l2 = new ListNode(5);
l2.next = new ListNode(6);
l2.next.next = new ListNode(4);

console.log("Test Case 1: [2,4,3] + [5,6,4]");
let result1 = addTwoNumbers(l1, l2);
let current = result1;
while (current) {
  console.log(current.val);
  current = current.next;
}

let l3 = new ListNode(0);
let l4 = new ListNode(0);
console.log("Test Case 2: [0] + [0]");
let result2 = addTwoNumbers(l3, l4);
console.log(result2.val);

let l5 = new ListNode(9);
l5.next = new ListNode(9);
l5.next.next = new ListNode(9);
l5.next.next.next = new ListNode(9);
l5.next.next.next.next = new ListNode(9);
l5.next.next.next.next.next = new ListNode(9);
l5.next.next.next.next.next.next = new ListNode(9);

let l6 = new ListNode(9);
l6.next = new ListNode(9);
l6.next.next = new ListNode(9);
l6.next.next.next = new ListNode(9);

console.log("Test Case 3: [9,9,9,9,9,9,9] + [9,9,9,9]");
let result3 = addTwoNumbers(l5, l6);
let current3 = result3;
while (current3) {
  console.log(current3.val);
  current3 = current3.next;
}
