

// let arr = [4, 3, 6, 2, 1, 1]; //Repeating num=1  Missingnum=5
let arr = [3,1,3 ];
// let arr = [1, 2, 3, 4, 5, 6, 8, 9, 10, 11,2]

const func = (arr) => {
  arr.sort((a,b) => a-b)
  let repeatingNum = [];
  let newArr = [];
  for(let i=0; i<arr.length; i++){
    if(arr[i] === arr[i+1]){
      repeatingNum.push(arr[i])
    }else{
      newArr.push(arr[i])
    }
  }

  let min = Math.min(...newArr);
  let max = Math.max(...newArr);
  let missingNum = [];

  for(let i=min; i<=max; i++){
    if(!newArr.includes(i)){
      missingNum.push(i);
    }
  }
  
  return `Repeating Number=>${repeatingNum} Missing Number=>${missingNum}`

}
console.log(func(arr));





// const func = (arr) => {
//   // arr.sort((a, b) => a - b)
//   let newArr = [...new Set(arr)]
//   const maxNum = Math.max(...newArr);
// const minNum = Math.min(...newArr);
// const missingNums = [];

// for (let i = minNum; i <= maxNum; i++) {
//   if (!newArr.includes(i)) {
//     missingNums.push(i);
//   }
// }
// return missingNums

// }
// console.log(func(arr));


// const uniqueArr = arr.filter((value, index, self) => {
//   return self.indexOf(value) === index;
// });
