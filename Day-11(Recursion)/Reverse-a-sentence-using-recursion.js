// Reverse a sentence using recursion
// Given a string S, write a program to reverse the input string without using any built-in function

// Input:hello world
// where:First line represents the input string
// Output: dlrow olleh
// Assumptions:Length of string can be 0 to 10000

let str = "hello world"
const reverse = (str) => {
      if(str.length < 2){
            return str
      }
      return reverse(str.slice(1)) + str[0]
}
console.log(reverse(str));

