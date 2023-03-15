

// Sort the 1st half of an array in ascending and 2nd half in descending order respectively


// Given an array of N integers, sort the first half of the array in ascending order and second half 
// in descending order.

// Note: If N is odd. then the first half will have one element less than the second half.

 

// Input: 9
//  5 2 4 7 9 3 1 6 8
//  where: First line represents the number of elements in the array.
// Second line represents the elements in the array.
 
// Output: 1 2 3 4 9 8 7 6 5

// Explanation: As we can see the array is sorted in ascending order till halfway, here till index 3 
// (till element 4). After that from index 4(from element 9), the array is in descending order.

 let arr = [ 5 ,2 ,4 ,7 ,9 ,3 ,1 ,6 ,8] // 1 2 3 4 9 8 7 6 5
 
 const rotate= (arr) => { // nlogn o(1)
      let n = arr.length
      let temp = new Array(n)
      let k = 0
      
     arr.sort((a,b) => a-b)

     for(let i=0; i<Math.floor(arr.length/2); i++){
      // temp.push(arr[i])
      temp[k] = arr[i]
      k++
     }
     for(let j=arr.length-1; j>=Math.floor(arr.length/2); j--){
      // temp.push(arr[j])
      temp[k] = arr[j]
      k++
     }
     for(let k=0,i=0; k<temp.length; k++,i++){
      arr[i] = temp[k]
     }
     return arr
 }
 console.log(rotate(arr));