// 6. Zigzag Conversion

// The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display 
//       this pattern in a fixed font for better legibility)

// P   A   H   N
// A P L S I I G
// Y   I   R
// And then read line by line: "PAHNAPLSIIGYIR"

// Write the code that will take a string and make this conversion given a number of rows:

// string convert(string s, int numRows);


// Example 1:

// Input: s = "PAYPALISHIRING", numRows = 3
// Output: "PAHNAPLSIIGYIR"
// Example 2:

// Input: s = "PAYPALISHIRING", numRows = 4
// Output: "PINALSIGYAHRPI"
// Explanation:
// P     I    N
// A   L S  I G
// Y A   H R
// P     I
// Example 3:

// Input: s = "A", numRows = 1
// Output: "A"


let s = "PAYPALISHIRING", numRows = 4;
// Output: "PINALSIGYAHRPI"

const func = (s, numRows) => {
      if (numRows == 1) return s;
      let n = s.length;
      let charInSection = numRows * 2 - 2;     // 4 * 2 - 2 = (6)
      let res = ""

      for (let row = 0; row < numRows; row++) {
            let i = row;
            while (i < n) {
                  res += s[i];

                  if (row != 0 && row != numRows - 1) {
                        let charInBetween = charInSection - 2 * row;
                        let secondIndex = i + charInBetween;
                        if (secondIndex < n) {
                              res += s[secondIndex];
                        }
                  }
                  i += charInSection;
            }
      }
      return res;
}
console.log(func(s, numRows));