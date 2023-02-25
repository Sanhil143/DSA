// Top K Frequent Elements

// Given an integer array nums and an integer k, return the k most frequent elements. 
// You may return the answer in any order.


// Example 1:Input: nums = [1,1,1,2,2,3], k = 2 Output: [1,2]
// Example 2: Input: nums = [1], k = 1 Output: [1]

let nums = [1,1,1,2,2,3]
let k = 2

const checkFreq = (nums,k) => {
      let num = nums.length+1
      let frqArray = new Array(num)
      let obj = {}
      let result = []
      for(let i=0; i<frqArray.length; i++){
            frqArray[i] = []
      }
      for(let ch of nums){
            obj[ch] = (obj[ch] || 0) +1
      }
      for(let[key,value] of Object.entries(obj)){
            if(frqArray[value]){
                  frqArray[value].push(key)
            }else{
                  frqArray[value] = key
            }
      }
      for(let i=frqArray.length-1; i>=0; i--){
            for(let n of frqArray[i]){
                  result.push(n)
                  if(result.length == k)
                  console.log(result);
            }
      }
      
}
checkFreq(nums,k)