// A string is good if there are no repeated characters.

// Given a string s​​​​​, return the number of good substrings of length three in s​​​​​​.

// Note that if there are multiple occurrences of the same substring, every occurrence should be counted.

// A substring is a contiguous sequence of characters in a string.



// Example 1: Input: s = "xyzzaz"
// Output: 1
// Explanation: There are 4 substrings of size 3: "xyz", "yzz", "zza", and "zaz". 
// The only good substring of length 3 is "xyz".

let str = "aababcabc"

const countStr = (str) => {
      let map = new Map()
     let count=0;
    for(let i=0; i<3; i++){
        map.set(str[i], (map.get(str[i])||0)+1)
        if(map.size===3){count++}
    }
    for(let i=3; i<str.length; i++){
        map.set(str[i], (map.get(str[i])||0)+1)
        
        if(map.get(str[i-3])==1){map.delete(str[i-3])}
        else{map.set(str[i-3], map.get(str[i-3])-1)}

        if(map.size===3){count++}
        
    }
    return count 
}

console.log(countStr(str))

