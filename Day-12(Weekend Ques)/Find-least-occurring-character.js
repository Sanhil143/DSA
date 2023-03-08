// Find least occurring character
// Given a string S, find the least occurring character in the input string S.

// e.g., if the input string is “tests” then the output should be ‘e’.



// Note: If there are more than 1 characters with least count than display the smallest character.

// Input:  hello
// where: First line represents the input string S.

// Output: e
// Explanation:

// // Characters 'h','e' and 'o' occurs only once and 'e' has the smallest ASCII value among them.

let str = "hello"

const findOccur = (str) => {
      if (str.length <= 1) {
            return str
      }
      let map = new Map()
      for (let i = 0; i < str.length; i++) {
            if (map.has(str[i])) {
                  map.set(str[i], (map.get(str[i]) || 0) + 1)
            } else {
                  map.set(str[i], 1)
            }
      }
      let min = str.length+1
      let res = -1

      map.forEach((value,key) => {
            if(min >= value){
                  res = key
                  min = value
            }
      })
      return res

}


console.log(findOccur(str));