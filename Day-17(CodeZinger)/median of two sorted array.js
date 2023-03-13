

let nums1 = [1,2], nums2 = [3,4]
var findMedianSortedArrays = function(nums1, nums2) {
      let merged = []
      let i=0;
      let j=0
      let k=0
  
      while(i<nums1.length && j< nums2.length){
          if(nums1[i] < nums2[j]){
              merged[k] = nums1[i]
              i++
              k++
          }
          else{
              merged[k] = nums2[j]
              j++
              k++
          }
      }
      while(i<nums1.length){
              merged[k] = nums1[i]
              i++
              k++
          }
          while(j<nums2.length){
              merged[k] = nums2[j]
              j++
              k++
          }
          let median = parseFloat(0.0)
          let mid = merged.length/2
          if(merged.length % 2 != 0){
              median = merged[mid]
          }
          else{
              median = (merged[mid] + merged[mid-1]) / 2.0
          }
          return median
  
  };
  console.log(findMedianSortedArrays(nums1,nums2));