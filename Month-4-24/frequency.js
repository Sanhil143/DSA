const arr =  [1,1,2,2,3,4,5,6,6,7];

const frequency = (arr) => {
  let output = {};
  for(let i = 0; i < arr.length; i++) {
    let n = arr[i];
    if(output[n]) {
      output[n]++;
    } else {
      output[n] = 1;
    }
  }
  for(const key in output){
    if(output[key] == 1){
      delete output[key]
    }
  }
  return output;
};

console.log(frequency(arr));
