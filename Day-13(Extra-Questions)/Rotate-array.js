let arr = [1,2,3]
let k = 2

const reverse = (arr,i,j) => {
      
      while(i<j){
            arr[i] = arr[i] + arr[j]
            arr[j] = arr[i] - arr[j]
            arr[i] = arr[i] - arr[j]
            i++
            j--
      }
      return arr
}
const rotate = (arr,k) => {
     if(arr.length <= 1){
      return arr
     }
      reverse(arr,0,arr.length-1)
      reverse(arr,0,k-1)
      reverse(arr,k,arr.length-1)
      return arr

}
console.log(rotate(arr,k));