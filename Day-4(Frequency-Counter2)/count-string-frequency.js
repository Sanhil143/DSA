// Calculate the frequency of each word in the given string.

// Q :- Given a string str, the task is to find the frequency of each word in a string.
// Examples: 
// Input: str = “Success is not the key of Happiness, Happiness is the key of success”. 
// Output: 
// Success :- 2
// is :-2
// Not:-1
// The:-2
// Key:-2
// of  :- 2
// Happiness:- 2

 let str = "Success is not the key of Happiness, Happiness is the key of success"

 const countFreq = (str) => {
      let str1 = str.split(",").join(" ").split(" ")
      let map = new Map()
      for(let s of str1){
            map.set(s,(map.get(s) || 0) +1 )
      }
      
 }
 countFreq(str)
 
