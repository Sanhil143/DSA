

let adjacencyList = [[1],[0, 2, 3],[1],[1, 4],[3, 5, 6, 7],[4],[4],[4]];

const BFS = (adjacencyList) => {
      let Q = [];  //Queue
      let V = adjacencyList.length;
  
      let visited = new Array(V).fill(false)
      let result = [];
      Q.push(0)
      visited[0] = true;
  
      while(Q.length > 0){
          let node = Q.shift()
          let countNeighbours = adjacencyList[node].length;
  
          for(let i=0; i<countNeighbours; i++){
              if(visited[adjacencyList[node][i]] === false){
                  Q.push(adjacencyList[node][i]);
                  visited[adjacencyList[node][i]] = true;
              }
          }
          result.push(node);
      }
      return result;
  }
  
  console.log(BFS(adjacencyList));
  
