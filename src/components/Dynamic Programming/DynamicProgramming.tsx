import { Box, Typography } from "@material-ui/core";
import React from "react";

const DynamicProgramming: React.FC = () => {
	return (
		<>
			<Typography variant="h5" gutterBottom>
				Dynamic Programming
			</Typography>
			<Box style={{ textAlign: "left" }}>
				<Typography variant="h6" gutterBottom>
					What is Dynamic Programming
				</Typography>
				<Typography variant="subtitle2" gutterBottom>
					<p>
						A method for solving a complex problem by breaking it
						down into a collection of simpler subproblems, solving
						each of those subproblems just once, and storing their
						solutions.
					</p>
					<strong>OVERLAPPING SUBPROBLEMS</strong>
					<p>
						A problem is said to have overlapping subproblems if it
						can be broken down into subproblems which are reused
						several times
					</p>
					<p>e.g FIBONACCI SEQUENCE</p>
					<p>
						"Every number after the first two is the sum of the two
						preceding ones" -- lots of repetition
					</p>
					<strong>OPTIMAL SUBSTRUCTURE</strong>
					<p>
						A problem is said to have optimal substructure if an
						optimal solution can be constructed from optimal
						solutions of its subproblems
					</p>
					<p>e.g.</p>
					<p>Shortest Path From:</p>
					<p>{`A to D A -> B -> C -> D`}</p>
					<p>{`A to C A -> B -> C `}</p>
					<p>{`A to B A -> B`}</p>
				</Typography>

				<Typography variant="h6" gutterBottom>
					FIBONACCI SEQUENCE RECURSIVE SOLUTION
				</Typography>
				<Typography variant="subtitle2" gutterBottom>
					<ul>
						<li> Fib(n) = Fib(n-1) + Fib(n-2)</li>
						<li> Fib(2) is 1</li>
						<li> Fib(1) is 1</li>
					</ul>
					<pre>{`
                      function fib(n){
                        if(n <= 2) return 1;
                        return fib(n-1) + fib(n-2);
                      }
                    `}</pre>
				</Typography>
				<Typography variant="h6" gutterBottom>
					FIBONACCI SEQUENCE RECURSIVE SOLUTION BIG O
				</Typography>
				<br></br>
				<img
					src={`${process.env.PUBLIC_URL}/fib_recursive.png`}
					height="300px"
				></img>
				<br></br>
				<Typography variant="subtitle2" gutterBottom>
					<strong>IT IS O(2^N)</strong>
					<p>We are repeating things</p>
					<p>One solution is memoization</p>
					<strong>MEMOIZATION</strong>
					<p>
						Storing the results of expensive function calls and
						returning the cached result when the same inputs occur
						again
					</p>
					<pre>{`
                    function fib(n, memo=[]){
                        if(memo[n] !== undefined) return memo[n]
                        if(n <= 2) return 1;
                        var res = fib(n-1, memo) + fib(n-2, memo);
                        memo[n] = res;
                        return res;
                    }
                    `}</pre>
					<br>The complexity of the memoized solution is</br>
					<strong>IT IS O(N)</strong>
				</Typography>
				<Typography variant="h6" gutterBottom>
					Tabulation
				</Typography>
				<Typography variant="subtitle2" gutterBottom>
					<p>
						Storing the result of a previous result in a "table"
						(usually an array) Usually done using iteration Better
						space complexity can be achieved using tabulation
					</p>
				</Typography>
			
				<Typography variant="subtitle2" gutterBottom>
					<pre>{`
                        function fib(n){
                            if(n <= 2) return 1;
                            var fibNums = [0,1,1];
                            for(var i = 3; i <= n; i++){
                                fibNums[i] = fibNums[i-1] + fibNums[i-2];
                            }
                            return fibNums[n];
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
			</Box>
		</>
	);
};

export default DynamicProgramming;
