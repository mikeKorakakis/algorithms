import { Box, Typography } from "@material-ui/core";
import React from "react";

const BinarySearchTrees: React.FC = () => {
	return (
		<>
			<Typography variant="h5" gutterBottom>
				Binary Search Trees
			</Typography>
			<Box style={{ textAlign: "left" }}>
				<Typography variant="h6" gutterBottom>
					What is a tree?
				</Typography>
				<Typography variant="subtitle2" gutterBottom>
					<p>
						A data structure that consists of nodes in a parent /
						child relationship
					</p>
					<p>Lists - linear</p>
					<p>Trees - nonlinear</p>
					<p>TREE TERMINOLOGY</p>
					<ul>
						<li>Root - The top node in a tree.</li>
						<li>
							Child -A node directly connected to another node
							when moving away from the Root.
						</li>
						<li>Parent - The converse notion of a child.</li>
						<li>
							Siblings -A group of nodes with the same parent.
						</li>
						<li>Leaf - A node with no children.</li>
						<li>
							Edge - The connection between one node and another.
						</li>
					</ul>

					<p>KINDS OF TREES</p>
					<ul>
						<li>Trees</li>
						<li>Binary Trees</li>
						<li>Binary Search Trees</li>
					</ul>
					<p>Lots of different applications!</p>
					<ul>
						<li>HTML DOM</li>
						<li>Network Routing</li>
						<li>Abstract Syntax Tree</li>
						<li>Artificial Intelligence</li>
						<li>Folders in Operating Systems</li>
						<li>Computer File Systems</li>
						<li>JSON</li>
					</ul>
				</Typography>
				<img
					src={process.env.PUBLIC_URL + "/trees.png"}
					height="400px"
				></img>
				<br></br>
				<img
					src={process.env.PUBLIC_URL + "/singly_tree.png"}
					height="400px"
				></img>
				<br></br>
				<img
					src={process.env.PUBLIC_URL + "/no_tree.png"}
					height="400px"
				></img>
				<br></br>
				<br></br>
				<iframe
					title="quick sort"
					style={{ width: "100%", height: "500px", scale: "0.5" }}
					src="https://visualgo.net/en/bst"
				></iframe>
				<Typography variant="h6" gutterBottom>
					Binary Trees
				</Typography>
				<Typography variant="subtitle2" gutterBottom>
					<p>
						A binary tree is a tree data structure in which each
						node has at most two children, which are referred to as
						the left child and the right child.
					</p>
					<p></p>
					<ul>
						<li>Decision Trees (true / false)</li>
						<li>Database Indicies</li>
						<li>Sorting Algorithms</li>
					</ul>
				</Typography>
				<br></br>
				<img
					src={process.env.PUBLIC_URL + "/binary_tree.png"}
					height="400px"
				></img>
				<Typography variant="h6" gutterBottom>
					Binary Search Trees
				</Typography>
				<Typography variant="subtitle2" gutterBottom>
					<p>
						A binary search tree (BST), also called an ordered or
						sorted binary tree, is a rooted binary tree whose
						internal nodes each store a key greater than all the
						keys in the node's left subtree and less than those in
						its right subtree.
					</p>
					<p>HOW BSTS WORK</p>
					<ul>
						<li> Every parent node has at most two children</li>
						<li>
							Every node to the left of a parent node is always
							less than the parent
						</li>
						<li>
							Every node to the right of a parent node is always
							greater than the parent
						</li>
					</ul>
				</Typography>
				<br></br>
				<img
					src={process.env.PUBLIC_URL + "/binary_search_tree.png"}
					height="400px"
				></img>
				<Typography variant="subtitle2" gutterBottom>
					<pre>{`

                    class Node {
                        constructor(value){
                            this.value = value;
                            this.left = null;
                            this.right = null;
                        }
                    }
                    class BinarySearchTree {
                        constructor(){
                            this.root = null;
                        }

                        insert(val){
                            var newNode = new Node(val);

                            if( this.root == null ){ this.root = newNode}
                            else{
                                let current = this.root;
                                while(true){
                                    if(value === current.value) return undefined
                                    if(val > current.value){
                                            if(current.right === null){
                                                current.right = newNode;
                                                break;
                                            }else{
                                                current = current.right
                                            }                                    
                                    }else{
                                        
                                            if(current.left === null){
                                                current.left = newNode;
                                                break;
                                            }else{
                                                current = current.left
                                            }    
                                    }
                                }

                            }

                            return this;
                        }

                        find(val){
                            if( this.root == null ) return false
                            
                            let current = this.root;
                            let found = false;
                            while(current && !found){
                                if(value === current.value) return true
                                if(val > current.value){                                       
                                    current = current.right
                                }else if(current.left === val){
                                    current = current.left
                                }else{
                                    found = true
                                }    
                                
                            }
                            if(!found) return undefined;
                            return current
                        }

                        bfs(){
                            let data = []
                            let queue = []
                            let node = this.root

                            queue.push(node);

                            while(queue.length > 0){
                                node = queue.shift()
                                data.push(node);
                                if (node.left) queue.push(node.left)
                                if (node.right) queue.push(node.right)
                            }
                            return data;
                        }

                        dfs_preorder(){
                            let data = [];
                            let current = this.root;

                            traverse(node){
                                data.push(node)

                                if(node.left) traverse(node.left)
                                if(node.right) traverse(node.right)
                            }

                            helper(current)

                            return data;
                        
                        }

                        dfs_postorder(){
                            let data = [];
                            let current = this.root;

                            traverse(node){
                                
                                if(node.left) traverse(node.left)
                                if(node.right) traverse(node.right)
                                data.push(node)
                            }

                            helper(current)

                            return data;
                        
                        }

                        dfs_inorder(){
                            let data = [];
                            let current = this.root;

                            traverse(node){
                                
                                if(node.left) traverse(node.left)
                                data.push(node)
                                if(node.right) traverse(node.right)
                            }

                            helper(current)

                            return data;
                        
                        }

                        

                    }

                    var tree = new BinarySearchTree();
                    tree.root = new Node();
                    tree.root.right = new Node(15)
                    tree.root.left = new Node(7)
                    tree.root.left.right = new Node(9)
                
                    `}</pre>
				</Typography>
				<Typography variant="h6" gutterBottom>
					Inserting a Node
				</Typography>
				<Typography variant="subtitle2" gutterBottom>
					<strong>Steps - Iteratively or Recursively</strong>
					<ul>
						<li> Create a new node</li>
						<li> Starting at the root</li>
						<li>
							Check if there is a root, if not - the root now
							becomes that new node!
						</li>
						<li>
							If there is a root, check if the value of the new
							node is greater than or less than the value of the
							root
						</li>
						<li>If it is greater </li>
						<li>Check to see if there is a node to the right</li>
						<li>
							If there is, move to that node and repeat these
							steps
						</li>
						<li>
							If there is not, add that node as the right property
						</li>
						<li>If it is less</li>
						<li>Check to see if there is a node to the left</li>
						<li>
							If there is, move to that node and repeat these
							steps
						</li>
						<li>
							If there is not, add that node as the left property
						</li>
					</ul>
				</Typography>
				<Typography variant="h6" gutterBottom>
					Finding a Node in a BST
				</Typography>
				<Typography variant="subtitle2" gutterBottom>
					<strong>Remove a value from the top of the stack!</strong>
					<ul>
						<li>Starting at the root </li>
						<ul>
							<li>
								Check if there is a root, if not - we're done
								searching!
							</li>
							<li>
								If there is a root, check if the value of the
								new node is the value we are looking for. If we
								found it, we're done!
							</li>
							<li>
								If not, check to see if the value is greater
								than or less than the value of the root
							</li>
							<li>If it is greater </li>
							<ul>
								<li>
									Check to see if there is a node to the right
								</li>
								<ul>
									<li>
										If there is, move to that node and
										repeat these steps
									</li>
									<li>
										If there is not, we're done searching!
									</li>
								</ul>
							</ul>

							<li>If it is less</li>
							<ul>
								<li>
									Check to see if there is a node to the left{" "}
								</li>
								<ul>
									<li>
										If there is, move to that node and
										repeat these steps
									</li>
									<li>
										If there is not, we're done searching!
									</li>
								</ul>
							</ul>
						</ul>
					</ul>
				</Typography>

				<Typography variant="subtitle2" gutterBottom>
					<strong>Big O of BST</strong>
					<ul>
						<li>Insertion - O(logn)</li>
						<li>Searching - O(logn)</li>
					</ul>
					<p>
						NOT guaranteed! e.g if the bst is linear like a linked
						list
					</p>
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
				<br></br>
				<img
					src={process.env.PUBLIC_URL + "/steps_bst.png"}
					height="400px"
				></img>
				<br></br>
				<Typography variant="h6" gutterBottom>
					TRAVERSING A TREE
				</Typography>
				<Typography variant="subtitle2" gutterBottom>
					<p>Two ways:</p>
					<ul>
						<li>Breadth-first Search</li>
						<li>Depth-first Search</li>
					</ul>
				</Typography>

				<br></br>
				<Typography variant="h6" gutterBottom>
					BREADTH FIRST SEARCH
				</Typography>
				<Typography variant="subtitle2" gutterBottom>
					<ul>
						<li>
							Create a queue (this can be an array) and a variable
							to store the values of nodes visited
						</li>
						<li>Place the root node in the queue</li>
						<li>Loop as long as there is anything in the queue</li>
						<ul>
							<li>
								Dequeue a node from the queue and push the value
								of the node into the variable that stores the
								nodes
							</li>
							<li>
								If there is a left property on the node dequeued
								- add it to the queue
							</li>
							<li>
								If there is a right property on the node
								dequeued - add it to the queue
							</li>
						</ul>
						<li>Return the variable that stores the values</li>
					</ul>
				</Typography>
				<br></br>
				<img
					src={process.env.PUBLIC_URL + "/bfs.png"}
					height="400px"
				></img>
				<br></br>
				<Typography variant="h6" gutterBottom>
					DFS - InOrder
				</Typography>
				<Typography variant="subtitle2" gutterBottom>
					<p>Steps - Recursively</p>
					<ul>
						<li>
							Create a variable to store the values of nodes
							visited
						</li>
						<li>
							Store the root of the BST in a variable called
							current
						</li>
						<li>Write a helper function which accepts a node</li>
						<ul>
							<li>
								If the node has a left property, call the helper
								function with the left property on the node
							</li>
							<li>
								Push the value of the node to the variable that
								stores the values
							</li>
							<li>
								If the node has a right property, call the
								helper function with the right property on the
								node
							</li>
						</ul>
						<li>
							Invoke the helper function with the current variable
						</li>
						<li>Return the array of values</li>
					</ul>
				</Typography>
				<br></br>
				<img
					src={process.env.PUBLIC_URL + "/dfs_inorder.png"}
					height="400px"
				></img>
				<br></br>
				<Typography variant="h6" gutterBottom>
					DFS - PostOrder
				</Typography>
				<Typography variant="subtitle2" gutterBottom>
					<p>Steps - Recursively</p>
					<ul>
						<li>
							Create a variable to store the values of nodes
							visited
						</li>
						<li>
							Store the root of the BST in a variable called
							current
						</li>
						<li>Write a helper function which accepts a node</li>
						<ul>
							<li>
								If the node has a left property, call the helper
								function with the left property on the node
							</li>
							<li>
								If the node has a right property, call the
								helper function with the right property on the
								node
							</li>
							<li>
								Push the value of the node to the variable that
								stores the values
							</li>
							<li>
								Invoke the helper function with the current
								variable
							</li>
						</ul>
						<li>Return the array of values</li>
					</ul>
				</Typography>
				<br></br>
				<img
					src={process.env.PUBLIC_URL + "/dfs_postorder.png"}
					height="400px"
				></img>
				<br></br>
				<Typography variant="h6" gutterBottom>
					DFS - InOrder
				</Typography>
				<Typography variant="subtitle2" gutterBottom>
					<p>Steps - Recursively</p>
					<ul>
						<li>
							Create a variable to store the values of nodes
							visited
						</li>
						<li>
							Store the root of the BST in a variable called
							current
						</li>
						<li>Write a helper function which accepts a node</li>
						<ul>
							<li>
								If the node has a left property, call the helper
								function with the left property on the node
							</li>
							<li>
								If the node has a right property, call the
								helper function with the right property on the
								node
							</li>
							<li>
								Invoke the helper function with the current
								variable
							</li>
							<li>
								Push the value of the node to the variable that
								stores the values
							</li>
						</ul>
						<li>Return the array of values</li>
					</ul>
				</Typography>
				<br></br>
				<img
					src={process.env.PUBLIC_URL + "/dfs_inorder.png"}
					height="400px"
				></img>
				<br></br>
				<Typography variant="h6" gutterBottom>
					BFS? DFS? Which is better?
				</Typography>
				<br></br>
				<img
					src={process.env.PUBLIC_URL + "/breadth_lots.png"}
					height="400px"
				></img>
				<br></br>
				<img
					src={process.env.PUBLIC_URL + "/depth_fewer.png"}
					height="400px"
				></img>
				<br></br>
				<img
					src={process.env.PUBLIC_URL + "/breadth_fewer.png"}
					height="400px"
				></img>
				<br></br>
				<Typography variant="h6" gutterBottom>
					DFS Comparison
				</Typography>
				<br></br>
				<img
					src={process.env.PUBLIC_URL + "/dfs_comp_inorder.png"}
					height="400px"
				></img>
				<br></br>
				<img
					src={process.env.PUBLIC_URL + "/dfs_comp_preorder.png"}
					height="400px"
				></img>
				<br></br>
				<img
					src={process.env.PUBLIC_URL + "/breadth_fewer.png"}
					height="400px"
				></img>
				<br></br>
				<Typography variant="h6" gutterBottom>
					Recap
				</Typography>
				<Typography variant="subtitle2" gutterBottom>
					<ul>
						<li>
							Trees are non-linear data structures that contain a
							root and child nodes
						</li>
						<li>
							Binary Trees can have values of any type, but at
							most two children for each parent
						</li>
						<li>
							Binary Search Trees are a more specific version of
							binary trees where every node to the left of a
							parent is less than it's value and every node to the
							right is greater
						</li>
					</ul>
				</Typography>
			</Box>
		</>
	);
};

export default BinarySearchTrees;
