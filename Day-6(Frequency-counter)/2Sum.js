
let nums = [2,7,11,15], target = 9


var twoSum = function(nums, target) {
      let map = new Map()
      let n = nums.length
      for(let i=0; i<n; i++){
          let x= target - nums[i]
          if(map.has(x)){
              return [map.get(x),i]
          }
          map.set(nums[i],i)
      }
      
     return [-1,-1]
 
 };
 console.log(twoSum(nums,target));