import { Box, Typography } from "@material-ui/core";
import React from "react";

const StacksQueues: React.FC = () => {
	return (
		<>
			<Typography variant="h5" gutterBottom>
				Stacks
			</Typography>
			<Box style={{ textAlign: "left" }}>
				<Typography variant="h6" gutterBottom>
					What is a stack?
				</Typography>
				<Typography variant="subtitle2" gutterBottom>
					<p>
						A LIFO data structure! The last element added to the
						stack will be the first element removed from the stack
					</p>
					<p>HOW IS IT USED?</p>
					<p>
						Think about a stack of plates, or a stack of markers, or
						a stack of....anything. As you pile it up the last thing
						(or the topmost thing) is what gets removed first.
					</p>
					<p>WHERE STACKS ARE USED</p>
					<ul>
						<li>Managing function invocations</li>
						<li>Undo / Redo </li>
						<li>
							Routing (the history object) is treated like a
							stack!
						</li>
					</ul>
					<p>THERE IS MORE THAN ONE WAY OF IMPLEMENTING A STACK</p>
					<p>ARRAY IMPLEMENTATION</p>
					<p>push pop</p>
				</Typography>
				<img
					src={process.env.PUBLIC_URL + "/stack.png"}
					height="400px"
				></img>
				<br></br>
				<br></br>
				<iframe
					title="quick sort"
					style={{ width: "100%", height: "500px", scale: "0.5" }}
					src="https://visualgo.net/en/list"
				></iframe>
				<Typography variant="h6" gutterBottom>
					Comparison with arrays
				</Typography>
				<Typography variant="subtitle2" gutterBottom>
					<pre>{`

                class Node {
                    constructor(value){
                        this.value = value;
                        this.next = null;
                    }
                }

                  class Stack {
                    constructor(){
                        this.first = null;
                        this.last = null;
                        this.size = 0;
                    }

                    push(val){
                        var newNode = new Node(val);
                        if(!this.first){
                            this.first = newNode;
                            this.last = newNode;
                        }else{
                            var temp = this.first;
                            this.first = newNode;
                            this.first.next = temp;

                        }

                        return ++this.size;
                    }

                    pop(){
                        if(!this.first) return null;
                        var temp = this.first;

                        if(this.first === this.last){
                            this.last = null
                            
                        }
                        this.first = this.first.next
                        this.size--;
                        return temp.value;
                    }
                }


                
                    `}</pre>
				</Typography>
				<Typography variant="h6" gutterBottom>
					Stack Push Pseudocode
				</Typography>
				<Typography variant="subtitle2" gutterBottom>
					<strong>Add a value to the top of the stack!</strong>
					<ul>
						<li>The function should accept a value</li>
						<li>Create a new node with that value</li>
						<li>
							If there are no nodes in the stack, set the first
							and last property to be the newly created node{" "}
						</li>
						<li>
							If there is at least one node, create a variable
							that stores the current first property on the stack
						</li>
						<li>
							Reset the first property to be the newly created
							node
						</li>
						<li>
							Set the next property on the node to be the
							previously created variable
						</li>
						<li>Increment the size of the stack by 1</li>
					</ul>
				</Typography>
				<Typography variant="h6" gutterBottom>
					Stack Pop Pseudocode
				</Typography>
				<Typography variant="subtitle2" gutterBottom>
					<strong>Remove a value from the top of the stack!</strong>
					<ul>
						<li>If there are no nodes in the stack, return null</li>
						<li>
							Create a temporary variable to store the first
							property on the stack
						</li>
						<li>
							If there is only 1 node, set the first and last
							property to be null
						</li>
						<li>
							If there is more than one node, set the first
							property to be the next property on the current
							first
						</li>
						<li> Decrement the size by 1</li>
						<li> Return the value of the node removed</li>
					</ul>
				</Typography>

				<Typography variant="subtitle2" gutterBottom>
					<strong>Big O of Stacks</strong>
					<ul>
						<li>Insertion - O(1)</li>
						<li>Removal - O(1) </li>
						<li>Searching - O(N)</li>
						<li>Access - O(N)</li>
					</ul>
					<strong>Recap</strong>
					<ul>
						<li>
							Stacks are a LIFO data structure where the last
							value in is always the first one
						</li>
						<li>
							Stacks are used to handle function invocations (the
							call stack), for operations like undo/redo, and for
							routing (remember pages you have visited and go
							back/forward) and much more!
						</li>
						<li>
							They are not a built in data structure in
							JavaScript, but are relatively simple to implement
						</li>
						<li>nsert and remove are both O(1)</li>
					</ul>
				</Typography>
				<Typography variant="h6" gutterBottom>
					What is a queue?
				</Typography>
				<Typography variant="subtitle2" gutterBottom>
					<p>A FIFO data structure! First In First Out</p>
					<p>WE'VE SEEN THIS BEFORE</p>
					<p>
						Queues exist everywhere! Think about the last time you
						waited in line....
					</p>
					<p>How do we use them in programming?</p>
					<ul>
						<li>Background tasks</li>
						<li>Uploading resources</li>
						<li>Printing / Task processing</li>
					</ul>
					<p>THERE IS MORE THAN ONE WAY OF IMPLEMENTING A QUEU</p>
					<p>ARRAY IMPLEMENTATION// requires reindexing</p>
					<p>push shift //shift requires reindexing</p>
					<p>unshift pop //unshift requires reindexing</p>
				</Typography>
				<img
					src={process.env.PUBLIC_URL + "/queue.png"}
					height="400px"
				></img>
				<br></br>
				<br></br>
				<iframe
					title="quick sort"
					style={{ width: "100%", height: "500px", scale: "0.5" }}
					src="https://visualgo.net/en/list"
				></iframe>
				<Typography variant="h6" gutterBottom>
					Comparison with arrays
				</Typography>
				<Typography variant="subtitle2" gutterBottom>
					<pre>{`

                    class Node {
                        constructor(value){
                            this.value = value;
                            this.next = null;
                        }
                    }

                    class Queue {
                        constructor(){
                            this.first = null;
                            this.last = null;
                            this.size = 0;
                        }
                    }

                    enqueue(val){
                        var newNode = new Node(val);
                        if(!this.first){
                            this.first = newNode;
                            this.last = newNode;
                        }else{
                            this.last.next = newNode;
                            this.last = newNode;

                        }

                        return ++this.size;
                    }

                    dequeue(){
                        if(!this.first) return null;
                        var temp = this.first;

                        if(this.first === this.last){
                            this.last = null
                            
                        }
                        this.first = this.first.next
                        this.size--;
                        return temp.value;
                    }
                }


                
                    `}</pre>
				</Typography>
				<Typography variant="h6" gutterBottom>
					Queue Enqueue Pseudocode
				</Typography>
				<Typography variant="subtitle2" gutterBottom>
					<strong>
						Adding to the beginning of the Queue! Remember, queues
						are a FIFO data structure
					</strong>
					<ul>
						<li>This function accepts some value</li>
						<li>
							Create a new node using that value passed to the
							function
						</li>
						<li>
							If there are no nodes in the queue, set this node to
							be the first and last property of the queue
						</li>
						<li>
							Otherwise, set the next property on the current last
							to be that node, and then set the last property of
							the queue to be that node
						</li>
						<li>Increment the size of the queue by 1</li>
					</ul>
				</Typography>
				<Typography variant="h6" gutterBottom>
					Queue Dequeue Pseudocode
				</Typography>
				<Typography variant="subtitle2" gutterBottom>
					<strong>
						Removing from the beginning of the Queue! Remember,
						queues are a FIFO data structure
					</strong>
					<ul>
						<li>If there is no first property, just return null</li>
						<li>Store the first property in a variable</li>
						<li>
							See if the first is the same as the last (check if
							there is only 1 node). If so, set the first and last
							to be null
						</li>
						<li>
							If there is more than 1 node, set the first property
							to be the next property of first{" "}
						</li>
						<li>Decrement the size by 1</li>
						<li>Return the value of the node dequeued</li>
					</ul>
				</Typography>

				<Typography variant="subtitle2" gutterBottom>
					<strong>Big O of Queues</strong>
					<ul>
						<li>Insertion - O(1)</li>
						<li>Removal - O(1) </li>
						<li>Searching - O(N)</li>
						<li>Access - O(N)</li>
					</ul>
					<strong>Recap</strong>
					<ul>
						<li>
							Queues are a FIFO data structure, all elements are
							first in first out.
						</li>
						<li>
							Queues are useful for processing tasks and are
							foundational for more complex data structures
						</li>
						<li>Insertion and Removal can be done in O(1)</li>
					</ul>
				</Typography>
			</Box>
		</>
	);
};

export default StacksQueues;
