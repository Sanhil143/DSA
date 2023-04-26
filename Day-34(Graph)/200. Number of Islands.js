// 200. Number of Islands

// Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.

// An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all 
// four edges of the grid are all surrounded by water.

 

// Example 1:

// Input: grid = [
//   ["1","1","1","1","0"],
//   ["1","1","0","1","0"],
//   ["1","1","0","0","0"],
//   ["0","0","0","0","0"]
// ]
// Output: 1
// Example 2:

// Input: grid = [
//   ["1","1","0","0","0"],
//   ["1","1","0","0","0"],
//   ["0","0","1","0","0"],
//   ["0","0","0","1","1"]
// ]
// Output: 3

let grid = [
        ["1","1","1","1","0"],
        ["1","1","0","1","0"],
        ["1","1","0","0","0"],
        ["0","0","0","0","0"]
      ]
// Output: 1




const func = (grid) => {
      let m = grid.length;
      let n = grid[0].length;
      let count = 0;
      for(let i=0; i<m; i++){
            for(let j=0; j<n; j++){
                  if(grid[i][j] == "1"){
                        dfs(grid,i,j,m,n)
                        count++
                  }
            }
      }
      return count;
}

//Recursuve function

const dfs = (grid,row,col,m,n) => {
      if(row<0 ||row>=m || col<0 || col>=n || grid[row][col] === '0'){
            return; 
      }
      grid[row][col] = '0';
      dfs(grid,row+1,col,m,n)
      dfs(grid,row-1,col,m,n)
      dfs(grid,row,col+1,m,n)
      dfs(grid,row,col-1,m,n)
}

console.log(func(grid));
