

let arr = [8, 3, 15, 9, 2, 7];

const QuickSort = (arr, l, r) => {
      if (l >= r) {
            return
      }
      let pIndx = partition(arr, l, r)
      QuickSort(arr, l, pIndx - 1)
      QuickSort(arr, pIndx + 1, r)
      // return arr
}
const partition = (arr, l, r) => {
      let pivot = arr[r]
      let i = (l - 1)
      for (let j = l; j < r; j++) {
            if (arr[j] <= pivot) {
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

const binarySearch = (arr, k) => {
      let i = 0
      let j = arr.length - 1
      while (i <= j) {
            let mid = i + Math.floor((j - i) / 2)
            if (k == arr[mid]) {
                  return mid
            }
            else if (k > arr[mid]) {
                  i = mid + 1
            } else {
                  j = mid - 1
            }
      }
      return -1
}
let k = 15
const sort = (arr, k) => { //[ 2, 3, 7, 8, 9, 15 ]
      QuickSort(arr, 0, arr.length - 1)
      let arr1 = binarySearch(arr, k)
      if (arr1 == -1) {
            return (`${arr} Your number is not present in an array---> ${k}`)
      } else {
            return (`${arr} This is Kth element of ${k} at index---> ${arr1}`)
      }
}
console.log(sort(arr, k));