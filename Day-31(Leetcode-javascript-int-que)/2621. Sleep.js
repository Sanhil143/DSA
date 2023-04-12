// 2621. Sleep

// Write an asyncronous function that accepts a positive integer millis and sleeps for that many milliseconds. 
// It can resolve any value.

 

// Example 1:

// Input: millis = 100
// Output: 100
// Explanation: It should return a promise that resolves after 100ms.
// let t = Date.now();
// sleep(100).then(() => {
//   console.log(Date.now() - t); // 100
// });
// Example 2:

// Input: millis = 200
// Output: 200
// Explanation: It should return a promise that resolves after 200ms.

// this is promise and it is resolve after 100 miliseconds


const sleep = async (milliseconds) => {
      return new Promise((resolve,aashu) => {
            setTimeout(() => {
                  resolve(1);
            },milliseconds);
      })
}

let time = Date.now() // 1681271743488 time
console.log(time);
sleep(100)
.then(() => console.log(Date.now() - time))  //after 100 millisecond  1681271743598