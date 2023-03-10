// Check if max occurring character of one string appears same number of times in other


// Given two strings S1 and S2, write s program to find the character which has the maximum occurrence in 
// the first string S1 and check whether that particular character is present in the second string S2 the 
// same number of times as it is present in the first string S1.

 

// Input:
// hello world

// albcllsyaaaaaaaa

// where:
// First line represents S1
// Second line represents S2
 

// Output:Yes
// Explanation:

// 'l' has highest frequency of 3 in S1 and it appears 3 times in S2. 


let s = "hello world"
let a = "albcllsyaaaaaaaa"

const check = (s,a) => {
      let map = new Map()

      for(let i=0; i<s.length; i++){
            if(map.has(s[i])){
                  map.set(s[i],(map.get(s[i]) || 0 )+1 )
            }else{
                  map.set(s[i],1)
            }
      }
      let max = 0
      let ans = 0
      map.forEach((value,key) => {
            if(max < value){
                  max = value
                  ans = key
            }
      })
      let count = 0
      for(let j=0; j<a.length; j++){
            if(ans == a[j]){
                  count++
            }
      }
      if(count === max){
            return "Yes"
      }
      return "No"
      
}
console.log(check(s,a));