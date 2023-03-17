

let arr = [8,3,15,9,2,7];

const QuickSort = (arr,l,r) => {
      if(l >= r){
            return
      }
      let pIndx = partition(arr,l,r)
      QuickSort(arr,l,pIndx-1)
      QuickSort(arr,pIndx+1,r)
      // return arr
}
const partition = (arr,l,r) => {
      let pivot = arr[r]
      let i = (l-1)
      for(let j=l; j<r; j++){
            if(arr[j] <= pivot){
                  i++
                  let temp = arr[j]
                  arr[j] = arr[i]
                  arr[i] = temp
            }
      }
      i++
      let temp = pivot
      arr[r] = arr[i]
      arr[i] = temp

      return i
}
const sort = (arr) => {
      QuickSort(arr,0,arr.length-1)
      return arr
}
console.log(sort(arr));