
let arr = [1,2,3,4,5]
let arr1 = [1,2,3,4,5]

// solve with swap method
const func = (arr) => {
      let i = 0;
      let j = arr.length-1;
      while(i<j){
            arr[i] = arr[i] + arr[j];
            arr[j] = arr[i] - arr[j];
            arr[i] = arr[i] - arr[j];
            i++,j--;
      }
      return arr;
}
console.log(func(arr));


const func1 = (arr) => {
      if(arr.length <= 1){
            return arr;
      }
      return func1(arr.slice(1)) + arr[0]
}
let a = func1(arr1)
