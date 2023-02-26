
// Given an array of size N containing only 0s, 1s, and 2s; sort the array in ascending order.

// Example 1:
// Input: N = 5  arr[]= {0 2 1 2 0}
// Output: 0 0 1 2 2
// Explanation: 0s 1s and 2s are segregated into ascending order.

// Example 2:
// Input: N = 3 arr[] = {0 1 0}
// Output: 0 0 1
// Explanation: 0s 1s and 2s are segregated into ascending order.

let arr = [0, 2, 1, 2, 0]

const sortArray = (arr) => {
      for (let i = 0; i < arr.length; i++) {
            for (let j = i+1; j < arr.length; j++) {
                  let temp = 0
                  if (arr[i] > arr[j]) {
                        temp = arr[i]
                        arr[i] = arr[j]
                        arr[j] = temp
                  }
            }
            
      }
      return arr
}
console.log(sortArray(arr))

