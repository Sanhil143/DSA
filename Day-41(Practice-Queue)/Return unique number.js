// return unique element in array

const arr = [2, 5, 4, 7];
const arr1 = [2, 6, 9, 7];

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("enter numbers separated by commas: ", (input) => {
  const arr = input.split(",").map(Number);
  rl.question("enter numbers separated by commas: ", (input1) => {
    const arr1 = input1.split(",").map(Number);
    console.log(uniqueNum(arr, arr1));
    rl.close();
  });
});

const uniqueNum = (arr, arr1) => {
	
};
