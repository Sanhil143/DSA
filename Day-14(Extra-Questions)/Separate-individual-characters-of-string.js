// // Separate individual characters of string

// Given a string S, separate the individual characters from the string.

// Input: Hello
// where: First line represents the input string S

// Output: H e l l o
// Assumptions: Length of the string S can be 0 to 10000

let s = "Hello"

const str = (s) => {
      let str = ""
      for(let i=0; i<s.length; i++){
            str += s[i] + " "
      }
      return str
}
console.log(str(s));