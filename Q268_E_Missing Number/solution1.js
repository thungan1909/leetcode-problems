/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  let n = nums.length;
  for (let i = 0; i <= n; i++) {
    if (!nums.includes(i)) return i;
  }
};

// Test case:
nums = [3, 0, 1];
console.log(missingNumber(nums)); //2

nums1 = [0, 1];
console.log(missingNumber(nums1)); //2

nums2 = [9, 6, 4, 2, 3, 5, 7, 0, 1];
console.log(missingNumber(nums2)); //8
