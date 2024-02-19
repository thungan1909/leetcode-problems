// Problem: 231. Power of Two
// Solution: Using bit manipulation
// Time complexity: O(1)
// Space complexity: O(1)
// Link solution: https://leetcode.com/problems/power-of-two/solutions/4749119/using-bit-manipulation-javascript-solution/

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
  if (n <= 0) return false;
  return (n & (n - 1)) === 0;
};

// Test cases
console.log(isPowerOfTwo(1)); // true
console.log(isPowerOfTwo(16)); // true
console.log(isPowerOfTwo(3)); // false
