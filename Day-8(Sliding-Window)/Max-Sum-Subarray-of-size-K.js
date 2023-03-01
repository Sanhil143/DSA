// Given an array of integers Arr of size N and a number K. Return the maximum sum of a subarray of size K.

 

// Example 1:

// Input:
// N = 4, K = 2
// Arr = [100, 200, 300, 400]
// Output: 700
// Explanation:
// Arr3  + Arr4 =700,
// which is maximum.
 

// Example 2:

// Input: N = 4, K = 4
// Arr = [100, 200, 300, 400]
// Output: 1000
// Explanation:
// Arr1 + Arr2 + Arr3 + Arr4 =1000, which is maximum.
 

// Your Task:

// You don't need to read input or print anything. Your task is to complete the function maximumSumSubarray() which
//  takes the integer k, vector Arr with size N, containing the elements of the array and returns the maximum sum of
//   a subarray of size K.

 
let n = 4, k = 4
// let arr = [100, 200, 300, 400]
let arr = [-20 ,-12 ,42 ,-10 ,25]

const maxSum = (arr,k,n) => {
      let curSum = 0
      let maxSum = 0
      for(let i=0; i<k;i++){
            curSum += arr[i]
      }
      maxSum = curSum
      for(let i=k; i<arr.length; i++){
            curSum += arr[i]
            curSum -= arr[i-k]
            maxSum = Math.max(maxSum,curSum)           
      }
      return maxSum
}

console.log(maxSum(arr,k,n));