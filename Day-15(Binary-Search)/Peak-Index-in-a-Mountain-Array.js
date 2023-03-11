// // Peak Index in a Mountain Array

// An array arr a mountain if the following properties hold:

// arr.length >= 3
// There exists some i with 0 < i < arr.length - 1 such that:
// arr[0] < arr[1] < ... < arr[i - 1] < arr[i] 
// arr[i] > arr[i + 1] > ... > arr[arr.length - 1]
// Given a mountain array arr, return the index i such that arr[0] < arr[1] < ... < arr[i - 1] < arr[i] > arr[i + 1] > ... > arr[arr.length - 1].

// You must solve it in O(log(arr.length)) time complexity.

 

// Example 1:

// Input: arr = [0,1,0]
// Output: 1
// Example 2:

// Input: arr = [0,2,1,0]
// Output: 1
// Example 3:

// Input: arr = [0,10,5,2]
// Output: 1

let arr = [0,1,0] // 1
var peakIndexInMountainArray = function(arr) {
      let n = arr.length
      let i=0; 
      let j=n-1;
  
      while(i<j){
          let mid = i + Math.floor((j-i)/2)
          if(arr[mid] > arr[mid+1]){
              j = mid
          }
          else{
              i = mid+1
          }
      }
      return i
  };

  console.log(peakIndexInMountainArray(arr));