// A string s is nice if, for every letter of the alphabet that s contains, it appears both in uppercase and lowercase. For example, "abABB" is nice because 'A' and 'a' appear, and 'B' and 'b' appear. However, "abA" is not because 'b' appears, but 'B' does not.

// Given a string s, return the longest substring of s that is nice. If there are multiple, return the substring of the earliest occurrence. If there are none, return an empty string.

 

// Example 1:
// Input: s = "YazaAay"
// Output: "aAa"
// Explanation: "aAa" is a nice string because 'A/a' is the only letter of the alphabet in s, and both 'A' and 'a' appear.
// "aAa" is the longest nice substring.
// Example 2:

// Input: s = "Bb"
// Output: "Bb"
// Explanation: "Bb" is a nice string because both 'B' and 'b' appear. The whole string is a substring.
// Example 3:

// Input: s = "c"
// Output: ""
// Explanation: There are no nice substrings.


let s = "YazaAay"

const niceString = (s) => {
      let map = new Map()
      for (let i of s){
            map.set(i,(map.get(i) || 0)+1)
      }
      for(let i=0; i<s.length; i++){
            if(map.get(s[i].toUpperCase()) && map.get(s[i].toLowerCase())){
                  continue
            }
            let start = niceString(s.substring(0,i))
            let end = niceString(s.substring(i+1))

            return start.length >= end.length ? start : end
               
      
      }
      return s
    
   
}

console.log(niceString(s));