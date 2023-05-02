

let adjacencyList = [[1],[0, 2, 3],[1],[1, 4],[3, 5, 6, 7],[4],[4],[4]];


const DFS = (adjacencyList) => {
      let stack = [];
      let V = adjacencyList.length;
      let visited = new Array(V).fill(false);
      let result = [];

      stack.push(0);
      visited[0]=true;

      while(stack.length > 0){
            let node = stack.pop();
            let countNeighbour = adjacencyList[node].length;

            for(let i=0; i<countNeighbour; i++){
                  if(visited[adjacencyList[node][i]] === false){
                        stack.push(adjacencyList[node][i]);
                        visited[adjacencyList[node][i]] = true;
                  }
            }
            result.push(node);
      }
      return result;
}
console.log(DFS(adjacencyList));
