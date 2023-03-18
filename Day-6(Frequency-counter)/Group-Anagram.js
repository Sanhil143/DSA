let strs = ["eat","tea","tan","ate","nat","bat"] // [["bat"],["nat","tan"],["ate","eat","tea"]]


const groupAnagram = (strs) => {
      let n = strs.length
      let map = new Map()
      for(let i=0; i<n; i++){
            let char = strs[i].split("")
            char.sort()
            let sortChar = char.join("")
            if(map.has(sortChar)){
                  let arr = map.get(sortChar)
                  arr.push(strs[i])
                  map.set(sortChar,arr)
            }
            else{
                  let arr= []
                  arr.push(strs[i])
                  map.set(sortChar,arr)
            }
      }
      // return map
      return [...map.values()]
}
console.log(groupAnagram(strs));