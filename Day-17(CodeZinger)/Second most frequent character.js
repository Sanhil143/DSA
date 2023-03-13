// Second most frequent character
// Given a string S, Find the second most frequent character in S.

 

// Input: aaabbcccc
//  where: First line represents input string S
// Output:  a

let a = 'aaabbcccc'

const freqChar = (a) => {
      let map = new Map()
      for(let i=0; i<a.length; i++){
            if(map.has(a[i])){
                  map.set(a[i],(map.get(a[i])|| 0) +1)
            }else{
                  map.set(a[i],1)
            }
      }
      let max = 0
      let sMax = 0
      let maxKey = 0
      let sMaxKey = 0

      map.forEach((value,key) => {
            if(value>max){
                  sMaxKey = maxKey
                  sMax = max
                  maxKey = key
                  max = value
                  
            }
            else if(value>sMax ){
                  sMaxKey = key
                  sMax = value
                  
            }
            
      })
      return sMaxKey
}
console.log(freqChar(a));