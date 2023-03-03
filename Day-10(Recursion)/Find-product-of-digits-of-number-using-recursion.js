// Given an integer N, find the product of digits of N using recursion. 

 

// Write a function that accepts an integer N. The function should return the product of digits of N 
// using recursion. 

 

// Input:  1231 
// where: First line represents a value of N.
// output:  6 
// Explanation: For 1231, the product of its digits = 1*2*3*1=6 

let arr = [1,2,3,1]

const product = (arr) => {
      if(arr.length == 0){
            return 1
      }
      return arr[0]*product(arr.slice(1))
}
console.log(product(arr));