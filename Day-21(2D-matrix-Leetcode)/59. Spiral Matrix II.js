// 59. Spiral Matrix II

// Given a positive integer n, generate an n x n matrix filled with elements from 1 to n2 in spiral order.

 

// Example 1:


// Input: n = 3
// Output: [[1,2,3],[8,9,4],[7,6,5]]
// Example 2:

// Input: n = 1
// Output: [[1]]

let n = 1
// Output: [[1]]

var generateMatrix = function(n) {
      let c1=0;
      let c2=n-1;
      let r1=0;
      let r2=n-1;
      
      let arr=Array.from(Array(n),()=>Array(n));
      let i=1;
      while(i<=n*n){
          
          for(let c=c1;c<=c2;c++){
              arr[r1][c]=i;
              i++;
          }
          r1++;
          for(let r=r1;r<=r2;r++){
              arr[r][c2]=i;
              i++;
          }
          c2--;
          for(let c=c2;c>=c1;c--){
              arr[r2][c]=i;
              i++;
          }
          r2--;
          for(let r=r2;r>=r1;r--){
              arr[r][c1]=i;
              i++;
          }
          c1++;        
      }
      return arr;
  };
  console.log(generateMatrix(n));