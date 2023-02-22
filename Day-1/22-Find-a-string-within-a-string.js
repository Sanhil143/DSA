// Given two strings S1 & S2, search for an occurrence of the second string within a first string.  

// Note: Do not use system library for the implementation. 

// Input:
//     Code Zinger University 
//     Zinger

//     where, 

// First line represents string S1. 
// Second line represents string S2. 

// Output:
//     5 

// Here 'Zinger' word starts at 5th index within 'Code Zinger University’. 

 

// Assume that, 

// The length of strings S1 & S2 are within the range [1 to 10000].
// Character comparisons will be case-sensitive.



let a = 'Code Zinger University' 
let b = 'Zinger'

const findIndex = (a,b) => {
      
      for(let i=0; i<a.length-b.length; i++){
            if(a.substr(i,b.length) == b){
                  console.log(i);
            }
      }
}
findIndex(a,b)