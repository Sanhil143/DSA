
// Queue Class

class Queue {
      constructor() {
            this.item = [],
                  this.size = 10;
      }

      addElement(value) { //enqueue
            return this.item.push(value);
      }
      removeElement() { //dequeue
            if (this.item.length > 0) {
                  return this.item.shift();
            }
      }
      peekElement() {
            return this.item[0];
      }
      isEmpty() {
            return this.item.length === 0;
      }
      isFull() {
            return this.item.length === this.size;
      }
      getSize() {
            return this.size;
      }
      clear() {
            this.item = [];
      }

}


// ------------------------------ <^> ----------------------------

//Graph class

class Graph {

      constructor(noOfVertices) {
            this.noOfVertices = noOfVertices;
            this.AdjList = new Map();
      }

      //add vertex to the graph
      addVertex(v) {
            // initialize the adjacent list with a
            //null array
            this.AdjList.set(v, []);
      }

      //add edge of the graph
      addEdge(v, w) {
            //get the list for vertex v and put the
            //vertex w denoting edge between v and w
            this.AdjList.get(v).push(w);

            //Since graph is undirected
            //add an edgw from w to v also
            this.AdjList.get(w).push(v)
      }

      //Print the vertex and adjacency list
      printGraph() {
            //get all the vertices
            var get_keys = this.AdjList.keys();

            //iterate over the vertices
            for (var i of get_keys) {

                  //great the corresponding adjacency list
                  //for the vertex
                  var get_values = this.AdjList.get(i);
                  var conc = "";

                  //iterate over the adjacency list
                  //concatenate the value into a string
                  for (var j of get_values) {
                        conc += j + " ";
                  }

                  console.log(i + " -> " + conc);
            }
      }

      // ------------------------------ <^> -----------------------------------------

      //BFS function
      bfs(startingNode){

            var visited = {};
            var queue = new Queue();

            visited[startingNode] = true;
            queue.addElement(startingNode);

            //loop untill queue is empty
            while(!queue.isEmpty()){
                  //get the element from the queue
                  var getQueueElement = queue.removeElement()

                  //passing the current vertex to callback function
                  console.log(getQueueElement);

                  //get the adjacent list for current vertex
                  var get_List = this.AdjList.get(getQueueElement);

                  //loop through the list and add the element to the
                  // queue if it is not processed yet

                  for(var i in get_List){
                        var neigh = get_List[i];

                        if(!visited[neigh]){
                              visited[neigh] = true;
                              queue.addElement(neigh);
                        }
                  }
            }
      }

      // ------------------------------------- <^> ---------------------------------------

      
      //DFS function
      dfs(startingNode)
      {
            let visited = {};

            this.DFS(startingNode, visited);
      }

      DFS(vert,visited)
      {
            visited[vert] = true;
            console.log(vert);

            let get_neigh = this.AdjList.get(vert);

            for(let i in get_neigh){
                  let get_elem = get_neigh[i];
                  if(!visited[get_elem])
                  this.DFS(get_elem,visited)
            }
      }
}



//Using the above implemented graph class


let graph = new Graph(5)
let vertices = ['AA','BB','CC','DD','EE']


//adding vertices
for(let i=0; i<vertices.length; i++){
      graph.addVertex(vertices[i]);
}

// adding edges
graph.addEdge('AA','BB');
graph.addEdge('AA','DD');
graph.addEdge('AA','EE');
graph.addEdge('BB','CC');
graph.addEdge('DD','EE');
graph.addEdge('EE','CC');


//Print all vertex and its adjacency list
// graph.printGraph()
/**
AA -> BB DD EE 
BB -> AA CC 
CC -> BB EE 
DD -> AA EE 
EE -> AA DD CC 
*/

console.log('BFS');
graph.bfs('AA')

console.log('DFS');
graph.dfs('AA')
