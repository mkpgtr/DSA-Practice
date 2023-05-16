// building an undirected graph

class Graph {
    constructor(){
        this.adjacencyList = {}
    }

    addVertex(vertex){
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex] = []
        }
    }
    addEdge(vertex1,vertex2){
       if(!this.adjacencyList[vertex1]){
        this.adjacencyList[vertex1] = []
       }
       if(!this.adjacencyList[vertex2]){
        this.adjacencyList[vertex2] = []
       }
        this.adjacencyList[vertex2].push(vertex1)
        this.adjacencyList[vertex1].push(vertex2)
    }

    removeEdge(vertex1,vertex2){
       this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(v => v!==vertex2)
       this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(v => v!==vertex1)
    }

    removeVertex(vertex){
        while(this.adjacencyList[vertex].length){
            const adjacentVertex = this.adjacencyList[vertex].pop();
            this.removeEdge(vertex,adjacentVertex)
        }
        delete this.adjacencyList[vertex]
    }
   
  


}


const g  = new Graph();

g.addVertex("Raipur") 







g.addVertex("Durg")




g.addEdge('Raipur','Durg')

g.addVertex('Bilaspur')
g.addEdge('Bilaspur','Durg')
g.addEdge('Bilaspur','Raipur')
g.addEdge('Bilaspur','Rajnandgaon')
g.addEdge('Amritsar','Rajnandgaon')

g.addEdge("Amritsar","Rajasthan")
g.addEdge("Uttarakhand","Rajasthan")


g.removeVertex("Bilaspur")
g.removeVertex("Uttarakhand")
g.removeVertex("Raipur")

console.log(g.adjacencyList)


