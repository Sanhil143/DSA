// Factorial of a number
// Given a positive integer, find factorial of it. 

// Reference: https://en.wikipedia.org/wiki/Factorial

// Use the for loop.

// Input: 5
// Output: 120
// For N = 5, factorial of 5 (5!) = 5 * 4 * 3 * 2 * 1 = 120
// Assume that, 

// Value of N can be in the range from [0 to 20]

//Recursive
let n = 4

const recursiveFactorial = (n) => {
      if(n<=0){
            return 1
      }
      return n*recursiveFactorial(n-1)
}
console.log(recursiveFactorial(n));


const factorialLoop = (n) => {
      let factor = 1
      if(n==1 || n==0){
            return factor
      }
      else if(n>1){
            for(let i=n; i>1; i--){
                  factor *= i
            }
            return factor
      }
}
console.log(factorialLoop(n));