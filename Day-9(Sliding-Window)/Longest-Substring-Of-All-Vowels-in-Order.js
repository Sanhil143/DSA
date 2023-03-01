// A string is considered beautiful if it satisfies the following conditions:

// Each of the 5 English vowels ('a', 'e', 'i', 'o', 'u') must appear at least once in it.
// The letters must be sorted in alphabetical order (i.e. all 'a's before 'e's, all 'e's before 'i's, etc.).
// For example, strings "aeiou" and "aaaaaaeiiiioou" are considered beautiful, but "uaeio", "aeoiu", and "aaaeeeooo" are not beautiful.

// Given a string word consisting of English vowels, return the length of the longest beautiful substring of word. If no such substring exists, return 0.

// A substring is a contiguous sequence of characters in a string.



// Example 1:

// Input: word = "aeiaaioaaaaeiiiiouuuooaauuaeiu"
// Output: 13
// Explanation: The longest beautiful substring in word is "aaaaeiiiiouuu" of length 13.
// Example 2:

// Input: word = "aeeeiiiioooauuuaeiou"
// Output: 5
// Explanation: The longest beautiful substring in word is "aeiou" of length 5.
// Example 3:

// Input: word = "a"
// Output: 0
// Explanation: There is no beautiful substring, so return 0.

let word = "aeiaaioaaaaeiiiiouuuooaauuaeiu"


const countVowel = (word) => {
      let vol = ["a", "e", "i", "o", "u"]
      let i = 0;
      let max = 0;
      let map = new Map();
      map.set(word[0], 1)
      for (let j = 1; j < word.length; j++) {
            
            map.set(word[j], ((map.get(word[j])) || 0) + 1)

            if (vol.indexOf(word[j]) < vol.indexOf(word[j - 1])) {
                  while (i < j) {
                        if (map.get(word[i]) == 1) { map.delete(word[i]) }
                        else { map.set(word[i], (map.get(word[i])) - 1) }
                        i++
                  }
            }

            if (map.size === 5) {
                  max = (max > j - i + 1) ? max : j - i + 1
            }
      }
      return max

}
console.log(countVowel(word));