// Source: https://leetcode.com/problems/least-number-of-unique-integers-after-k-removals/
// Difficulty: Medium
// Topics: Array, Greedy.
// SOLUTION: USING MAP
// Time complexity: O(nlogn)
// Space complexity: O(n)
// Link solution: https://leetcode.com/problems/least-number-of-unique-integers-after-k-removals/solutions/4736282/beats-97-44-of-users-with-javascript-least-number-of-unique-integers-after-k-removals/

/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findLeastNumOfUniqueInts = function (arr, k) {
  const countMap = new Map();

  arr.forEach((num) => countMap.set(num, (countMap.get(num) || 0) + 1));

  const sortedCounts = Array.from(countMap.values()).sort((a, b) => a - b);

  let uniqueInt = sortedCounts.length;

  for (let i = 0; i < sortedCounts.length; i++) {
    if (k >= sortedCounts[i]) {
      k -= sortedCounts[i];
      uniqueInt--;
    } else {
      break;
    }
  }

  return uniqueInt;
};
