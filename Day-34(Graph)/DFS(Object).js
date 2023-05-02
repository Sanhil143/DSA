

// Depth First Search (DFS) algo

dfs(startingNode)
{
      let visited = {};

      this.DFS(startingNode,visited)

}
// In this function we use recursive stack instead of stack

//Recusrive function which process and explore
//all the adjacent vertex of the vertex with which it is called

DFS(vert,visited)
{
      visited[vert] = true;
      console.log(vert);

      let get_neighbours = this.AdjList.get(vert);

      for(let i in get_neighbours){
            let get_elem = get_neighbours[i];
            if(!visited[get_elem])
            this.DFS(get_elem, visited);  //recursive call
      }
}