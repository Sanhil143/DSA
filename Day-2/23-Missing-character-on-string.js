// Missing characters to make a string Pangram

// Given a string S, find all characters that are missing from the string S, i.e., 
// the characters that can make the string a Pangram. Display output in alphabetic order.

// Input:The quick brown fox jumps

// where:First line represents string S.

// Output:adglvyz

let a = "The quick brown fox jumps" //adglvyz

const missingCharacter = (a) => {
      let s = "abcdefghijklmnopqrstuvwxyz"
      let arr = a.toLowerCase().split("")
      let char = ""
      for(let i=0; i<s.length; i++){
            if(!arr.includes(s[i])){
                  char += s[i]
            }
      }
      console.log(char);
      return char
}
missingCharacter(a)