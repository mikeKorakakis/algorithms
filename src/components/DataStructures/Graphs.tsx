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
			</Box>
		</>
	);
};

export default Graphs;
