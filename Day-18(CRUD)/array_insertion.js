// -----------Array-Insertion------------

// This insertion creat on our algorithms

let arr = [50, 40, 10, 20, 30, 60, 70];
let n = arr.length
let x = 45;
let pos = 1;

let newarr = arr[n+1]

for (i = 0; i < n + 1; i++) {
    if (i < pos - 1)
        newarr[i] = arr[i];
    else if (i == pos - 1)
        newarr[i] = x;
    else
        newarr[i] = arr[i - 1];
}


console.log(newarr)




// And now we are using splice() method for Insertion
// Splice()method is Javascript function




// let arr1 = [50, 40, 10, 20, 30, 60, 70];

// let newArr = arr1.splice(4,0,80);
// console.log(arr1);  
