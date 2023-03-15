
let arr  = [1,2,0]
const findMinimum = (arr) => {
      let n = arr.length;
      let i = 0;
       while(i<n){
     let correctIndex = arr[i] - 1;
     if(arr[i] != arr[correctIndex]){
         let temp = arr[i];
         arr[i] = arr[correctIndex];
         arr[correctIndex] = temp;
     }else{
         i++;
     }
}return arr
}
console.log(findMinimum(arr));