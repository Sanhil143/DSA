// Queue
class Queue {
      constructor(value) {
            this.item = [],
                  this.size = 10;
      }

      enqueue(value) { //addElement
            return this.item.push(value);
      }
      dequeue() { //removeElement
            if (this.item.length > 0) {
                  return this.item.shift();
            }
      }
      peekElement() {
            return this.item[0];
      }
      isEmpty() {
            return this.item === 0;
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


// Breadth first search

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