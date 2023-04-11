// Get the mean of an array

// It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come
//  to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

// Return the average of the given array rounded down to its nearest integer.

// The array will never be empty.

let arr = [1,2,3,4,5,]   //output:3

const func = (arr) => {
      let n = arr.length;
      let sum = 0;
      for(let i=0; i<n; i++){
            sum += arr[i]
      }
      return Math.floor(sum / n);
}
console.log( func(arr));