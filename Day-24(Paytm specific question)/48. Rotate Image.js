

// You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).

// You have to rotate the image in-place, which means you have to modify the input 2D matrix directly.
//  DO NOT allocate another 2D matrix and do the rotation.


// Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
// Output: [[7,4,1],[8,5,2],[9,6,3]]


let matrix = [[1,2,3],[4,5,6],[7,8,9]]

const reverseFunc = (arr) => {
      let start = 0
      let end = arr.length-1
      while(start < end){
            let temp = arr[start]
            arr[start] = arr[end]
            arr[end] = temp
            start++
            end--
      }
}
const rotate = (matrix) => {
      for(let i=0; i<matrix.length; i++){
            for(let j=i+1; j<matrix[i].length; j++){
                  let temp = matrix[i][j]
                  matrix[i][j] = matrix[j][i]
                  matrix[j][i] = temp
            }
      }
      for(let i=0; i<matrix.length; i++){
            reverseFunc(matrix[i])
      }
      return matrix
     
}
console.log(rotate(matrix));