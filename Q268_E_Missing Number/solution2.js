/**
 * @param {number[]} nums
 * @return {number}
 */

/** Using a Set instead of an array  =>  performance.
1. Time Complexity: 
- `has`  of a `Set`: O(1), 
`includes`of an array: O(n)
2.  Avoiding Duplicate Elements: A `Set` automatically eliminates duplicate elements when constructed. 

**/
var missingNumber = function (nums) {
  let numsSet = new Set(nums);
  let n = nums.length;
  for (i = 0; i <= n; i++) {
    if (!numsSet.has(i)) return i;
  }
};

// Test case:
nums = [3, 0, 1];
console.log(missingNumber(nums)); //2

nums1 = [0, 1];
console.log(missingNumber(nums1)); //2

nums2 = [9, 6, 4, 2, 3, 5, 7, 0, 1];
console.log(missingNumber(nums2)); //8
