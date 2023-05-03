// First and last occurrences of x

// Given a sorted array arr containing n elements with possibly duplicate elements, the task is to find indexes of 
// first and last occurrences of an element x in the given array.

// Example 1:

// Input:
// n=9, x=5
// arr[] = { 1, 3, 5, 5, 5, 5, 67, 123, 125 }
// Output:  2 5
// Explanation: First occurrence of 5 is at index 2 and last
//              occurrence of 5 is at index 5. 


// Example 2:

// Input:
// n=9, x=7
// arr[] = { 1, 3, 5, 5, 5, 5, 7, 123, 125 }
// Output:  6 6 

let arr = [1, 3, 5, 5, 5, 5, 67, 123, 125], n = 9, x = 5;


//THis is brute force O(n)
const func = (arr, n, x) => {
      let res = []
      for (let i = 0; i < n; i++) {
            if (arr[i] === x) {
                  res.push(i);
                  break;
            }
      }
      for (let i = n - 1; i >= 0; i--) {
            if (arr[i] === x) {
                  res.push(i);
                  break;
            }
      }

      return res
}
console.log(`Brute force --> ${func(arr, n, x)}`);

//binary search O(logn)

const func1 = (arr, n, x) => {
      let start = 0;
      let end = n - 1;

      let first = -1;
      let last = -1;

      // find first occurence
      while (start <= end) {
            let mid = start + Math.floor((end - start) / 2);

            if (arr[mid] === x) {
                  first = mid;
                  end = mid-1;
            }
            else if (arr[mid] < x) {
                  start = mid + 1;
            }
            else {
                  end = mid - 1;
            }
      }

      if (first === -1) {
            return [-1, -1];
          }
      // find last occurence
      end = n - 1;
      while (start <= end){
            let mid = start + Math.floor((end-start)/2);
            if(arr[mid] === x){
                  last = mid;
                  start = mid + 1;
            }
            else if(arr[mid] < x){
                  start = mid+1;
            }
            else{
                  end = mid-1
            }
      }
      return [first,last]
}
console.log(`Binary search --> ${func1(arr, n, x)}`);
