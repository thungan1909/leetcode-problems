// Source: https://leetcode.com/problems/longest-substring-without-repeating-characters/
// SOLUTION: USING A SLIDING WINDOW
// Time complexity: O(n)
// Space complexity: O(1) in the worst case
// Link: https://leetcode.com/problems/longest-substring-without-repeating-characters/solutions/4659073/longest-substring-without-repeating-characters/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let charMap = {};
  let maxLength = 0;
  let start = 0;

  for (let i = 0; i < s.length; i++) {
    const currentChar = s[i];
    // If current character has been seen in the current substring
    if (charMap[currentChar] >= start) {
      // Move the start of the substring after the last occurrence of the current character
      start = charMap[currentChar] + 1;
    }

    charMap[currentChar] = i; // Update the last index of the current character
    maxLength = Math.max(maxLength, i - start + 1); // Calculate the length of the current substring and update maxLength if needed
  }

  return maxLength;
};

// Test cases

console.log(lengthOfLongestSubstring("abcabcbb")); // 3
console.log(lengthOfLongestSubstring("bbbbb")); // 1
console.log(lengthOfLongestSubstring("pwwkew")); // 3
