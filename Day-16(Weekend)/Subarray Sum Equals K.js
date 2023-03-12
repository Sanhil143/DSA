// Subarray Sum Equals K

// Given an array of integers nums and an integer k, return the total number of
//  subarrays whose sum equals to k.

// A subarray is a contiguous non-empty sequence of elements within an array.

 

// Example 1:

// Input: nums = [1,1,1], k = 2
// Output: 2
// Example 2:

// Input: nums = [1,2,3], k = 3
// Output: 2

let nums = [1,2,3], k = 3

const sumEquals = (nums,k) => {
      let sum = 0
      let count = 0
      let map = new Map()
  
      map.set(0,1)
  
      for(let i=0; i<nums.length; i++){
          sum += nums[i]
          if(map.has(sum-k)){
          count += map.get(sum-k)
          }
             
           map.set(sum,(map.get(sum)||0)+1)
          
      }
      return count

}
console.log(sumEquals(nums,k));