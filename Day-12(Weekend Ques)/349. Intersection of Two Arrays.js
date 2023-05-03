// 349. Intersection of Two Arrays
// Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the tempult must be 
// unique and you may return the tempult in any order.



// Example 1:

// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2]
// Example 2:

// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [9,4]
// Explanation: [4,9] is also accepted.


let nums1 = [4, 9, 5], nums2 = [9, 4, 9, 8, 4]
// Output: [9,4]

const func = (nums1, nums2) => {
      let temp = [];
      
      for (let i = 0; i < nums1.length; i++) {
            if (nums2.includes(nums1[i])) {
                  temp.push(nums1[i])
            }
      }
      for (let i = 0; i < nums2.length; i++) {
            if (nums1.includes(nums2[i])) {
                  temp.push(nums2[i])
            }
      }
     let res = [...new Set(temp)];
      return res
}

console.log(func(nums1, nums2));