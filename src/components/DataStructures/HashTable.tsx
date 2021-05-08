import { Box, Typography } from "@material-ui/core";
import React from "react";

const HashTable: React.FC = () => {
	return (
		<>
			<Typography variant="h5" gutterBottom>
				Binary Heaps
			</Typography>
			<Box style={{ textAlign: "left" }}>
				<Typography variant="h6" gutterBottom>
					What is a Hash Table?
				</Typography>
				<Typography variant="subtitle2" gutterBottom>
					<p>Hash tables are used to store key-value pairs.</p>
					<p>They are like arrays, but the keys are not ordered.</p>
					<p>
						Unlike arrays, hash tables are fast for all of the
						following operations: finding values, adding new values,
						and removing values!
					</p>
					<p>Where are hash tables used</p>
					<p>
						Nearly every programming language has some sort of hash
						table data structure
					</p>
					<p>
						Because of their speed, hash tables are very commonly
						used!
					</p>
					<strong>The Hash Part</strong>
					<p>
						Hashing is the process of converting a given key into
						another value. A hash function is used to generate the
						new value according to a mathematical algorithm. ... A
						good hash function uses a one-way hashing algorithm, or
						in other words, the hash cannot be converted back into
						the original key.
					</p>
					<ul>
						<li>
							To implement a hash table, we'll be using an array.
						</li>
						<li>
							In order to look up values by key, we need a way to
							convert keys into valid array indices.
						</li>
						<li>
							A function that performs this task is called a hash
							function.
						</li>
					</ul>
					<p>WHAT MAKES A GOOD HASH?</p>
					<ul>
						<li>Fast (i.e. constant time)</li>
						<li>
							Doesn't cluster outputs at specific indices, but
							distributes uniformly
						</li>
						<li>Deterministic (same input yields same output)</li>
					</ul>
					<p>Prime Numbers</p>
					<ul>
						<li>
							The prime number in the hash is helpful in spreading
							out the keys more uniformly.
						</li>
						<li>
							It's also helpful if the array that you're putting
							values into has a prime length.
						</li>
						<li>
							You don't need to know why. (Math is complicated!)
							But here are some links if you're curious.
						</li>
					</ul>
					<p>Collisions</p>
					<p>
						With separate chaining, at each index in our array we
						store values using a more sophisticated data structure
						(e.g. an array or a linked list).<br></br>
						This allows us to store multiple key-value pairs at the
						same index.
					</p>
					<p>
						With linear probing, when we find a collision, we search
						through the array to find the next empty slot.<br></br>
						Unlike with separate chaining, this allows us to store a
						single key-value at each index
					</p>
					<p>example:</p>
					<pre>{`
                        _hash(key) {
                          let total = 0;
                          let WEIRD_PRIME = 31;
                          for (let i = 0; i < Math.min(key.length, 100); i++) {
                            let char = key[i];
                            let value = char.charCodeAt(0) - 96
                            total = (total * WEIRD_PRIME + value) % this.keyMap.length;
                          }
                          return total;
                        }
                      
                    `}</pre>
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
					Representing a Hash Table
				</Typography>
				<br></br>
				<Typography variant="subtitle2" gutterBottom>
					<pre>{`
                    class HashTable {
                        constructor(size=53){
                        this.keyMap = new Array(size);
                        }
                    
                        _hash(key) {
                        let total = 0;
                        let WEIRD_PRIME = 31;
                        for (let i = 0; i < Math.min(key.length, 100); i++) {
                            let char = key[i];
                            let value = char.charCodeAt(0) - 96
                            total = (total * WEIRD_PRIME + value) % this.keyMap.length;
                        }
                        return total;
                        }

                        set(key, value){
                            var index = this._hash(key)
                            if(!this.keyMap[index]){
                                this.keyMap[index] = []
                            }
                            this.keyMap[index]).push([key, value])
                        }

                        get(key){
                            let index = this._hash(key);
                            if(this.keyMap[index]){
                              for(let i = 0; i < this.keyMap[index].length; i++){
                                if(this.keyMap[index][i][0] === key) {
                                  return this.keyMap[index][i][1]
                                }
                              }
                            }
                            return undefined;
                          }

                          keys(){
                              var keysArr = []
                              for(let i = 0; i <= this.keyMap.length; i++)
                            {
                                if(this.keyMap[i]){
                                    for(let j = 0; j <= this.keyMap[i].length; j++){
                                        if(!keysArr.includes( valuesArr.push(this.keyMap[i][j][0])))
                                            keysArr.push(this.keyMap[i][j][0]);
                                    }
                            }
                            }
                            return keysArr;
                          }

                          values(){
                            var valuesArr = []
                            for(let i = 0; i <= this.keyMap.length; i++)
                          {
                              if(this.keyMap[i]){
                                  for(let j = 0; j <= this.keyMap[i].length; j++){
                                      if(!valuesArr.includes( valuesArr.push(this.keyMap[i][j][1])))
                                        valuesArr.push(this.keyMap[i][j][1]);
                                  }
                               }
                          }
                          return valuesArr;
                        }

                        let ht = new HashTable();
                        ht.set("hello world", "goodbye!!)
                    }
                
                    `}</pre>
				</Typography>
				<Typography variant="h6" gutterBottom>
					Hash Table Set/Get Pseudocode
				</Typography>
				<Typography variant="subtitle2" gutterBottom>
					<strong>Set</strong>
					<ul>
						<li>Accepts a key and a value</li>
						<li>Hashes the key</li>
						<li>
							Stores the key-value pair in the hash table array
							via separate chaining
						</li>
					</ul>
					<strong>Get</strong>
					<ul>
						<li>Accepts a key</li>
						<li>Hashes the key</li>
						<li>Retrieves the key-value pair in the hash table</li>
						<li>If the key isn't found, returns undefined</li>
					</ul>
				</Typography>
				<Typography variant="h6" gutterBottom>
					Hash Table Keys Values Pseudocode
				</Typography>
				<Typography variant="subtitle2" gutterBottom>
					<strong>keys</strong>
					<p>
						Loops through the hash table array and returns an array
						of keys in the table
					</p>
					<strong>values</strong>
					<p>
						Loops through the hash table array and returns an array
						of values in the table
					</p>
				</Typography>

				<Typography variant="subtitle2" gutterBottom>
					<strong>Big O of Hash Tables</strong>
					<ul>
						<li>Insertion - O(1)</li>
						<li>Deletion - O(1) </li>
						<li>Access - O(1)</li>
					</ul>
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

export default HashTable;
