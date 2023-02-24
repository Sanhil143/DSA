// Find the frequency of digits in a number

// Tags:	Do While LoopFor LoopLoopWhile Loop
// Given a number N, find the frequency of digits in N using loop.

// Input:12553451
// where:First line represents value of N.
// Output:
//     1 2

//     2 1 

//     3 1

//     4 1

//     5 3

let a = "12553451"
const digitFreq = (a) => {
      let arr = a.split("").sort()
      let obj = {}
      for(let dig of arr){
            obj[dig] = (obj[dig] || 0)+1
      }
      console.log(Object.entries(obj).join(" ").split(" ").join("\n").split(",").join(" "));
}
digitFreq(a)