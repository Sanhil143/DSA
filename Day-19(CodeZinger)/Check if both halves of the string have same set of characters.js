// Check if both halves of the string have same set of characters
// Given a string S, Check whether it is possible to split a string from the middle 
// which will give two halves having the same characters and same frequency of each character.
// If the length of the given string is ODD then ignore the middle element and check for the rest.
// 1==
// Input: abcbac
// where:First line represents input string S
// Output:Yes
// Explanation: The two halves contain the same characters with the same frequency.
// 2==
// Input:abcaabbc
// Output:No
// Explanation: The two halves contain the same characters but the frequency is not the same.
// Assumptions:Character comparisons will be case-sensitive.
// If the length of the given string is ODD then ignore the middle element.


let s = "abcbac"

const checkString = (s) => {
      let n = s.length
      let max_char = 26
      let count = new Array(max_char)

      for (let i = 0; i < count.length; i++) {
            count[i] = 0
      }
      for (let i = 0, j = n - 1; i < j; i++, j--) {
            //first
            count[s[i] - 'a']++
            count[s[j] - 'a']--
      }

      // check value
      for (let i = 0; i < max_char; i++) {
            if (count[i] != 0) {
                  return false
            }
            return true
      }
}
console.log(checkString(s));