
// First Unique Character in a String

// Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

 

// Example 1:Input: s = "leetcode" Output: 0
// Example 2: Input: s = "loveleetcode" Output: 2
// Example 3: Input: s = "aabb" Output: -1

let str = "leetcode"
const uniStr = (str) => {
      let map = {}
      for(let s of str){
            map[s] = (map[s] || 0)+1
      }
      for(let i=0; i<str.length; i++){
            let fre = str[i]
            if(map[fre] === 1){
                  return i
            }
      }
      return -1
     
}
console.log(uniStr(str));

