// Find first non-repeating element
// Given an array of integers of size N, the task is to find the first non-repeating element in this array.

// Examples:

// Input: {-1, 2, -1, 3, 0}
// Output: 2
// Explanation: The first number that does not repeat is : 2

// Input: {9, 4, 9, 6, 7, 4}
// Output: 6

const arr = [9, 4, 9, 6, 7, 4];

const uniqueFunc = (arr) => {
  const map = new Map();
	for(let i=0; i<arr.length; i++){
		map.set(arr[i],(map.get(arr[i]) || 0) +1);
	}
	for(let i=0; i<arr.length; i++){
		if(map.get(arr[i]) == 1){
			return arr[i];
		}
	}
	return 'no unique element are there'
};

console.log(uniqueFunc(arr));
