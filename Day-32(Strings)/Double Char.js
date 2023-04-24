// Double Char
// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

// Examples (Input -> Output):
// * "String"      -> "SSttrriinngg"
// * "Hello World" -> "HHeelllloo  WWoorrlldd"
// * "1234!_ "     -> "11223344!!__  "


let s = 'String';
//output = 'SSttrriinngg'

const func = (s) => {
      let res = "";
      for(let i=0; i<s.length; i++){
            res += s[i] + s[i]
      }
      return res;
}
console.log(func(s));