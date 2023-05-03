// First and last occurrences of x

// Given a sorted array arr containing n elements with possibly duplicate elements, the task is to find indexes of 
// first and last occurrences of an element x in the given array.

// Example 1:

// Input:
// n=9, x=5
// arr[] = { 1, 3, 5, 5, 5, 5, 67, 123, 125 }
// Output:  2 5
// Explanation: First occurrence of 5 is at index 2 and last
//              occurrence of 5 is at index 5. 
 

// Example 2:

// Input:
// n=9, x=7
// arr[] = { 1, 3, 5, 5, 5, 5, 7, 123, 125 }
// Output:  6 6 

let arr = [1, 3, 5, 5, 5, 5, 67, 123, 125] , n=9 , x=5;


//THis is brute force
const func = (arr,n,x) => {
      let res = []
       for(let i=0; i<n; i++){
            if(arr[i] === x){
                  res.push(i);
                  break;
            }
       }
       for(let i=n-1; i>=0; i--){
            if(arr[i]=== x){
                  res.push(i);
                  break;
            }
       }
       
       return res
}
console.log(func(arr,n,x));
