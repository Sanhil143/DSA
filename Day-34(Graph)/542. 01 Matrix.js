// 542. 01 Matrix

// Given an m x n binary matrix mat, return the distance of the nearest 0 for each cell.

// The distance between two adjacent cells is 1.

 

// Example 1:


// Input: mat = [[0,0,0],[0,1,0],[0,0,0]]
// Output: [[0,0,0],[0,1,0],[0,0,0]]
// Example 2:


// Input: mat = [[0,0,0],[0,1,0],[1,1,1]]
// Output: [[0,0,0],[0,1,0],[1,2,1]]


var updateMatrix = function(matrix) {
      const m = matrix.length;
   const n = matrix[0].length;
   const visited = Array.from(Array(m), () => new Array(n).fill(false));
   const q = [];
   for (let i = 0; i < m; i++) {
     for (let j = 0; j < n; j++) {
       if (matrix[i][j] === 0) {
         q.push([i, j]);
         visited[i][j] = true;
       }
     }
   }
   const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];
   while (q.length) {
     const curr = q.shift();
     for (const dir of directions) {
       const r = curr[0] + dir[0];
       const c = curr[1] + dir[1];
       if (r < 0 || r >= m || c < 0 || c >= n || visited[r][c]) continue;
       matrix[r][c] = matrix[curr[0]][curr[1]] + 1;
       visited[r][c] = true;
       q.push([r, c]);
     }
   }
   return matrix;
 }
 // TC: O(M * N)
 // SC: O(M * N), because of queue.