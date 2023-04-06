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

let arr = [4, 3, 6, 2, 1,1];
//let arr = [3, 1,3 ];

const func = (arr) => {
    let newArr = []
    let newArr1 = []
      for(let i=0; i<arr.length; i++){
            for(let j=i+1; j<arr.length; j++){
                  if(arr[i] == arr[j]){
                        newArr.push(arr[i])
                  }
                  if(arr[i] !== arr[j]){
                        newArr1.push(arr[j])
                  }
            }
      }return 
}
console.log(func(arr));