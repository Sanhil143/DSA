
// Breadth first search (BFS) algorithm
 
bfs(startingNode)
{

      // created a visited object
      var visited = {};

      // created a object for queue
      var queue = new Queue();

      // add the starting node to the queue
      visited[startingNode] = true;
      queue.enqueue(startingNode);

      //loop untill queue is empty
      while(!queue.isEmpty()){
            //get the element from the queue
            var getQueueElement = queue.dequeue();

            //passing thw current vertex to callback function
            console.log(getQueueElement);

            //get the adjacent list for current vertex
            var get_List = this.AdjList.get(getQueueElement)

            //loop through the list and add the element to the
            // queue if it is not processed yet

            for(var i in get_List){
                  var neigh = get_List[i];

                  if(!visited[neigh]){
                        visited[neigh] = true;
                        queue.enqueue(neigh);
                  }
            }
      }
}