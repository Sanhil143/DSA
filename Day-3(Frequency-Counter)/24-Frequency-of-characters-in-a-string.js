// Frequency of characters in a string

// Given a string S, count the frequency of characters in the string S i.e. 
// which character is present how many times in the string

// Input:hello world
// where:irst line represents the input string
// Output:
// d 1
// e 1
// h 1
// l 3
// o 2
// r 1
// w 1


// Explanation: Print the count of each distinct letter present in string S.
 //Brute force approach Time_Complexity = O(n^2)
let str2 = "hello world"

const countFreq = (str2) => {
      let s = str2.toLowerCase().split("").sort()
      //dehlloorw
      for(let i=0; i<s.length; i++){
            let count = 0
            for(let j=1; j<s.length; j++){
                  if(s[i]!=" "){
                        if(s[i]==s[j]){
                              count++
                        }
                  }
            }
      //     console.log(s[i]+" "+count)
      }
}
countFreq(str2)

//Frequency_counter T.C O(n)

const countFreq2 = (str2) => {
      let str = str2.split("").sort()
      let obj = {}
      let obj1 = {}
      for(let i=0; i<str.length; i++){
          if(str[i]== " "){
            obj1[str[i]] = 1
          }  
          if(str[i]!= " ") 
          {if(obj[str[i]]){
            obj[str[i]]++
           }else{
            obj[str[i]] = 1
           }
      
      }
      }
      
      console.log(Object.entries(obj).join(" ").split(" ").join("\n").split(",").join(" "))
}
countFreq2(str2)
