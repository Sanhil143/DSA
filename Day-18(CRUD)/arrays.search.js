
function searchElement(){
    let arr = [11, 23, 21, 12, 13, 26, 24, 28, 84, 85, 95, 91]
let srchEl = document.getElementById('searchEl').value;
let index = undefined
for (let i = 0; i < arr.length; i++) {
    // console.log(arr[i]);
    if (arr[i] == srchEl) {
        index = i
        break;
    }
} console.log(index);

}


// Array search also done with JS function indexOf() method

// let arr1 = [11, 23, 21, 12, 13, 26, 24, 28, 84, 85, 95, 91]
// let searchElem= 24
// let newArr = arr1.indexOf(searchElem);
// console.log(newArr);

