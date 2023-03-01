// Rotate array
// Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.

 

// Example 1:

// Input: nums = [1,2,3,4,5,6,7], k = 3
// Output: [5,6,7,1,2,3,4]
// Explanation:
// rotate 1 steps to the right: [7,1,2,3,4,5,6]
// rotate 2 steps to the right: [6,7,1,2,3,4,5]
// rotate 3 steps to the right: [5,6,7,1,2,3,4]
// Example 2:

// Input: nums = [-1,-100,3,99], k = 2
// Output: [3,99,-1,-100]
// Explanation: 
// rotate 1 steps to the right: [99,-1,-100,3]
// rotate 2 steps to the right: [3,99,-1,-100]

let nums = [-1,-100,3,99]
let k = 2
var solve = function(nums,i,j){
      while(i < j){
          nums[i] = nums[i]^nums[j];
          nums[j] = nums[i]^nums[j];
          nums[i] = nums[i]^nums[j];
          i++;
          j--;
      }
  } 
  var rotate = function(nums, k) {
      k = k % nums.length;
      solve(nums, 0, nums.length-1);
      solve(nums, 0, k-1);
      solve(nums, k, nums.length-1);
  };

  console.log(rotate(nums,k));