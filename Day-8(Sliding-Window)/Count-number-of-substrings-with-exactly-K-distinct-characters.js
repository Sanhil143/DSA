// Count number of substrings with exactly K distinct characters

// Given a string S of lowercase alphabets, count all possible substrings (not necessarily distinct) 
// that have exactly K distinct characters

 

// Input: abc
//  k:2
// where:

// First line represents input String S.
// Second line represents K.
 
// Output: 2

// Explanation: Possible substrings with 2 distinct characters are {"ab", "bc"}

let str = "abc"
let k = 2

const countString = (str,k) => {
      const arr=new Array(26);
      var cnt=0;
      for(var i=0;i<str.length;i++){
         var temp=0;arr.fill(0);
         for(var j=i;j<str.length;j++){
            if(arr[str.charCodeAt(j)-97]==0)++temp;
            arr[str.charCodeAt(j)-97]++;
            if(temp==k)++cnt;
         }
      }
      return cnt;
      
}
console.log(countString(str,k));