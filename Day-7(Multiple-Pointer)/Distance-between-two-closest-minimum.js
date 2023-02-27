// Distance between two closest minimum
// Given an array of integers, find the minimum distance between any two occurrences of the minimum integer in the array.



// Input: 5 1 2 3 4 1 2 1

//   where:
// First line represents the number of elements in the array.
// Second line represents the elements of the array.


// Output:  2
// Explanation: The minimum element 1 occurs at indexes: 1, 5 and 7. So the minimum distance is 7-5 = 2.

// Assumptions:

// Array can be of size from 1 to 1000.
// Array element can be in the range -1000 to 1000.
// If the minimum value has occurred only once then the output will be '-1'.


let arr = [5, 1, 2, 3, 4, 1, 2, 1]

const closestNum = (arr) => {
      let max = Number.MAX_VALUE
      let ind = []

      for (let i = 0; i < arr.length; i++) {
            if (arr[i] < max) {
                  max = arr[i]
            }
      }
      for (let i = 0; i < arr.length; i++) {
            if (arr[i] == max) {
                  ind.push(i)
            }
      }
      if (ind.length < 2) {
            return -1
      }
      let dist = Number.MAX_VALUE
      for(let i=1; i<ind.length; i++){
            if((ind[i] - ind[i-1]) < dist){
                  dist = ind[i] - ind[i-1]
            }
      }
      return dist
}
console.log(closestNum(arr));