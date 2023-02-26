
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
        let left = []
        let right = []
        let n = []
      let pivot = arr[0]

        for(let i=1; i<arr.length; i++){
            if(arr[i] < pivot){
                left.push(arr[i])
            }else{
                right.push(arr[i])
            }
        }
        
        
        
        return n.concat(sortArray(left),pivot,sortArray(right))
}
console.log(sortArray(arr))

