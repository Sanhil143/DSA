// Given an array of integers A, find the Majority Element.

 

// Display the Majority Element in the array. If no majority element then display 0. 

 

// Input 5 
//          1 2 1 2 2
// Where, 
// First line represents the size of an array. 
// Second line represents array elements separated by single space.
 

// Output 2 

// Here for the given array, 2 appears 3 times in the array of size 5. 

let arr = [1, 2, 1, 2, 2]
let n = arr.length

const countMajor = (arr,n) => {
      if(n<1){
            return arr
      }
      let map = new Map()
      for(let i=0; i<n; i++){
            if(map.has(arr[i])){
                  let count = map.get(arr[i])+1
                  if(count > arr.length/2){
                        return arr[i]
                  }else{
                        map.set(arr[i],count)
                  }
            }else{
                  map.set(arr[i],1)
            }
      }
      
}
console.log(countMajor(arr,n));