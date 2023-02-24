// Find the element having different frequency than other array elements

// Given an array of N integers where each element in the array occurs the same number of times except one element, 
// find that element.

// Input: 5
//  1 1 2 2 3

//  where:

// First line represents the number of elements in the array.
// Second line represents the elements in the array.

// Output:
// 3

// Explanation: Elements 1, and 2 occur two times each but 3 occurs only once, hence the output 3.
let arr = [5,44,3,2,1,1]
// let arr = [1,2,4,4]

const DiffFreq = (arr) => {
      let obj = {}
      for(let ch of arr){
            obj[ch] = (obj[ch]||0)+1
      }
      for(let i=0; i<Object.keys(obj).length; i++){
            if(Object.values(obj).lastIndexOf(Object.values(obj)[i])==Object.values(obj).indexOf(Object.values(obj)[i])){
            console.log(Object.keys(obj)[i]);

            }
      }
      }

DiffFreq(arr)
// 0 1 2 4 4

