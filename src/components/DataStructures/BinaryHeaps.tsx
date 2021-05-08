import { Box, Typography } from "@material-ui/core";
import React from "react";

const BinaryHeaps: React.FC = () => {
	return (
		<>
			<Typography variant="h5" gutterBottom>
				Binary Heaps
			</Typography>
			<Box style={{ textAlign: "left" }}>
				<Typography variant="h6" gutterBottom>
					What is a Binary Heap?
				</Typography>
				<Typography variant="subtitle2" gutterBottom>
					<p>
						Very similar to a binary search tree, but with some
						different rules!
					</p>
					<p>
						pIn a MaxBinaryHeap, parent nodes are always larger than
						child nodes. In a MinBinaryHeap, parent nodes are always
						smaller than child nodes
					</p>
					<ul>
						<li>Each parent has at most two child nodes</li>
						<li>
							The value of each parent node is always greater than
							its child nodes
						</li>
						<li>
							In a max Binary Heap the parent is greater than the
							children, but there are no guarantees between
							sibling nodes.
						</li>
						<li>
							A binary heap is as compact as possible. All the
							children of each node are as full as they can be and
							left children are filled out first
						</li>
					</ul>
					<p>Where are binary heaps used</p>
					<p>
						Binary Heaps are used to implement Priority Queues,
						which are very commonly used data structures
					</p>
				</Typography>
				<img
					src={process.env.PUBLIC_URL + "/binary_heap.png"}
					height="400px"
				></img>
				<br></br>
				<br></br>
				<iframe
					title="quick sort"
					style={{ width: "100%", height: "500px", scale: "0.5" }}
					src="https://visualgo.net/en/heap"
				></iframe>
				<Typography variant="h6" gutterBottom>
					Representing a heap
				</Typography>
				<img
					src={process.env.PUBLIC_URL + "/heap_representation.png"}
					height="400px"
				></img>
				<br></br>
				<img
					src={
						process.env.PUBLIC_URL +
						"/heap_representation_parent.png"
					}
					height="400px"
				></img>
				<br></br>
				<Typography variant="subtitle2" gutterBottom>
					<pre>{`

                
                  class MaxBinaryHeap {
                    constructor(){
                        this.values = []
                    }

                    insert(val){
                        this.values.push(element);

                    
                        this.bubbleUp();
                    }

                    bubbleUp(){

                        let index = this.values.length - 1;
                        let parentIndex = Math.floor(( index-1 )/2)

                        while( idx > 0){
                            var element = this.values[index];
                            let parent = this.values[parentIndex]
                            if( element <= parent ) break;
                            this.values[parentIndex] = element;
                            this.values[index] = parent;
                            index = parentIndex;
                        }

                    }

                    extractMax(){
                        const max = this.values[0];
                        const end = this.values.pop();
                        it(this.values.length > 0){
                            this.values[0] = end
                            this.sinkDown();
                        }

                        return max;
                    }

                    sinkDown(){
                        let idx = 0;
                        const length = this.values.length;
                        const element = this.values[0]
                        while(true){
                            let leftChildIdx = 2 * index + 1;
                            let rightChildIdx = 2 * index + 2;
                            let leftChild, rightChild;
                            let swap = null;

                            if(leftChildIdx < length){
                                leftChild = this.values[leftChildIdx];
                                if(leftChild > elelment)
                                swap = leftChildIdx;
                            }

                            if(rightChildIdx < length){
                                rightChild = this.values[rightChildIdx];
                                if((swap === null && rightChild > elelment) || (swap !== null && rightChild> leftChild))
                                swap = rightChildIdx;
                            }


                            if (swap === null) break;

                            this.values[idx] = this.values[swap]
                            this.values[swap] = elementj
                            idx = swap;
                        }
                    }

                    let heap = new MaxBinaryHeap();
                    heap.insert(55);
                }


                
                    `}</pre>
				</Typography>
				<Typography variant="h6" gutterBottom>
					Heap Insert Pseudocode
				</Typography>
				<Typography variant="subtitle2" gutterBottom>
					<ul>
						<li>
							Push the value into the values property on the heap
						</li>
						<li>Bubble the value up to its correct spot!</li>
					</ul>
					<strong>Detailed</strong>
					<ul>
						<li>
							{" "}
							Push the value into the values property on the heap
						</li>
						<li> Bubble Up:</li>
						<ul>
							<li>
								reate a variable called index which is the
								length of the values property - 1
							</li>
							<li>
								reate a variable called parentIndex which is the
								floor of (index-1)/2
							</li>
							<li>
								eep looping as long as the values element at the
								parentIndex is less than the values element at
								the child index
							</li>
						</ul>
						<ul>
							<li>
								wap the value of the values element at the
								parentIndex with the value of the element
								property at the child index
							</li>
							<li>
								et the index to be the parentIndex, and start
								over!
							</li>
						</ul>
					</ul>
				</Typography>
				<Typography variant="h6" gutterBottom>
					Heap ExtractMax Pseudocode
				</Typography>
				<Typography variant="subtitle2" gutterBottom>
					<ul>
						<li>Remove the root</li>
						<li>Replace with the most recently added</li>
						<li>Adjust (sink down)</li>
					</ul>
					<strong>Detailed</strong>
					<ul>
						<li>
							{" "}
							Swap the first value in the values property with the
							last one
						</li>
						<li>
							{" "}
							Pop from the values property, so you can return the
							value at the end.
						</li>
						<li>
							{" "}
							Have the new root "sink down" to the correct
							spot...​
						</li>
						<ul>
							<li> Your parent index starts at 0 (the root)</li>
							<li>
								{" "}
								Find the index of the left child: 2 * index + 1
								(make sure its not out of bounds)
							</li>
							<li>
								{" "}
								Find the index of the right child: 2*index + 2
								(make sure its not out of bounds)
							</li>
							<li>
								If the left or right child is greater than the
								element...swap. If both left and right children
								are larger, swap with the largest child.
							</li>
							<li>
								The child index you swapped to now becomes the
								new parent index.{" "}
							</li>
							<li>
								Keep looping and swapping until neither child is
								larger than the element.
							</li>
							<li> Return the old root!</li>
						</ul>
					</ul>
				</Typography>
				<Typography variant="h6" gutterBottom>
					WHAT IS A PRIORITY QUEUE?
				</Typography>
				<Typography variant="subtitle2" gutterBottom>
					<p>
						A data structure where each element has a priority.
						Elements with higher priorities are served before
						elements with lower priorities.
					</p>
				</Typography>
				<Typography variant="h6" gutterBottom>
					Representing a heap
				</Typography>
				<img
					src={process.env.PUBLIC_URL + "/heap_representation.png"}
					height="400px"
				></img>
				<br></br>
				<img
					src={
						process.env.PUBLIC_URL +
						"/heap_representation_parent.png"
					}
					height="400px"
				></img>
				<br></br>
				<Typography variant="subtitle2" gutterBottom>
					<pre>{`

                    class Node {
                        constructor(val, priority){
                            this.val = val
                            this.priority = priority

                        }
                    }

                  class PriorityQueue {
                    constructor(){
                        this.values = []
                    }

                    enqueque(val,priority){
                        var newNode = new Node(val, priority)
                        this.values.push(newNode);
                        this.bubbleUp();
                    }

                    bubbleUp(){

                        let index = this.values.length - 1;
                        let parentIndex = Math.floor(( index-1 )/2)

                        while( idx > 0){
                            var element = this.values[index];
                            let parent = this.values[parentIndex]
                            if( element.priority >= parent.priority ) break;
                            this.values[parentIndex] = element;
                            this.values[index] = parent;
                            index = parentIndex;
                        }

                    }

                    dequeque(){
                        const min = this.values[0];
                        const end = this.values.pop();
                        it(this.values.length > 0){
                            this.values[0] = end
                            this.sinkDown();
                        }

                        return max;
                    }

                    sinkDown(){
                        let idx = 0;
                        const length = this.values.length;
                        const element = this.values[0]
                        while(true){
                            let leftChildIdx = 2 * index + 1;
                            let rightChildIdx = 2 * index + 2;
                            let leftChild, rightChild;
                            let swap = null;

                            if(leftChildIdx < length){
                                leftChild = this.values[leftChildIdx];
                                if(leftChild.priority < element.priority)
                                swap = leftChildIdx;
                            }

                            if(rightChildIdx < length){
                                rightChild = this.values[rightChildIdx];
                                if((swap === null && rightChild < elelment) || (swap !== null && rightChild.priority < leftChild.priority))
                                swap = rightChildIdx;
                            }


                            if (swap === null) break;

                            this.values[idx] = this.values[swap]
                            this.values[swap] = elementj
                            idx = swap;
                        }
                    }

                    let heap = new PriorityQueue();
                    heap.enqueque(55,1);
                }


                
                    `}</pre>
				</Typography>
				<Typography variant="h6" gutterBottom>
					PRIORITY QUEUE Pseudocode
				</Typography>
				<Typography variant="subtitle2" gutterBottom>
					<ul>
						<li>
							Write a Min Binary Heap - lower number means higher
							priority.
						</li>
						<li>
							Each Node has a val and a priority. Use the priority
							to build the heap.
						</li>
						<li>
							Enqueue method accepts a value and priority, makes a
							new node, and puts it in the right spot based off of
							its priority.
						</li>
						<li>
							Dequeue method removes root element, returns it, and
							rearranges heap using priority.
						</li>
					</ul>
				</Typography>
				<Typography variant="subtitle2" gutterBottom>
					<strong>Big O of Binary Heaps</strong>
					<ul>
						<li>Insertion - O(logn)</li>
						<li>Removal - O(logn) </li>
						<li>Searching - O(N)</li>
						<li>Access - O(N)</li>
					</ul>
					<strong>Recap</strong>
					<ul>
						<li>
							Binary Heaps are very useful data structures for
							sorting, and implementing other data structures like
							priority queues
						</li>
						<li></li>
						<li>
							Binary Heaps are either MaxBinaryHeaps or
							MinBinaryHeaps with parents either being smaller or
							larger than their children
						</li>
						<li></li>
						<li>
							With just a little bit of math, we can represent
							heaps using arrays!
						</li>
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

export default BinaryHeaps;
