// Given a string S, find the smallest window(substring) length with all distinct characters of the given string.

 

// Input: aabbcc
// where: First line represents input string S.
 
// Output: 4
// Explanation:

// abbc of length 4 is the smallest window with the highest number of distinct characters.
 

// Assumptions:

//  Character comparisons will be case-sensitive.

let str = "aaab"
function solution(str) {
      //Write your solution here
        let i=0;
        let j=0;
        let map=new Map()
        // let len=10000000000000000000000;
        let len=Number.MAX_VALUE;
        let set =new Set();
        for(let i=0;i<str.length ;i++){
            set.add(str[i]);
        }
        while(j<str.length){//aaab
            map.set(str[j],(map.get(str[j])||0)+1);//{a=1,b=1}
          
            if(map.size == set.size){//2=2
                while(map.get(str[i])>1){
                map.set(str[i],(map.get(str[i])||0)-1);
                i++;//2
                }
                len= Math.min(len,j-i+1)//2
            }
            
            j++;//3
        }
        // console.log(len)
        return len;
    }
    console.log(solution(str));