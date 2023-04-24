

// Given an array of integers arr, and three integers a, b and c. You need to find the number of good triplets.

// A triplet (arr[i], arr[j], arr[k]) is good if the following conditions are true:

// 0 <= i < j < k < arr.length
// |arr[i] - arr[j]| <= a
// |arr[j] - arr[k]| <= b
// |arr[i] - arr[k]| <= c
// Where |x| denotes the absolute value of x.

// Return the number of good triplets.

 

// Example 1:

// Input: arr = [3,0,1,1,9,7], a = 7, b = 2, c = 3
// Output: 4
// Explanation: There are 4 good triplets: [(3,0,1), (3,0,1), (3,1,1), (0,1,1)].
// Example 2:

// Input: arr = [1,1,2,2,3], a = 0, b = 0, c = 1
// Output: 0
// Explanation: No triplet satisfies all conditions.

let arr = [3,0,1,1,9,7], a = 7, b = 2, c = 3
// Output: 4

const func = (arr,a,b,c) => {

      let checkTripplet = (i,j,k) => {
            let val1 = Math.abs(arr[i] - arr[j]) <= a;
            let val2 = Math.abs(arr[j] - arr[k]) <= b;
            let val3 = Math.abs(arr[i] - arr[k]) <= c;
            if(val1 && val2 && val3){
                  return true;
            }
      }
      let count = 0;
      for(let i=0; i<arr.length; i++){
            for(let j=i+1; j<arr.length; j++){
                  for(let k=j+1; k<arr.length; k++){
                        if(checkTripplet(i,j,k)){
                              count++
                        }
                  }
            }
      }
      return count;
}
console.log(func(arr,a,b,c));