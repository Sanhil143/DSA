// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, 
// and j != k, and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.

// Example 1:

// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]
// Explanation: 
// nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
// nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
// nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
// The distinct triplets are [-1,0,1] and [-1,-1,2].
// Notice that the order of the output and the order of the triplets does not matter.
// Example 2:

// Input: nums = [0,1,1]
// Output: []
// Explanation: The only possible triplet does not sum up to 0.
// Example 3:

// Input: nums = [0,0,0]
// Output: [[0,0,0]]
// Explanation: The only possible triplet sums up to 0

let nums = [-1,0,1,2,-1,-4]

const threeSum = (nums) => {
      let map = {}
      nums.sort((a,b) => a-b)
      for(let i=0; i<nums.length; i++){
            let k = nums.length - 1
            let j = i+1

            while(j<k){
                  let sum = nums[i]+nums[j]+nums[k]
                  if(sum == 0){
                        map[[nums[i], nums[j], nums[k]]] = [nums[i], nums[j], nums[k]];
                        j++
                        k--
                  }
                  if(sum>0){
                        k--
                  }
                  if(sum<0){
                        j++
                  }
            }
      }
      return (Object.values(map));
}
console.log(threeSum(nums));