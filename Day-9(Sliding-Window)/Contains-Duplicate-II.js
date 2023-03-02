// Given an integer array nums and an integer k, return true if there are two distinct indices i and j in 
// the array such that nums[i] == nums[j] and abs(i - j) <= k.

// Example 1:

// Input: nums = [1,2,3,1], k = 3
// Output: true
// Example 2:

// Input: nums = [1,0,1,1], k = 1
// Output: true
// Example 3:

// Input: nums = [1,2,3,1,2,3], k = 2
// Output: false

let nums = [1,0,1,1], k = 1 

const duplicate = (nums, k) => {
      let map = new Map()
      let i = 0
      for (i = 0; i < nums.length; i++) {
            if (i - map.get(nums[i]) <= k) {
                  return true
            }
            map.set(nums[i],i)
      }
console.log(map);
      return false
}

console.log(duplicate(nums, k));