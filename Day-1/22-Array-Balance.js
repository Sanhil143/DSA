// Array Balance
// Given an unsorted array A, check whether the array is balanced. 

// Display 1 if the array is balanced otherwise 0. 

// Input
//     5 
//     1  1  1  2  1 

//     Where, 

// First line represents the size of an array. 
// Second line represents array elements. 

// Output
//     1 

// Here for the given array, the sum of first three elements 1 + 1 + 1 is 3 and last two elements 2 + 1 is 3.
//  Hence the array is balanced. 



let arr = [2147483647, 2147483645, 2147483646,2147483646]


const arrayBalance = (arr) => {
      let sum = 0
      let sum2 = 0
      let a = ((arr.length + 1) / 2)
      a = Math.floor(a)
      for (let i = 0; i < a; i++) {
            sum += arr[i]
      }
      
      for (let j = a; j < arr.length; j++) {
            sum2 += arr[j]
      }
      if(sum == sum2){
      console.log(sum, sum2);
      }
      else{
            console.log("Hogya");
      }
}
arrayBalance(arr)