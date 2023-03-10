// Count the unique elements in array
// Given an array of integers A, count the number of unique values in the array. 
// Do not use system function to find the unique number. 

// Input 10 
// 1 2 3 1 4 2 5 6 7 8 
// where, 

// First line represents the size of an array. 
// Second line represents array elements. 

// Output  6 

// Here in the given array, unique values are [3 4 5 6 7 8] hence the result is 6. 

let arr = [9, 8, 7 ,6 ,5, 4, 3, 2, 1 ,0 ,12, 13, 14 ,21 ,45 ,65, 23, 34 ,54 ,56];

const uniqueEle = (arr) => {
      let map = new Map()
      for (let i = 0; i < arr.length; i++) {
            if (map.has(arr[i])) {
                  let count = map.get(arr[i])+1
                  if(count > 1){
                        map.delete(arr[i])
                  }
            }else{
                  map.set(arr[i] , 1)
            }
      }
      return map.size
}
console.log(uniqueEle(arr));