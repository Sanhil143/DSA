// Find pair in an array with given sum
// Given an array of integers A and an integer S, determines whether there exist two elements in the array  
// whose sum is exactly equal to S or not. 

// Display 1 a pair is found in an array with matching sum S else 0. 

 

// Input  6
//     5 
//     1 -2 3 8 7

//  Where, 

// First line represents integer S. 
// Second line represents the size of an array. 
// Third line represents array elements separated by single space. 
 

// Output  1 

// For the given array, A[1] + A[3] = -2 + 8 = 6 which is equal to the given number S=6.

// let arr = [0, 0, 10, -12, 0, -1, -1, -1, -1, -1]
let arr = [1 ,-2, 3 ,8 ,7]
let s = 6

const pairSum = (arr,s) => {
      arr.sort((a,b) => a-b)
      let i = 0
      let j = arr.length-1
            while(i<j){
                  if(arr[i] + arr[j] == s){
                        return 1
                  }
                  else if(arr[i] + arr[j] < s){
                        i++
                  }
                  else if(arr[i] + arr[j] > s){
                        j--
                  }
                  
            }
            
      
      return 0
}
console.log(pairSum(arr,s));