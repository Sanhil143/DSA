// 1232. Check If It Is a Straight Line

// You are given an array coordinates, coordinates[i] = [x, y], where [x, y] represents the coordinate 
// of a point. Check if these points make a straight line in the XY plane.

 

 

// Example 1:



// Input: coordinates = [[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]]
// Output: true
// Example 2:



// Input: coordinates = [[1,1],[2,2],[3,4],[4,5],[5,6],[7,7]]
// Output: false

const coordinates = [[1,1],[2,2],[3,4],[4,5],[5,6],[7,7]];

const func = (coordinates) => {
      if(coordinates.length === 2) {
            return true;
        }
    
        for (let i = 2; i < coordinates.length; i++) {
            const pointThree = coordinates[i];
            const pointTwo = coordinates[i - 1];
            const pointOne = coordinates[i - 2];
            
            if((pointOne[1] - pointTwo[1]) * (pointOne[0] - pointThree[0]) !== (pointOne[1] - pointThree[1]) * (pointOne[0] - pointTwo[0])) {
                return false;
            }
        }
    
        return true;
}
console.log(func(coordinates));