// Value equal to index value

// Given an array Arr of N positive integers. Your task is to find the elements whose value is equal to that of its 
// index value ( Consider 1-based indexing ).

// Note: There can be more than one element in the array which have the same value as its index. You need to include every 
// such element's index. Follows 1-based indexing of the array.

// Example 1:

// Input:
// N = 5
// Arr[] = {15, 2, 45, 12, 7}
// Output: 2
// Explanation: Only Arr[2] = 2 exists here.
// Example 2:

// Input: 
// N = 1
// Arr[] = {1}
// Output: 1
// Explanation: Here Arr[1] = 1 exists.

let arr = [1] , n = 1;

const func = (arr,n) => {
      let res = [];
      if(n === 1){
            return arr;
      } 
      for(let i=0; i<=n; i++){
            if(arr[i] === i+1){
                  res.push(i+1)
            }
      }
      return res;
}
console.log(func(arr,n));