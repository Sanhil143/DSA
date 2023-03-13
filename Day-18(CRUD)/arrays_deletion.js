// -----------Array-Deletion------------

let arr = [12, 58, 45, 75, 48, 95, 57, 62]
let position = 5

for (let i = position; i < arr.length - 1; i++) {
    // console.log(arr[i]);
    arr[i] = arr[i + 1]
}
arr.length = arr.length - 1
console.log(arr);


//1  deletion array with splice() method

let arr1 = [12, 58, 45, 75, 48, 95, 57, 62]

let newArr = arr1.splice(5,1)
// console.log(newArr);
console.log(arr1);