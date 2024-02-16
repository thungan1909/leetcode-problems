// Difficulty: Hard
// Topics: Array, Binary Search, Divide and Conquer
// Source: https://leetcode.com/problems/median-of-two-sorted-arrays/
// SOLUTION: USING BINARY SEARCH

// Time complexity: O(log(min(m, n)))
// Space complexity: O(1)
//Link solution: https://leetcode.com/problems/median-of-two-sorted-arrays/solutions/4730555/median-of-two-sorted-arrays-javascript-solution/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  const num1Len = nums1.length;
  const num2Len = nums2.length;

  // Ensure nums1 is smaller or equal in length compared to nums2
  if (num1Len > num2Len) {
    return findMedianSortedArrays(nums2, nums1);
  }

  let low = 0;
  let high = num1Len;

  while (low <= high) {
    // Calculate the partition for nums1 and nums2
    let partitionX = Math.floor((low + high) / 2);
    let partitionY = Math.floor((num1Len + num2Len + 1) / 2) - partitionX;

    // Find the maximum and minimum elements on the left and right sides of the partitions
    let maxX = partitionX === 0 ? -Infinity : nums1[partitionX - 1];
    let minX = partitionX === num1Len ? Infinity : nums1[partitionX];

    let maxY = partitionY === 0 ? -Infinity : nums2[partitionY - 1];
    let minY = partitionY === num2Len ? Infinity : nums2[partitionY];

    // Check if the partitions are correct
    if (maxX <= minY && maxY <= minX) {
      // Calculate the median based on the elements at the boundaries
      if ((num1Len + num2Len) % 2 === 0) {
        return (Math.max(maxX, maxY) + Math.min(minX, minY)) / 2;
      } else {
        return Math.max(maxX, maxY);
      }
    } else if (maxX > minY) {
      // Update the pointers based on the comparison of elements
      high = partitionX - 1;
    } else {
      low = partitionX + 1;
    }
  }
};

// Test cases
console.log(findMedianSortedArrays([1, 3], [2])); // 2
console.log(findMedianSortedArrays([1, 2], [3, 4])); // 2.5
console.log(findMedianSortedArrays([0, 0], [0, 0])); // 0
