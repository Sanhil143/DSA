

let arr = [25,85,8,9,6,3,2,4,7,5]

const mergeSort = (arr,l,r) => {
      if(l >= r) {return};
      let mid = l+Math.floor((r-l)/2)
      mergeSort(arr,l,mid)
      mergeSort(arr,mid+1,r)
      merge(arr,l,mid,r)
}
const merge = (arr,l,mid,r) => {
      let temp = new Array(r-l+1)
      let left = l
      let right = mid+1
      let k = 0

      while(left <= mid && right <= r){
            if(arr[left] < arr[right]){
                  temp[k] = arr[left]
                  left++
            }else{
                  temp[k] = arr[right]
                  right++
            }
            k++
      }
      while(left<=mid){ //left part
            temp[k] = arr[left]
            left++,k++
      }
      while(right<=r){ //right part
            temp[k] = arr[right]
            right++,k++
      }
      for(k=0,left=l; k<temp.length; k++,left++){
            arr[left] = temp[k]
      }
      // return arr
}
const sortArray = (arr) => {
      if(arr.length < 1) return arr
      mergeSort(arr,0,arr.length)
      return arr
}
console.log(sortArray(arr));