

// let arr = [4, 3, 6, 2, 1,1]; //Repeating num=1  Missingnum=5
// // let arr = [3, 1,3 ];
// // let arr = [1, 2, 3, 4, 5, 6, 8, 9, 10, 11,2]

// const func = (arr) => {
//       arr.sort((a,b) => a-b)

//      let map = new Map()

//      for(let i=0; i<arr.length; i++){
//       if(map.has(arr[i])){
//              console.log(`Duplicate => ${arr[i]}`)
//       }else{
//             map.set(arr[i],1)
//       }
//      }return map
// }
// console.log(func(arr));

// let x=10;
// const func1 = () => {
//       y = 20
//       console.log(x);
//       var x = 10
// }
// const func2 = () => {
//       console.log(y);
// }

// func1()
// func2()

var x = 10
const func = () => {
  console.log(x);
  var  x = 20
}
func()
