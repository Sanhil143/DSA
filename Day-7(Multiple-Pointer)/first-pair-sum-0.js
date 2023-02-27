// Max Pair Sum
// Given an array of distinct integers A, find the largest sum of any pair of elements. 



// Input   1 2 3 89 4 10 

// Where, 
// First line contains the size of array N. 
// Second line contains array elements.      

// Output  99 

// Here for the given array, sum of various pairs are 
//     1 + 89 = 90 
//     2 + 89 = 91 
//     3 + 89 = 92 
//     4 + 89 = 93
//     10 + 89 = 99 

// and so on. The largest sum out of these pairs is 99. 

//Find the first pair that sum is x

let arr = [1, 2, 3, 89, 4, 10] //time complexity is O(n log n)

const firstPair = (arr) => {
      arr.sort((a,b) => a-b)
      let i = 0
      let j = arr.length - 1
      let sum = 0
      while (i < j) {
            if (Math.abs(arr[i] + arr[j]) >= sum) {
             sum = (arr[i] + arr[j])
            }
            if (arr[i] + arr[j] <= sum) {
                  i++
            }
            else if (arr[i] + arr[j] >= sum){
                  j--
            }
      }
      return sum
}
console.log(firstPair(arr));