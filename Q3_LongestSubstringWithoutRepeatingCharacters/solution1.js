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
