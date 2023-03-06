// Check Palindrome number using recursion
// Given an integer N, find whether N is a Palindrome using recursion. 

// Write a function that accepts an integer N. The function should return 1 if N is a palindrome else 0. 
// Input:121 
// Output:1
// The reverse of 121 is also 121.
// Assume that, 

// N is an integer within the range [0 to 1000000000]. 

let n = '121'
const palindrome = (n) => {
      if(n<2){
            return true
      }
      if(n[0] == n.slice(-1)){
            return palindrome(n.slice(1,-1))
      }
      return false
}
console.log(palindrome(n));