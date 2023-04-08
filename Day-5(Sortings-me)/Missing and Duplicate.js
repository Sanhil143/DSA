// var x= 5;
// function check(){
//    y = 10;
//    console.log(x);
//    var x =10;
// }

// function check2(){
//    console.log(y);
// }

// check();
// check2();

let arr = [4, 3, 6, 2, 1,1]; //Repeating num=1  Missingnum=5
// let arr = [3, 1,3 ];
// let arr = [1, 2, 3, 4, 5, 6, 8, 9, 10, 11,2]

const func = (arr) => {
      arr.sort((a,b) => a-b)

     let map = new Map()

     for(let i=0; i<arr.length; i++){
      if(map.has(arr[i])){
             console.log(`Duplicate => ${arr[i]}`)
      }else{
            map.set(arr[i],1)
      }
     }return map
}
console.log(func(arr));