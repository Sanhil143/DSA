// nput: arr[] = {4, 5, 2, 1, 7, 6}
// Output: -1 4 5 5 5 7
// Explanation:
// Since, 4 has no element in its left, so replace it by -1.
// For 5, 4 is the greatest element in its left.
// For 2, 5 is the greatest element in its left.
// For 1, 5 is the greatest element in its left.
// For 7, 5 is the greatest element in its left.
// // For 6, 7 is the greatest element in its left.

let arr = [4, 5, 2, 1, 7, 6]

const replaceLeft = (arr) => {
      // initial assign -1
      let max = arr[0]
      arr[0] = -1

      //then ckeck conditions and iteration starts from 1
      for (let i = 1; i < arr.length; i++) {
            if (max > arr[i]) {
                  arr[i] = max
            }else if(max < arr[i]){
                  //swap each other and update main array
                  let temp = arr[i]
                  arr[i] = max
                  max = temp
            }
      }
      return arr
}
console.log(replaceLeft(arr));