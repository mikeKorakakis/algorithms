import { Box, Typography } from "@material-ui/core";
import React from "react";

const Dijkstra: React.FC = () => {
	return (
		<>
			<Typography variant="h5" gutterBottom>
				Dijkstra's Algorithm
			</Typography>
			<Box style={{ textAlign: "left" }}>
				<Typography variant="h6" gutterBottom>
					What is Dijksta's Algorithm
				</Typography>
				<Typography variant="subtitle2" gutterBottom>
					<p>
						One of the most famous and widely used algorithms
						around!
					</p>
					<p>
						Finds the shortest path between two vertices on a graph
					</p>
					<p>
						"What's the fastest way to get from point A to point B?"
					</p>
					<strong>Why is it userful?</strong>
					<ul>
						<li> GPS - finding fastest route</li>
						<li>
							Network Routing - finds open shortest path for data
						</li>
						<li>
							Biology - used to model the spread of viruses among
							humans
						</li>
						<li>
							Airline tickets - finding cheapest route to your
							destination
						</li>
						<li> Many other uses!</li>
					</ul>
				</Typography>
				<img
					src={process.env.PUBLIC_URL + "/graph.png"}
					height="400px"
				></img>
				<br></br>
				{/* <br></br>
				<iframe
					title="quick sort"
					style={{ width: "100%", height: "500px", scale: "0.5" }}
					src="https://visualgo.net/en/graphds"
				></iframe> */}
				<Typography variant="h6" gutterBottom>
					Weighted Graph
				</Typography>
				<Typography variant="subtitle2" gutterBottom>
					<pre>{`
                        class WeightedGraph {
                            constructor() {
                                this.adjacencyList = {};
                            }
                            addVertex(vertex){
                                if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
                            }
                            addEdge(vertex1,vertex2, weight){
                                this.adjacencyList[vertex1].push({node:vertex2,weight});
                                this.adjacencyList[vertex2].push({node:vertex1, weight});
                            }
                        }
                    `}</pre>
				</Typography>
				<Typography variant="h6" gutterBottom>
					The Approach
				</Typography>
				<Typography variant="subtitle2" gutterBottom>
					<ul>
						<li>
							Every time we look to visit a new node, we pick the
							node with the smallest known distance to visit
							first.
						</li>
						<li>
							Once we’ve moved to the node we’re going to visit,
							we look at each of its neighbors
						</li>
						<li>
							For each neighboring node, we calculate the distance
							by summing the total edges that lead to the node
							we’re checking from the starting node.
						</li>
						<li>
							If the new total distance to a node is less than the
							previous total, we store the new shorter distance
							for that node.
						</li>
					</ul>
				</Typography>
				{Array.from({ length: 35 }, (_, i) => i).map((item, index) => (
					<img
						key={index}
						src={`${process.env.PUBLIC_URL}/dijkstra_${
							item + 1
						}.png`}
						height="300px"
					></img>
				))}

				<br></br>
				<Typography variant="h6" gutterBottom>
					A simple PQ
				</Typography>
				<Typography variant="subtitle2" gutterBottom>
					<pre>{`
                      class PriorityQueue {
                        constructor(){
                          this.values = [];
                        }
                        enqueue(val, priority) {
                          this.values.push({val, priority});
                          this.sort();
                        };
                        dequeue() {
                          return this.values.shift();
                        };
                        sort() {
                          this.values.sort((a, b) => a.priority - b.priority);
                        };
                      }
                    `}</pre>
				</Typography>
				<Typography variant="h6" gutterBottom>
					Dijksta's Pseudocode
				</Typography>
				<Typography variant="subtitle2" gutterBottom>
					<ul>
						<li>
							This function should accept a starting and ending
							vertex
						</li>
						<li>
							Create an object (we'll call it distances) and set
							each key to be every vertex in the adjacency list
							with a value of infinity, except for the starting
							vertex which should have a value of 0.
						</li>
						<li>
							After setting a value in the distances object, add
							each vertex with a priority of Infinity to the
							priority queue, except the starting vertex, which
							should have a priority of 0 because that's where we
							begin.
						</li>
						<li>
							Create another object called previous and set each
							key to be every vertex in the adjacency list with a
							value of null
						</li>
						<li>
							Start looping as long as there is anything in the
							priority queue
						</li>
						<ul>
							<li> dequeue a vertex from the priority queue</li>
							<li>
								If that vertex is the same as the ending vertex
								- we are done!
							</li>
							<li>
								Otherwise loop through each value in the
								adjacency list at that vertex
							</li>
						</ul>
						<ul>
							<li>
								Calculate the distance to that vertex from the
								starting vertex
							</li>
							<li>
								if the distance is less than what is currently
								stored in our distances object
							</li>
						</ul>
						<ul>
							<li>
								update the distances object with new lower
								distance
							</li>
							<li>
								update the previous object to contain that
								vertex
							</li>
							<li>
								enqueue the vertex with the total distance from
								the start node
							</li>
						</ul>
					</ul>
				</Typography>
				<Typography variant="subtitle2" gutterBottom>
					<pre>{`
                      class PriorityQueue {
                        constructor(){
                          this.values = [];
                        }
                        enqueue(val, priority) {
                          this.values.push({val, priority});
                          this.sort();
                        };
                        dequeue() {
                          return this.values.shift();
                        };
                        sort() {
                          this.values.sort((a, b) => a.priority - b.priority);
                        };
                      }
                      
                      class WeightedGraph {
                          constructor() {
                              this.adjacencyList = {};
                          }
                          addVertex(vertex){
                              if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
                          }
                          addEdge(vertex1,vertex2, weight){
                              this.adjacencyList[vertex1].push({node:vertex2,weight});
                              this.adjacencyList[vertex2].push({node:vertex1, weight});
                          }
                          Dijkstra(start, finish){
                              const nodes = new PriorityQueue();
                              const distances = {};
                              const previous = {};
                              let path = [] //to return at end
                              let smallest;
                              //build up initial state
                              for(let vertex in this.adjacencyList){
                                  if(vertex === start){
                                      distances[vertex] = 0;
                                      nodes.enqueue(vertex, 0);
                                  } else {
                                      distances[vertex] = Infinity;
                                      nodes.enqueue(vertex, Infinity);
                                  }
                                  previous[vertex] = null;
                              }
                              // as long as there is something to visit
                              while(nodes.values.length){
                                  smallest = nodes.dequeue().val;
                                  if(smallest === finish){
                                      //WE ARE DONE
                                      //BUILD UP PATH TO RETURN AT END
                                      while(previous[smallest]){
                                          path.push(smallest);
                                          smallest = previous[smallest];
                                      }
                                      break;
                                  } 
                                  if(smallest || distances[smallest] !== Infinity){
                                      for(let neighbor in this.adjacencyList[smallest]){
                                          //find neighboring node
                                          let nextNode = this.adjacencyList[smallest][neighbor];
                                          //calculate new distance to neighboring node
                                          let candidate = distances[smallest] + nextNode.weight;
                                          let nextNeighbor = nextNode.node;
                                          if(candidate < distances[nextNeighbor]){
                                              //updating new smallest distance to neighbor
                                              distances[nextNeighbor] = candidate;
                                              //updating previous - How we got to neighbor
                                              previous[nextNeighbor] = smallest;
                                              //enqueue in priority queue with new priority
                                              nodes.enqueue(nextNeighbor, candidate);
                                          }
                                      }
                                  }
                              }
                              return path.concat(smallest).reverse();     
                          }
                      }
                      
                      var graph = new WeightedGraph()
                      graph.addVertex("A");
                      graph.addVertex("B");
                      graph.addVertex("C");
                      graph.addVertex("D");
                      graph.addVertex("E");
                      graph.addVertex("F");
                      
                      graph.addEdge("A","B", 4);
                      graph.addEdge("A","C", 2);
                      graph.addEdge("B","E", 3);
                      graph.addEdge("C","D", 2);
                      graph.addEdge("C","F", 4);
                      graph.addEdge("D","E", 3);
                      graph.addEdge("D","F", 1);
                      graph.addEdge("E","F", 1);
                      
                      
                      graph.Dijkstra("A", "E");
                      
                      // ["A", "C", "D", "F", "E"]
                    `}</pre>
				</Typography>
                <Typography variant="h6" gutterBottom>
                    Upgraded Priority Queue
                </Typography>
                <Typography variant="subtitle2" gutterBottom>
					<pre>{`
                   class WeightedGraph {
                    constructor() {
                        this.adjacencyList = {};
                    }
                    addVertex(vertex){
                        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
                    }
                    addEdge(vertex1,vertex2, weight){
                        this.adjacencyList[vertex1].push({node:vertex2,weight});
                        this.adjacencyList[vertex2].push({node:vertex1, weight});
                    }
                    Dijkstra(start, finish){
                        const nodes = new PriorityQueue();
                        const distances = {};
                        const previous = {};
                        let path = [] //to return at end
                        let smallest;
                        //build up initial state
                        for(let vertex in this.adjacencyList){
                            if(vertex === start){
                                distances[vertex] = 0;
                                nodes.enqueue(vertex, 0);
                            } else {
                                distances[vertex] = Infinity;
                                nodes.enqueue(vertex, Infinity);
                            }
                            previous[vertex] = null;
                        }
                        // as long as there is something to visit
                        while(nodes.values.length){
                            smallest = nodes.dequeue().val;
                            if(smallest === finish){
                                //WE ARE DONE
                                //BUILD UP PATH TO RETURN AT END
                                while(previous[smallest]){
                                    path.push(smallest);
                                    smallest = previous[smallest];
                                }
                                break;
                            } 
                            if(smallest || distances[smallest] !== Infinity){
                                for(let neighbor in this.adjacencyList[smallest]){
                                    //find neighboring node
                                    let nextNode = this.adjacencyList[smallest][neighbor];
                                    //calculate new distance to neighboring node
                                    let candidate = distances[smallest] + nextNode.weight;
                                    let nextNeighbor = nextNode.node;
                                    if(candidate < distances[nextNeighbor]){
                                        //updating new smallest distance to neighbor
                                        distances[nextNeighbor] = candidate;
                                        //updating previous - How we got to neighbor
                                        previous[nextNeighbor] = smallest;
                                        //enqueue in priority queue with new priority
                                        nodes.enqueue(nextNeighbor, candidate);
                                    }
                                }
                            }
                        }
                        return path.concat(smallest).reverse();     
                    }
                }
                
                class PriorityQueue {
                    constructor(){
                        this.values = [];
                    }
                    enqueue(val, priority){
                        let newNode = new Node(val, priority);
                        this.values.push(newNode);
                        this.bubbleUp();
                    }
                    bubbleUp(){
                        let idx = this.values.length - 1;
                        const element = this.values[idx];
                        while(idx > 0){
                            let parentIdx = Math.floor((idx - 1)/2);
                            let parent = this.values[parentIdx];
                            if(element.priority >= parent.priority) break;
                            this.values[parentIdx] = element;
                            this.values[idx] = parent;
                            idx = parentIdx;
                        }
                    }
                    dequeue(){
                        const min = this.values[0];
                        const end = this.values.pop();
                        if(this.values.length > 0){
                            this.values[0] = end;
                            this.sinkDown();
                        }
                        return min;
                    }
                    sinkDown(){
                        let idx = 0;
                        const length = this.values.length;
                        const element = this.values[0];
                        while(true){
                            let leftChildIdx = 2 * idx + 1;
                            let rightChildIdx = 2 * idx + 2;
                            let leftChild,rightChild;
                            let swap = null;
                
                            if(leftChildIdx < length){
                                leftChild = this.values[leftChildIdx];
                                if(leftChild.priority < element.priority) {
                                    swap = leftChildIdx;
                                }
                            }
                            if(rightChildIdx < length){
                                rightChild = this.values[rightChildIdx];
                                if(
                                    (swap === null && rightChild.priority < element.priority) || 
                                    (swap !== null && rightChild.priority < leftChild.priority)
                                ) {
                                   swap = rightChildIdx;
                                }
                            }
                            if(swap === null) break;
                            this.values[idx] = this.values[swap];
                            this.values[swap] = element;
                            idx = swap;
                        }
                    }
                }
                
                class Node {
                    constructor(val, priority){
                        this.val = val;
                        this.priority = priority;
                    }
                }
                
                var graph = new WeightedGraph()
                graph.addVertex("A");
                graph.addVertex("B");
                graph.addVertex("C");
                graph.addVertex("D");
                graph.addVertex("E");
                graph.addVertex("F");
                
                graph.addEdge("A","B", 4);
                graph.addEdge("A","C", 2);
                graph.addEdge("B","E", 3);
                graph.addEdge("C","D", 2);
                graph.addEdge("C","F", 4);
                graph.addEdge("D","E", 3);
                graph.addEdge("D","F", 1);
                graph.addEdge("E","F", 1);
                
                
                graph.Dijkstra("A", "E");
                
                
                
                
                    `}</pre>
				</Typography>
			</Box>
		</>
	);
};

export default Dijkstra;
