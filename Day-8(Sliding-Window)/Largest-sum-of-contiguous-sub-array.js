// Given an array of integers A, find the largest sum of contiguous elements in sub-array of an array.



// Input:  5 
//       -20 -12 42 -10 25
//   Where, 

// The first line represents the size of an array. 
// The second line represents array elements.


// Output 
//     57 



// Here largest sub-array sum = 42 + (-10) + 25 = 57.

let arr = [-100, -990, -10, -1, -5]

const largestSum = (arr) => {

      if(arr.length < 2){
            return arr
      }
      let sum = 0
      let tempSum = 0

      for (let i = 0; i < arr.length; i++) {
            tempSum += arr[i]
            if (tempSum < 0) {
                  tempSum = 0
            }
            if (sum < tempSum) {
                  sum = tempSum
            }
      }
      return sum
}
console.log(largestSum(arr));