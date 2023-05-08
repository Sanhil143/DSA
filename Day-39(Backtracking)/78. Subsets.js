// 78. Subsets

// Given an integer array nums of unique elements, return all possible subsets (the power set).

// The solution set must not contain duplicate subsets. Return the solution in any order.




let nums = [1, 2, 3]
// Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]

const func = (nums) => {
      let ans = [];
      let curr = [];
      let start = 0;
      back(nums, ans, curr,start);
      return ans;
}

const back = (nums,ans,curr, start) => {
      ans.push([...curr]);
      for(let i=start; i<nums.length; i++){
            curr.push(nums[i]); // Add current number to the current combination
            back(nums, ans, curr, i + 1); // Recursively call back function with updated combination and starting index
            curr.pop(); // Remove the last number from the current combination to backtrack
      }
}
console.log(func(nums));  //https://www.youtube.com/watch?v=H1Bvm3VF03Y


