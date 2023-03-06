// Reverse a number using recursion
// Given a number N as input, write a program to reverse N using recursion.
// Write a function that accepts an integer N. The function should return reverse of N using recursion. 

// Input:10348
// where:First line represents a value of N.
// Output:84301

let n = "10348"
const reverse = (n) => {
      if(n<2){
            return n
      }
     let returns =  reverse(n.slice(1)) + n[0]
     return returns
}
console.log(reverse(n));