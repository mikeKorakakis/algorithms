import { Box, Typography } from "@material-ui/core";
import React from "react";

const SinglyLinkedLists: React.FC = () => {
	return (
		<>
			<Typography variant="h5" gutterBottom>
				Singly Linked Lists
			</Typography>
			<Box style={{ textAlign: "left" }}>
				<Typography variant="h6" gutterBottom>
					What is a doubly linked list?
				</Typography>
				<Typography variant="subtitle2" gutterBottom>
					<p>
						Almost identical to Singly Linked Lists, except every
						node has another pointer, to the previous node!
					</p>
					<p>Comparisons with Singly Linked Lists</p>
					<p>
						More memory === More Flexibility <br></br>
						It's almost always a tradeoff!
					</p>
				</Typography>
				<img
					src={process.env.PUBLIC_URL + "/doubly_list.png"}
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
					<strong>Doubly Linked List</strong>

					<pre>{`
                    class Node {
                        constructor(val){
                            this.val = val;
                            this.next = null;
                            this.prev = null;
                        }

                    }
                  

                    class DoublyLinkedList{
                        constructor(){
                            this.head = null;
                            this.tail = null;
                            this.length = 0;
                        }

                        push(val){
                            let newNode = new Node(val);
                            if(!this.head){
                                this.head = newNode;
                                this.tail = this.head;
                            }else{
                                this.tail.next = newNode;
                                newNode.prev = this.tail
                                this.tail = newNode;
                            }
                            this.length++
                            return this
                        }

                        pop(){
                            if(!this.tail) return undefined
                            var current = this.head;
                            var newTail = current;
                            while(current.next){
                                newTail = current;
                                current = current.next;
                            }
                            this.tail = newTail;
                            this.tail.next = null;                            
                            this.length--;
                            if (this.length === 0){
                                this.head = null
                                this.tail = null
                            }
                            return current;

                        }

                        shift(){
                            if (!this.head) return undefined
                            var currentHead = this.head;
                            this.head = currentHead.next; 
                            this.length--
                            return currentHead;
                        }

                        unshift(val){
                            var newNode = new Node(val)
                            if(!this.head){
                                this.head = newNode;
                                this.tail = newNode;
                            }else{
                                newNode.next = this.head;
                                this.head = newNode
                            }
                            this.length++
                            return this;
                        }

                        get(index){
                            if( index < 0 || index >= this.length){
                                return null
                            }

                            var current = this.head;
                            var counter = 0;
                            while(counter !== index){
                                current = current.next;
                                counter++;
                            }

                            return current
                        }

                        set(val, idx){
                            var foundNode = this.get(idx)
                            if(foundNode){
                                foundNode.val = val
                                return true;
                            }
                            return false
                        }

                        insert(val, index){
                            if(index < 0 || index > this.length) return false
                            if(index = this.length){
                                return !!this.push(val)
                            }
                            if(index = 0){
                                return !!this.unshift(val)
                            }
                            var newNode = new Node(val)
                            var previous = this.get(index-1)
                            var temp = previous.next
                            previous.next = newNode
                            newNode.next = temp
                            this.length++;
                            return true
                        }

                        remove(index){
                            if(index < 0 || index >= this.length) return undefined
                            if(index = this.length -1 )  return this.pop()
                            if(index = 0) return this.shift()

                            var previous = this.get(index-1)
                            var removed = previous.next
                            previous.next = removed.next
                            this.length--;
                            return removed;
                        }

                        reverse(){
                            var node = this.head
                            this.head = this.tail;
                            this.tail = tmp

                            var next;
                            var prev = null;
                          
                            for (var i = 0; i < this.length; i++)
                                next = node.next
                                node.next = prev
                                prev = node
                                node = next
                            }
                            return this;


                        }

                        traverse(){
                            var current = this.head;
                            while(current){
                                console.log(current.val);
                                current = current.next;
                            }
                        }
                    }

                    print(){
                        var arr = [];

                        var current = this head
                        while(current){
                            arr.push(current.val)
                            current = current.next
                        }
                        console.log(arr)
                    }

                    var list =  new SinglyLinkedList();
                    `}</pre>
				</Typography>
				<Typography variant="h6" gutterBottom>
					Doubly Linked List Push Pseudocode
				</Typography>
				<Typography variant="subtitle2" gutterBottom>
					<strong>
						Adding a node to the end of the Doubly Linked List{" "}
					</strong>
					<ul>
						<li>
							Create a new node with the value passed to the
							function
						</li>
						<li>
							If the head property is null set the head and tail
							to be the newly created node{" "}
						</li>
						<li>
							If not, set the next property on the tail to be that
							node
						</li>
						<li>
							Set the previous property on the newly created node
							to be the tail
						</li>
						<li>Set the tail to be the newly created node</li>
						<li>Increment the length</li>
						<li>Return the Doubly Linked List</li>
					</ul>
				</Typography>
				<Typography variant="h6" gutterBottom>
					Singly Linked List Pop Pseudocode
				</Typography>
				<Typography variant="subtitle2" gutterBottom>
					<strong>
						Removing a node from the end of the Linked List!
					</strong>
					<ul>
						<li>
							If there are no nodes in the list, return undefined
						</li>
						<li>Loop through the list until you reach the tail</li>
						<li>
							Set the next property of the 2nd to last node to be
							null
						</li>
						<li>Set the tail to be the 2nd to last node</li>
						<li>Decrement the length of the list by 1</li>
						<li>Return the value of the node removed</li>
					</ul>
				</Typography>
				<Typography variant="h6" gutterBottom>
					Singly Linked List Shift Pseudocode
				</Typography>
				<Typography variant="subtitle2" gutterBottom>
					<strong>
						Removing a new node from the beginning of the linked
						list
					</strong>
					<ul>
						<li>If there are no nodes return undefined</li>
						<li>Store the current head property in a variable</li>
						<li>
							Set the head property to be the current heads next
							property
						</li>
						<li>Decrement the length by 1</li>
						<li>Return the value of the node removed</li>
					</ul>
				</Typography>
				<Typography variant="h6" gutterBottom>
					Singly Linked List Unshift Pseudocode
				</Typography>
				<Typography variant="subtitle2" gutterBottom>
					<strong>
						Adding a new node to the beginning of the linked list
					</strong>
					<ul>
						<li>This function should accept a value</li>
						<li>
							Create a new node using the value passed to the
							function
						</li>
						<li>
							If there is no head property on the list, set the
							head and tail to be the newly created node
						</li>
						<li>
							Otherwise set the newly created node's next property
							to be the current head property on the list
						</li>
						<li>
							Set the head property on the list to be that newly
							created node
						</li>
					</ul>
				</Typography>
				<Typography variant="h6" gutterBottom>
					Singly Linked List Get Pseudocode
				</Typography>
				<Typography variant="subtitle2" gutterBottom>
					<strong>
						Retrieving a node by it's position in the linked list
					</strong>
					<ul>
						<li>This function should accept an index</li>
						<li>
							If the index is less than zero or grater than or
							equal to the length of the list, return null{" "}
						</li>
						<li>
							Loop through the list until you reach the index and
							return the node at that specific index
						</li>
					</ul>
				</Typography>
				<Typography variant="h6" gutterBottom>
					Singly Linked List Set Pseudocode
				</Typography>
				<Typography variant="subtitle2" gutterBottom>
					<strong>
						Changing the value of a node based on it's position in
						the Linked List
					</strong>
					<ul>
						<li>
							This function should accept a value and an index
						</li>
						<li>
							Use your get function to find the specific node.
						</li>
						<li>If the not is not found return false</li>
						<li>
							If the node is found, set the value of that node to
							be the value passed to the function and return value
						</li>
					</ul>
				</Typography>
				<Typography variant="h6" gutterBottom>
					Singly Linked List Insert Pseudocode
				</Typography>
				<Typography variant="subtitle2" gutterBottom>
					<ul>
						<li>
							If the index is less than zero or greater than the
							length, return false
						</li>
						<li>
							If the index is the same as the length, push a new
							node to the end of the list.
						</li>
						<li>
							If the index is 0, unshift a new node to the start
							of the list
						</li>
						<li>
							Otherwise, using the get method, access the node at
							the index -1
						</li>
						<li>
							Set the next property on that node to be the new
							node
						</li>
						<li>
							Set the next property on the new node to be the
							previous next
						</li>
						<li>Increment the length</li>
						<li>Return true</li>
					</ul>
				</Typography>
				<Typography variant="h6" gutterBottom>
					Singly Linked List Remove Pseudocode
				</Typography>
				<Typography variant="subtitle2" gutterBottom>
					<strong>
						Removing a node from Linked List at a specific position
					</strong>
					<ul>
						<li>
							If the index is less than zero or greater than the
							length, return undefined
						</li>
						<li>If the index is the same at the length-1, pop</li>
						<li>If the index is 0, shift</li>
						<li>
							Otherwise, using the get method, access the node at
							the index - 1
						</li>
						<li>
							Set the next property on that node to be the next of
							the next node
						</li>
						<li>Decrement the length</li>
						<li>Return the value of the node removed</li>
					</ul>
				</Typography>
				<Typography variant="h6" gutterBottom>
					Singly Linked List Reverse Pseudocode
				</Typography>
				<Typography variant="subtitle2" gutterBottom>
					<strong>Reversing the Linked List</strong>
					<ul>
						<li>Swap the head and tail</li>
						<li>Create a variable called next</li>
						<li>Create a variable called prev</li>
						<li>
							Create a variable called node and initialize it to
							the head property
						</li>
						<li>Loop through the list</li>
						<li>
							Set next to be the next property on whatever node is
						</li>
						<li>
							Set the next property on the node to be whatever
							prev is
						</li>
						<li>Set prev to be the value of the node variable</li>
						<li>
							Set the node variable to be the value of the next
							variable
						</li>
					</ul>
				</Typography>
				<Typography variant="subtitle2" gutterBottom>
					<strong>Big O of Singly Linked Lists</strong>
					<ul>
						<li>Insertion - O(1)</li>
						<li>Removal - It depends... O(1) or O(N)</li>
						<li>Searching - O(N)</li>
						<li>Access - O(N)</li>
					</ul>
					<strong>Recap</strong>
					<ul>
						<li>
							Singly Linked Lists are an excellent alternative to
							arrays when insertion and deletion at the beginning
							are frequently required
						</li>
						<li>
							Arrays contain a built in index whereas Linked Lists
							do not
						</li>
						<li>
							The idea of a list dat astructure that consists of
							nodes is the foundation of other data structures
							like Stacks and Queues
						</li>
					</ul>
				</Typography>
			</Box>
		</>
	);
};

export default SinglyLinkedLists;
