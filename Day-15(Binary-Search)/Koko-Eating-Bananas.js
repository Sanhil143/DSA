// Koko Eating Bananas
// Koko loves to eat bananas. There are n piles of bananas, the ith pile has piles[i] bananas. 
// The guards have gone and will come back in h hours.

// Koko can decide her bananas-per-hour eating speed of k. Each hour, she chooses some pile of bananas and 
// eats k bananas from that pile. If the pile has less than k bananas, she eats all of them instead and will
//  not eat any more bananas during this hour.

// Koko likes to eat slowly but still wants to finish eating all the bananas before the guards return.

// Return the minimum integer k such that she can eat all the bananas within h hours.

 

// Example 1:

// Input: piles = [3,6,7,11], h = 8
// Output: 4
// Example 2:

// Input: piles = [30,11,23,4,20], h = 5
// Output: 30
// Example 3:

// Input: piles = [30,11,23,4,20], h = 6
// Output: 23

let piles = [3,6,7,11], h = 8

//to check whether the given speed is valid or not
  
const calculateTime = (speed, piles) => {
    let time = 0
    for (let i = 0; i < piles.length; i++) {
        time += Math.ceil(piles[i] / speed)
    }
    return time;
  }


var minEatingSpeed = function (piles, h) {
      let maxPilesSize = 0
      let minSpeed = 0
  
      //Store maximum piles 
      for (let i = 0; i < piles.length; i++) {
          if (piles[i] > maxPilesSize) {
              maxPilesSize = piles[i]
          }
      }
  
      //speed range. [1......maxPileSize]  banana/hour
      let i = 1;   //not denoting index
      let j = maxPilesSize
  
      while(i<=j){
          let mid = i + Math.floor((j-i)/2)
          let timeTaken = calculateTime(mid,piles)
  
          if(timeTaken <= h){
              minSpeed = mid
              j = mid-1
          }
          else{
              i = mid+1
          }
      }
      return minSpeed
  };
  console.log(minEatingSpeed(piles,h));
  
  
  