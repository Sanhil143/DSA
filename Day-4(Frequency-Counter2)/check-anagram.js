// Valid Anagram

// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
// typically using all the original letters exactly once.

// Example 1:
// Input: s = "anagram", t = "nagaram"
// Output: true

// Example 2:
// Input: s = "rat", t = "car"
// Output: false

let s = "rat", t = "cat"

const checkAnagram = (s, t) => {

      let s1 = s.length
      let s2 = t.length
      if (s1 !== s2) return false

      let count1 = {}
      let count2 = {}

      for (let i = 0; i < s.length; i++) {
            if (count1[s[i]]) {
                  count1[s[i]]++
            } else {
                  count1[s[i]] = 1
            }
            if (count2[t[i]]) {
                  count2[t[i]]++
            } else {
                  count2[t[i]] = 1
            }
      }
      for (let ch in count1) {
            if (count1[ch] != count2[ch]) {
                  return false
            }
      }
      return true
}
checkAnagram(s, t)