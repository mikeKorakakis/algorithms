import { Box, Typography } from "@material-ui/core";
import React from "react";

const DoublyLinkedLists: React.FC = () => {
	return (
		<>
			<Typography variant="h5" gutterBottom>
				Doubly Linked Lists
			</Typography>
			<Box style={{ textAlign: "left" }}>
				<Typography variant="h6" gutterBottom>
					What is a linked list?
				</Typography>
				<Typography variant="subtitle2" gutterBottom>
					<p>
						A data structure that contains a head, tail and length
						property
					</p>
					<p>
						Linked Lists consist of nodes, and each node has a value
						and a pointer to another node or null
					</p>
				</Typography>
				<img
					src={process.env.PUBLIC_URL + "/singly_list.png"}
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
					<strong>Lists</strong>
					<ul>
						<li>Do not have indexes!</li>
						<li>Connected via nodes with a next pointer</li>
						<li>Random access is not allowed</li>
					</ul>

					<strong>Arrays</strong>
					<ul>
						<li>Indexed in order!</li>
						<li>Insertion and deletion can be expensive</li>
						<li>Can quickly be accessed at a specific index</li>
					</ul>

					<pre>{`
                    class Node {
                        constructor(val){
                            this.val = val;
                            this.next = null;
                            this.prev = null;
                        }

                    }
                    var first = new Node("Hi");
                    first.next = new Node("there");
                    first.next.next = new Node("how")
                    first.next.next.next = new Node("are")
                    first.next.next.next.next = new Node("you")

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
                                this.tail = newNode;
                            }
                            this.length++
                            return this
                        }

                        pop(){
                            if(!this.head) return undefined
                            var poppedNode = this.tail;
                            if(this.length === 1){
                                this.head = null;
                                this.tail = null;
                            }else{
                                this.tail = poppedNode.prev;
                                this.tail.next = null;
                                poppedNode.prev = null;
                            }

                            this.length--;
                            return prevTail;
                        }

                        shift(){
                            if (this.length === 0) return undefined;
                            var oldHead = this.head;
                            if(this.length === 1) {
                                this.head = null;
                                this.tail = null;
                            }else{
                                this.head = oldHead.next; 
                                this.head.prev = null;
                                oldHead.next = null;
                            }
                            this.length--
                            return oldHead;
                        }

                        unshift(val){
                            var newNode = new Node(val)
                            if(this.length === 0){
                                this.head = newNode;
                                this.tail = newNode;
                            }else{
                                this.head.prev = newNode
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
                            let current, counter;
                            if(index < this.length/2){
                                current = this.head;
                                counter = 0;
                                while(counter !== index){
                                    current = current.next;
                                    counter++;
                                }

                            }else{
                                current = this.tail;
                                counter = this.length - 1;
                                while(counter !== index){
                                    current = current.prev;
                                    counter--;
                                }
                            }

                            return current
                        }

                        set(val, idx){
                            var foundNode = this.get(idx)
                            if(foundNode != null){
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
                            var beforeNode = this.get(index-1)
                            var afterNode = previous.next

                            beforeNode.next = newNode
                            newNode.prev = beforeNode;
                            
                            newNode.next = afterNode
                            afterNode.prev = newNode

                            this.length++;
                            return true
                        }

                        remove(index){
                            if(index < 0 || index >= this.length) return undefined
                            if(index = this.length -1 )  return this.pop();
                            if(index = 0) return this.shift();

                            var removedNode = this.get(index);
                            var beforeNode = removedNode.prev;
                            var afterNode = removedNode.next;

                            beforeNode.next = afterNode;
                            afterNode.prev = beforeNode;
                            removedNode.prev = null;
                            removedNode.next = null;
                        
                            this.length--;
                            return removedNode;
                        }

                        reverse(){
                            var current = this.head
                            var head = this.head
                            var temp = null
                            while (current != null){
                                temp = current.prev;
                                current.prev = current.next;
                                current.next = temp
                                current = current.prev
                            }
                            if(temp !=null){
                                this.head = temp.prev
                            }
                            this.tail = head
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

                    var list =  new DoublyLinkedList();
                    `}</pre>
				</Typography>
				<Typography variant="h6" gutterBottom>
					Singly Linked List Push Pseudocode
				</Typography>
				<Typography variant="subtitle2" gutterBottom>
					<ul>
						<li>This function should accept a function</li>
						<li>
							Create a new node using the value passed to the
							function
						</li>
						<li>
							If there is no head property on the list, set the
							head and tail to be the newly created node
						</li>
						<li>
							Otherwise set the next property on the tail to be
							the new node and set the tail property on the list
							to be the newly created node
						</li>
						<li>Return list</li>
					</ul>
				</Typography>
				<Typography variant="h6" gutterBottom>
					Doubly Linked List Pop Pseudocode
				</Typography>
				<Typography variant="subtitle2" gutterBottom>
					<strong>
						Removing a node from the end of the Doubly Linked List
					</strong>
					<ul>
						<li>If there is no head, return undefined</li>
						<li>
							Store the current tail in a variable to return later
						</li>
						<li>
							If the length is 1, set the head and tail to be null
						</li>
						<li>Update the tail to be the previous Node.</li>
						<li>Set the newTail's next to null</li>
						<li>Decrement the length</li>
						<li>Return the value removed</li>
					</ul>
				</Typography>
				<Typography variant="h6" gutterBottom>
					Doubly Linked List Shift Pseudocode
				</Typography>
				<Typography variant="subtitle2" gutterBottom>
					<strong>
						Removing a node from the beginning of the Doubly Linked
						List
					</strong>
					<ul>
						<li>If length is 0, return undefined</li>
						<li>
							Store the current head property in a variable (we'll
							call it old head)
						</li>
						<li>If the length is one</li>
						<ul>
							<li>set the head to be null</li>
							<li>set the tail to be null</li>
						</ul>
						<li>Update the head to be the next of the old head</li>
						<li>Set the head's prev property to null</li>
						<li>Set the old head's next to null</li>
						<li>Decrement the length</li>
						<li>Return old head</li>
					</ul>
				</Typography>
				<Typography variant="h6" gutterBottom>
					Doubly Linked List Unshift Pseudocode
				</Typography>
				<Typography variant="subtitle2" gutterBottom>
					<strong>
						Adding a node to the beginning of the Doubly Linked List
					</strong>
					<ul>
						<li>
							Create a new node with the value passed to the
							function
						</li>
						<li>If the length is 0</li>
						<ul>
							<li>Set the head to be the new node</li>
							<li>Set the tail to be the new node</li>
						</ul>
						<li>Otherwise</li>
						<ul>
							<li>
								Set the prev property on the head of the list to
								be the new node
							</li>
							<li>
								Set the next property on the new node to be the
								head property{" "}
							</li>
							<li>Update the head to be the new node</li>
						</ul>
						<li>Increment the length</li>
						<li>Return the list</li>
					</ul>
				</Typography>
				<Typography variant="h6" gutterBottom>
					Doubly Linked List Get Pseudocode
				</Typography>
				<Typography variant="subtitle2" gutterBottom>
					<strong>
						Accessing a node in a Doubly Linked List by its position
					</strong>
					<ul>
						<li>
							If the index is less than 0 or greater or equal to
							the length, return null
						</li>
						<li>
							If the index is less than or equal to half the
							length of the list
						</li>
						<ul>
							<li>
								Loop through the list starting from the head and
								loop towards the middle
							</li>
							<li>Return the node once it is found</li>
						</ul>
						<li>
							If the index is greater than half the length of the
							list
						</li>
						<ul>
							<li>
								​Loop through the list starting from the tail
								and loop towards the middle
							</li>
							<li>Return the node once it is found</li>
						</ul>
					</ul>
				</Typography>
				<Typography variant="h6" gutterBottom>
					Doubly Linked List Set Pseudocode
				</Typography>
				<Typography variant="subtitle2" gutterBottom>
					<strong>
						Replacing the value of a node to the in a Doubly Linked
						List
					</strong>
					<ul>
						<li>
							Create a variable which is the result of the get
							method at the index passed to the function
						</li>
						<ul>
							<li>
								If the get method returns a valid node, set the
								value of that node to be the value passed to the
								function
							</li>
							<li>Return true</li>
						</ul>
						<li>Otherwise, return false</li>
					</ul>
				</Typography>
				<Typography variant="h6" gutterBottom>
					Doubly Linked List Insert Pseudocode
				</Typography>
				<Typography variant="subtitle2" gutterBottom>
					<strong>
						Adding a node in a Doubly Linked List by a certain
						position
					</strong>
					<ul>
						<li>
							If the index is less than zero or greater than or
							equal to the length return false
						</li>
						<li>If the index is 0, unshift</li>
						<li>If the index is the same as the length, push</li>
						<li>Use the get method to access the index -1</li>
						<li>
							Set the next and prev properties on the correct
							nodes to link everything together
						</li>
						<li>Increment the length </li>
						<li>Return true</li>
					</ul>
				</Typography>
				<Typography variant="h6" gutterBottom>
					Doubly Linked List Remove Pseudocode
				</Typography>
				<Typography variant="subtitle2" gutterBottom>
					<strong>
						Removing a node in a Doubly Linked List by a certain
						position
					</strong>
					<ul>
						<li>
							If the index is less than zero or greater than or
							equal to the length return undefined
						</li>
						<li>If the index is 0, shift</li>
						<li>If the index is the same as the length-1, pop</li>
						<li>
							Use the get method to retrieve the item to be
							removed
						</li>
						<li>
							Update the next and prev properties to remove the
							found node from the list
						</li>
						<li>Set next and prev to null on the found node</li>
						<li>Decrement the length</li>
						<li>Return the removed node.</li>
					</ul>
				</Typography>
				<Typography variant="h6" gutterBottom>
					Doubly Linked List Reverse Pseudocode
				</Typography>
				<Typography variant="subtitle2" gutterBottom>
					<strong>Reversing a Doubly Linked List in place!</strong>
					<ul>
						<li>
							Create a variable called current and set it to be
							the head of the list
						</li>
						<li>
							Create a variable called tail and set it to be the
							head of the list
						</li>
						<li>
							Loop through the list and set the next property of
							the current node to be the prev property of the
							current node
						</li>
						<li>
							If there is no next property, set the tail to be the
							head and the head to be the current variable
						</li>
						<li>Return the list</li>
					</ul>
				</Typography>
				<Typography variant="subtitle2" gutterBottom>
					<strong>Big O of Singly Linked Lists</strong>
					<ul>
						<li>Insertion - O(1)</li>
						<li>Removal - O(1) </li>
						<li>Searching - O(N)</li>
						<li>Access - O(N)</li>
					</ul>
					<p>Technically search is O(N/2), but that's still O(N)</p>
					<strong>Recap</strong>
					<ul>
						<li>
							Doubly Linked Lists are almost identical to Singly
							Linked Lists except there is an additional pointer
							to previous nodes
						</li>
						<li>
							Better than Singly Linked Lists for finding nodes
							and can be done in half the time!
						</li>
						<li>
							However, they do take up more memory considering the
							extra pointer
						</li>
					</ul>
				</Typography>
			</Box>
		</>
	);
};

export default DoublyLinkedLists;
