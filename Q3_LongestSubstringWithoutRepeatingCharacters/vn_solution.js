/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let charMap = {}; // Đối tượng lưu trữ các ký tự đã gặp trong chuỗi
  let maxLength = 0; // Độ dài của chuỗi con dài nhất không chứa ký tự lặp lại
  let start = 0; // Vị trí bắt đầu của chuỗi con hiện tại mà không có ký tự lặp lại

  for (let i = 0; i < s.length; i++) {
    const currentChar = s[i];
    // Nếu ký tự hiện tại đã được gặp trong chuỗi con hiện tại
    if (charMap[currentChar] >= start) {
      // Di chuyển vị trí bắt đầu của chuỗi con sau vị trí xuất hiện cuối cùng của ký tự hiện tại
      start = charMap[currentChar] + 1;
    }

    charMap[currentChar] = i; // Cập nhật chỉ số cuối cùng của ký tự hiện tại
    maxLength = Math.max(maxLength, i - start + 1); // Tính độ dài của chuỗi con hiện tại và cập nhật maxLength nếu cần
  }

  return maxLength;
};

// Test cases

console.log(lengthOfLongestSubstring("abcabcbb")); // 3
console.log(lengthOfLongestSubstring("bbbbb")); // 1
console.log(lengthOfLongestSubstring("pwwkew")); // 3
