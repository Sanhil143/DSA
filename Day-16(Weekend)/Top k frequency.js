// Given an array of strings words and an integer k, return the k most frequent strings.

// Return the answer sorted by the frequency from highest to lowest. Sort the words with the
//  same frequency by their lexicographical order.

 

// Example 1:

// Input: words = ["i","love","leetcode","i","love","coding"], k = 2
// Output: ["i","love"]
// Explanation: "i" and "love" are the two most frequent words.
// Note that "i" comes before "love" due to a lower alphabetical order.
// Example 2:

// Input: words = ["the","day","is","sunny","the","the","the","sunny","is","is"], k = 4
// Output: ["the","is","sunny","day"]
// Explanation: "the", "is", "sunny" and "day" are the four most frequent words, with the number of 
// occurrence being 4, 3, 2 and 1 respectively.

let s = ["i","love","leetcode","i","love","coding"], k =3
const kfreq = (s,k) => {
      let map = new Map()

      for(let i=0; i<s.length; i++){
            map.set(s[i],(map.get(s[i]) || 0) +1)
      }
      let newArr = []
      let ar = Array.from(map.entries())
      ar.sort((a,b) =>{
            if(b[1] != a[1]){
                  return b[1] - a[1]
            }
            return a[0].localeCompare(b[0])
      })
      for(let i=0; i<k; i++){
            newArr.push(ar[i][0])
      }
      return newArr
}
console.log(kfreq(s,k));