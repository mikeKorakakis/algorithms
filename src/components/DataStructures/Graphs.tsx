import { Box, Typography } from "@material-ui/core";
import React from "react";

const Graphs: React.FC = () => {
	return (
		<>
			<Typography variant="h5" gutterBottom>
				Graphs
			</Typography>
			<Box style={{ textAlign: "left" }}>
				<Typography variant="h6" gutterBottom>
					What are graphs?
				</Typography>
				<Typography variant="subtitle2" gutterBottom>
					<p>
						A graph data structure consists of a finite (and
						possibly mutable) set of vertices or nodes or points,
						together with a set of unordered pairs of these vertices
						for an undirected graph or a set of ordered pairs for a
						directed graph.
					</p>
					<p>Nodes + Connections.</p>
					<strong>Uses for Graphs</strong>
					<ul>
						<li>Social Networks</li>
						<li>Location / Mapping</li>
						<li>Routing Algorithms</li>
						<li>Visual Hierarchy</li>
						<li>File System Optimizations</li>
						<li>EVERYWHERE!</li>
					</ul>
					<strong>Essential Graph Terms</strong>
					<ul>
						<li> Vertex - a node</li>
						<li> Edge - connection between nodes</li>
						<li>
							Weighted/Unweighted - values assigned to distances
							between vertices
						</li>
						<li>
							Directed/Undirected - directions assigned to
							distanced between vertices
						</li>
					</ul>
				</Typography>
				<img
					src={process.env.PUBLIC_URL + "/graph.png"}
					height="400px"
				></img>
				<br></br>
				<br></br>
				<iframe
					title="quick sort"
					style={{ width: "100%", height: "500px", scale: "0.5" }}
					src="https://visualgo.net/en/graphds"
				></iframe>
				<Typography variant="h6" gutterBottom>
					Representing a Graph
				</Typography>
				<br></br>
				<img
					src={process.env.PUBLIC_URL + "/adjacency_graph.png"}
					height="400px"
				></img>
				<br></br>

				<img
					src={process.env.PUBLIC_URL + "/adjacency_list_1.png"}
					height="400px"
				></img>
				<br></br>
				<img
					src={process.env.PUBLIC_URL + "/adjacency_list_2.png"}
					height="400px"
				></img>
				<br></br>
				<Typography variant="subtitle2" gutterBottom>
					<pre>{`
                        class Graph {
                            constructor(){
                                this.adjacencyList = {}
                            }

                            addVertex(vertex){
                                if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = []
                            }

                            addEdge(vertex1, vertex2){
                                this.adjacencyList[vertex1].push(vertex2)
                                this.adjacencyList[vertex2].push(vertex1)

                            }

                            removeEdge(vertex1, vertex2){
                                this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(v => v !== vertex2)
                                this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(v => v !== vertex1)

                            }

                            removeVertex(vertex){
                                while(this.adjacencyList[vertex].length){
                                    const adjacentVertex = this.adjacencyList[vertex].pop();
                                    this.removeEdge(vertex, adjacentVertex);
                                }
                                delete this.adjacencyList[vertex]
                            }
                        }
                        }
                    `}</pre>
				</Typography>
				<Typography variant="h6" gutterBottom>
					Graph Add Vertex Pseudocode
				</Typography>
				<Typography variant="subtitle2" gutterBottom>
					<ul>
						<li>
							Write a method called addVertex, which accepts a
							name of a vertex
						</li>
						<li>
							It should add a key to the adjacency list with the
							name of the vertex and set its value to be an empty
							array
						</li>
					</ul>
					<p>{`g.addVertex("Tokyo")  --> { "Tokyo":[] }`}</p>
				</Typography>
				<Typography variant="h6" gutterBottom>
					Graph Add Edge Pseudocode
				</Typography>
				<Typography variant="subtitle2" gutterBottom>
					<ul>
						<li>
							This function should accept two vertices, we can
							call them vertex1 and vertex2
						</li>
						<li>
							The function should find in the adjacency list the
							key of vertex1 and push vertex2 to the array
						</li>
						<li>
							The function should find in the adjacency list the
							key of vertex2 and push vertex1 to the array
						</li>
						<li>
							Don't worry about handling errors/invalid vertices
						</li>
					</ul>
				</Typography>
				<Typography variant="h6" gutterBottom>
					Graph Remove Edge Pseudocode
				</Typography>
				<Typography variant="subtitle2" gutterBottom>
					<ul>
						<li>
							This function should accept two vertices, we'll call
							them vertex1 and vertex2
						</li>
						<li>
							The function should reassign the key of vertex1 to
							be an array that does not contain vertex2
						</li>
						<li>
							The function should reassign the key of vertex2 to
							be an array that does not contain vertex1
						</li>
						<li>
							Don't worry about handling errors/invalid vertices
						</li>
					</ul>
				</Typography>
				<Typography variant="h6" gutterBottom>
					Graph Remove Vertex Pseudocode
				</Typography>
				<Typography variant="subtitle2" gutterBottom>
					<ul>
						<li>The function should accept a vertex to remove</li>
						<li>
							The function should loop as long as there are any
							other vertices in the adjacency list for that vertex
						</li>
						<li>
							Inside of the loop, call our removeEdge function
							with the vertex we are removing and any values in
							the adjacency list for that vertex
						</li>
						<li>
							delete the key in the adjacency list for that vertex
						</li>
					</ul>
				</Typography>

				<Typography variant="subtitle2" gutterBottom>
					<strong>Big O Graphs</strong>
					<p>|V| - number of vertices</p>
					<p>|E| - number of edges</p>
				</Typography>
				<br></br>
				<img
					src={process.env.PUBLIC_URL + "/graph_bigo.png"}
					height="400px"
				></img>
				<br></br>
				<img
					src={process.env.PUBLIC_URL + "/graph_bigo2.png"}
					height="400px"
				></img>

				<Typography variant="subtitle2" gutterBottom>
					<strong>Recap</strong>
					<ul>
						<li>Hash tables are collections of key-value pairs</li>
						<li>Hash tables can find values quickly given a key</li>
						<li>Hash tables can add new key-values quickly</li>
						<li>
							Hash tables store data in a large array, and work by
							hashing the keys
						</li>
						<li>
							A good hash should be fast, distribute keys
							uniformly, and be deterministic
						</li>
						<li>
							Separate chaining and linear probing are two
							strategies used to deal with two keys that hash to
							the same index
						</li>
						<li>When in doubt, use a hash table!</li>
					</ul>
				</Typography>
				<br></br>
				<img
					src={process.env.PUBLIC_URL + "/heap_bigo.png"}
					height="400px"
				></img>
				<br></br>
				<Typography variant="subtitle2" gutterBottom>
					<strong>Graph Traversal</strong>
					<p>Visiting/Updating/Checking each vertex in a graph</p>
					<p>GRAPH TRAVERSAL USES</p>
					<ul>
						<li> Peer to peer networking</li>
						<li> Web crawlers</li>
						<li> Finding "closest" matches/recommendations</li>
						<li> Shortest path problems</li>
						<li>GPS Navigation</li>
						<li>Solving mazes</li>
						<li>AI (shortest path to win the game)</li>
					</ul>
				</Typography>
				<Typography variant="subtitle2" gutterBottom>
					<strong>Depth First Traversal</strong>
					<p>Visiting/Updating/Checking each vertex in a graph</p>
					<p>GRAPH TRAVERSAL USES</p>
					<ul>
						<li> Peer to peer networking</li>
						<li> Web crawlers</li>
						<li> Finding "closest" matches/recommendations</li>
						<li> Shortest path problems</li>
						<li>GPS Navigation</li>
						<li>Solving mazes</li>
						<li>AI (shortest path to win the game)</li>
					</ul>
				</Typography>
				<br></br>
				<img
					src={process.env.PUBLIC_URL + "/depth_graph_1.png"}
					height="400px"
				></img>
				<br></br>
				<img
					src={process.env.PUBLIC_URL + "/depth_graph_2.png"}
					height="400px"
				></img>
				<br></br>
				<img
					src={process.env.PUBLIC_URL + "/depth_graph_3.png"}
					height="400px"
				></img>
				<br></br>
				<img
					src={process.env.PUBLIC_URL + "/depth_graph_4.png"}
					height="400px"
				></img>
				<br></br>
				<img
					src={process.env.PUBLIC_URL + "/depth_graph_5.png"}
					height="400px"
				></img>
				<br></br>
				<img
					src={process.env.PUBLIC_URL + "/depth_graph_6.png"}
					height="400px"
				></img>
				<br></br>
				<img
					src={process.env.PUBLIC_URL + "/depth_graph_7.png"}
					height="400px"
				></img>

				<br></br>
				<Typography variant="subtitle2" gutterBottom>
					<strong>Breadth First Traversal</strong>
					<p>Visit neighbors at current depth first!</p>

					<p>{`"A"-->"B"-->"E"-->"C"-->"D"-->"F"`}</p>
				</Typography>
				<br></br>
				<img
					src={process.env.PUBLIC_URL + "/breadth_graph_1.png"}
					height="400px"
				></img>
				<br></br>

				<br></br>
				<Typography variant="h6" gutterBottom>
					Depth First Traversal - Recursive
				</Typography>
				<Typography variant="subtitle2" gutterBottom>
					<pre>{`
                     DFS(vertex):
                     if vertex is empty
                         return (this is base case)
                     add vertex to results list
                     mark vertex as visited
                     for each neighbor in vertex's neighbors:
                        if neighbor is not visited:
                           recursively call DFS on neighbor
                    `}</pre>
					<ul>
						<li>The function should accept a starting node</li>
						<li>
							Create a list to store the end result, to be
							returned at the very end
						</li>
						<li>Create an object to store visited vertices</li>
						<li>Create a helper function which accepts a vertex</li>
						<ul>
							<li>
								The helper function should return early if the
								vertex is empty
							</li>
							<li>
								The helper function should place the vertex it
								accepts into the visited object and push that
								vertex into the result array.
							</li>
							<li>
								Loop over all of the values in the adjacencyList
								for that vertex
							</li>
							<li>
								If any of those values have not been visited,
								recursively invoke the helper function with that
								vertex
							</li>
						</ul>
						<li>
							Invoke the helper function with the starting vertex
						</li>
					</ul>
					<p>Visiting Things</p>
					<p>{`{"A": true, "B": true, "D": true}`}</p>
				</Typography>
				<br></br>
				<Typography variant="h6" gutterBottom>
					Depth First Traversal - Iterative
				</Typography>
				<Typography variant="subtitle2" gutterBottom>
					<pre>{`
                  DFS-iterative(start):
                  let S be a stack
                  S.push(start)
                  while S is not empty
                      vertex = S.pop()
                      if vertex is not labeled as discovered:
                          visit vertex (add to result list)
                          label vertex as discovered
                          for each of vertex's neighbors, N do 
                              S.push(N)
                    `}</pre>
					<ul>
						<li>The function should accept a starting node</li>
						<li>
							Create a stack to help use keep track of vertices
							(use a list/array)
						</li>
						<li>
							Create a list to store the end result, to be
							returned at the very end
						</li>
						<li>Create an object to store visited vertices</li>
						<li>
							Add the starting vertex to the stack, and mark it
							visited
						</li>
						<li>While the stack has something in it:</li>
						<ul>
							<li> Pop the next vertex from the stack</li>
							<li> If that vertex hasn't been visited yet:</li>
							<ul>
								<li> ​Mark it as visited</li>
								<li> Add it to the result list</li>
								<li>
									Push all of its neighbors into the stack
								</li>
							</ul>
						</ul>
						<li>Return the result array</li>
					</ul>
					<p>Visiting Things</p>
					<p>{`{"A": true, "B": true, "D": true}`}</p>
				</Typography>
				<br></br>
				<Typography variant="h6" gutterBottom>
					Breadth First Traversal
				</Typography>
				<Typography variant="subtitle2" gutterBottom>
					<ul>
						<li> This function should accept a starting vertex</li>
						<li>
							Create a queue (you can use an array) and place the
							starting vertex in it
						</li>
						<li> Create an array to store the nodes visited</li>
						<li> Create an object to store nodes visited</li>
						<li> Mark the starting vertex as visited</li>
						<li> Loop as long as there is anything in the queue</li>
						<li>
							Remove the first vertex from the queue and push it
							into the array that stores nodes visited
						</li>
						<li>
							Loop over each vertex in the adjacency list for the
							vertex you are visiting.
						</li>
						<li>
							If it is not inside the object that stores nodes
							visited, mark it as visited and enqueue that vertex
						</li>
						<li>
							Once you have finished looping, return the array of
							visited nodes
						</li>
					</ul>
					<p>Visiting Things</p>
					<p>{`{"A": true, "B": true, "D": true}`}</p>
				</Typography>
				<br></br>
				<Typography variant="subtitle2" gutterBottom>
					<pre>{`
                        class Graph {
                            constructor(){
                                this.adjacencyList = {}
                            }


                            depthFirstRecursive(start){
                                const result = [];
                                const visited = {};
                                const adjacencyList = this.adjacencyList;

                                (function dfs(vertex){
                                    if(!vertex) return null;
                                    visited[vertex] = true;
                                    result.push(vertex);
                                    adjacencyList[vertex].forEach(neighbour => {
                                        if(!visited[neighbour]){
                                            return dfs(neighbor)
                                        }

                                    })
                                })(start)

                            }

                            depthFirstIterative(start){
                                const stack = [start];
                                const result = [];
                                const visited = {};
                                let currentVertex;
                        
                                visited[start] = true;
                                while(stack.length){
                                    currentVertex = stack.pop();
                                    result.push(currentVertex);
                        
                                    this.adjacencyList[currentVertex].forEach(neighbor => {
                                       if(!visited[neighbor]){
                                           visited[neighbor] = true;
                                           stack.push(neighbor)
                                       } 
                                    });
                                }
                                return result;
                            }

                            breadthFirst(start){
                                const queue = [start];
                                const result = [];
                                const visited = {};
                                let currentVertex;
                                visited[start] = true;
                        
                                while(queue.length){
                                    currentVertex = queue.shift();
                                    result.push(currentVertex);
                                   
                        
                                    this.adjacencyList[currentVertex].forEach(neighbor => {
                                        if(!visited[neighbor]){
                                            visited[neighbor] = true;
                                            queue.push(neighbor);
                                        }
                                    });
                                }
                                return result;
                            }
                        }
                        }
                    `}</pre>
				</Typography>
			</Box>
		</>
	);
};

export default Graphs;
