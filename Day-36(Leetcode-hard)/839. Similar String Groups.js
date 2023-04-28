// 839. Similar String Groups

// Two strings X and Y are similar if we can swap two letters (in different positions) of X, so that it equals Y.
//  Also two strings X and Y are similar if they are equal.

// For example, "tars" and "rats" are similar (swapping at positions 0 and 2), and "rats" and "arts" are similar, 
// but "star" is not similar to "tars", "rats", or "arts".

// Together, these form two connected groups by similarity: {"tars", "rats", "arts"} and {"star"}. 
//  Notice that "tars" and "arts" are in the same group even though they are not similar.  
//  Formally, each group is such that a word is in the group if and only if it is similar to at least one other word in the group.

// We are given a list strs of strings where every string in strs is an anagram of every other string in strs. How many groups are there?

 

// Example 1:

// Input: strs = ["tars","rats","arts","star"]
// Output: 2
// Example 2:

// Input: strs = ["omv","ovm"]
// Output: 1


let strs = ["tars","rats","arts","star"]
// Output: 2

const func = (strs) => {
      let res = 0;

      if(strs.length === 0){
            return 0;
      }
      let visited = new Set();

      for(let s of strs){
            if(!visited.has(s)){
                  dfs(s,strs,visited);
                  res++;
            }
      }
      return res;
}
const isSimilar = (str1,str2) => {
      let count = 0;
      for(let i=0; i<str1.length; i++){
            if(str1[i] !== str2[i]){
                  count++;

                  if(count>2){
                        return false;
                  }
            }
      }
      return true;
}

const dfs = (str,strArr,visited) => {
      if(visited.has(str)){
            return;
      }
      visited.add(str);
      for(let i=0; i<strArr.length; i++){
            if(isSimilar(str,strArr[i])){
                  dfs(strArr[i],strArr,visited)
            }
      }
}
console.log(func(strs));