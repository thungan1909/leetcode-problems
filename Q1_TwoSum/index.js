// Source: https://leetcode.com/problems/two-sum/
//SOLUTION 1: USING 2 FOR LOOPS
// Time complexity: O(n^2)
// Space complexity: O(1)
// Link: https://leetcode.com/problems/two-sum/solutions/4618168/two-sum-javascript-solution-using-for-loop/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
};

//SOLUTION 2: USING HASHMAP

// Time complexity: O(n)
// Space complexity: O(n)

// Link: https://leetcode.com/problems/two-sum/solutions/4618182/two-sum-beats-90-05-of-users-with-javascript/

var twoSum = function (nums, target) {
  const numIndices = {};

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const complement = target - num;

    if (complement in numIndices) {
      return [numIndices[complement], i];
    }
    numIndices[num] = i;
  }
  return null;
};

// Test cases
nums1 = [2, 7, 11, 15];
target1 = 9;
nums2 = [3, 2, 4];
target2 = 6;
nums3 = [3, 3];
target3 = 6;

console.log(twoSum(nums1, target1)); // [0, 1]
console.log(twoSum(nums2, target2)); // [1, 2]
console.log(twoSum(nums3, target3)); // [0, 1]
