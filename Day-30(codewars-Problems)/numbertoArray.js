
// number to array

let a = 2777;
let myFunc = num => Number(num)
let intArr = Array.from(String(a), myFunc) 

console.log(intArr);