// 130. Surrounded Regions

// Given an m x n matrix board containing 'X' and 'O', capture all regions that are 4-directionally surrounded by 'X'.

// A region is captured by flipping all 'O's into 'X's in that surrounded region.

 

// Example 1:


// Input: board = [["X","X","X","X"],["X","O","O","X"],["X","X","O","X"],["X","O","X","X"]]
// Output: [["X","X","X","X"],["X","X","X","X"],["X","X","X","X"],["X","O","X","X"]]
// Explanation: Notice that an 'O' should not be flipped if:
// - It is on the border, or
// - It is adjacent to an 'O' that should not be flipped.
// The bottom 'O' is on the border, so it is not flipped.
// The other three 'O' form a surrounded region, so they are flipped.
// Example 2:

// Input: board = [["X"]]
// Output: [["X"]]

function solve(board) {
      // DFS from nodes at boundary
      if (
        board.length === 0 ||
        board[0].length === 0 ||
        board.length < 3 ||
        board[0].length < 3
      )
        return;
      const m = board.length;
      const n = board[0].length;
      for (let i = 0; i < m; i++) {
        if (board[i][0] === "O") dfsHelper(board, i, 0, m, n);
        if (board[i][n - 1] === "O") dfsHelper(board, i, n - 1, m, n);
      }
      for (let i = 0; i < n; i++) {
        if (board[0][i] === "O") dfsHelper(board, 0, i, m, n);
        if (board[m - 1][i] === "O") dfsHelper(board, m - 1, i, m, n);
      }
      for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
          if (board[i][j] === "O") board[i][j] = "X";
          if (board[i][j] === "*") board[i][j] = "O";
        }
      }
    }
    function dfsHelper(board, r, c, m, n) {
      if (r < 0 || c < 0 || r >= m || c >= n || board[r][c] !== "O") return;
      board[r][c] = "*";
      dfsHelper(board, r + 1, c, m, n);
      dfsHelper(board, r, c + 1, m, n);
      dfsHelper(board, r - 1, c, m, n);
      dfsHelper(board, r, c - 1, m, n);
    }