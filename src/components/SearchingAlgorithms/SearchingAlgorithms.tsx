import { Box, Typography } from "@material-ui/core";
import React from "react";
import FunctionExcecution from "../common/FunctionExecution";

const SearchingAlgorithms: React.FC = () => {
	return (
		<>
			<Typography variant="h5" gutterBottom>
				Searching Algorithms
			</Typography>
			<Box style={{ textAlign: "left" }}>
				<Typography variant="h6" gutterBottom>
					Objectives
				</Typography>
				<Typography variant="h6" gutterBottom>
					<ul>
						<li>What is a searching Algorithm</li>
						<li>Linear Search on arrays</li>
						<li>Binary Search on sorted Arrays</li>
						<li>Naive string searching algorithm</li>
						<li>KP string searching algorithm</li>
					</ul>
				</Typography>
				<Typography variant="h6" gutterBottom>
					How do we search
				</Typography>
				<Typography variant="subtitle2" gutterBottom>
					Given an array, the simplest way to search for a value is to
					look at every element in the array and if it's the value we
					want.
				</Typography>
				<Typography variant="h6" gutterBottom>
					Javascript has search!
				</Typography>
				<Typography variant="subtitle2" gutterBottom>
					There are many dirrerent search methods on arrays in
					Javascript:
					<ul>
						<li>indexOf</li>
						<li>includes</li>
						<li>find</li>
						<li>findIndex</li>
					</ul>
				</Typography>
				<Typography variant="subtitle2" gutterBottom>
					<p> Linear Search Pseudocode</p>
					<ul>
						<li>
							Write a function which accepts an array and a value
						</li>
						<li>
							Loop through the array and check if the current
							array element is equal to the value.
						</li>
						<li>
							If it is, return the index at which the element is
							found
						</li>
					</ul>

					<p>
						Write a function called <strong>linearSearch</strong>{" "}
						which accepts an array and a value, and returns the
						index at which the value exists. If the value does not
						exist in the array, return -1.
					</p>

					<p>Don't use indexOf to implement this function!</p>
					<p>Examples:</p>
					<p>linearSearch([10, 15,20,25,30], 15) answer: 1</p>
				</Typography>
				<br></br>

				<FunctionExcecution
					inputCount={2}
					defaultValues={["[10, 15,20,25,30]", 15]}
				>
					{`function linearSearch(arr,val){                       

                       for(var i = 0; i < arr.length; i++){
                           if(arr[i] === val){
                               return i
                           }
                       }

                       return  -1
                    }
`}
				</FunctionExcecution>
				<Typography variant="subtitle2" gutterBottom>
					<p> Linear Search Big O</p>
					<ul>
						<li>Best O(1) </li>
						<li>Average O(n)</li>
						<li>Worst O(n)</li>
					</ul>
				</Typography>
				<Typography variant="h6" gutterBottom>
					Binary Search
				</Typography>
				<Typography variant="subtitle2" gutterBottom>
					<ul>
						<li>Binary search is a much faster form of search</li>
						<li>
							Rather than eliminate one element at a time, you can
							eliminate half of the remaining elements at a time.
						</li>
						<li>Binary search only works on sorted arrays!</li>
					</ul>
				</Typography>
				<Typography variant="subtitle2" gutterBottom>
					<strong>Devide and Conquer</strong>
					<p>Let's search for 15:</p>
					[1,3,4,6,8,9,11,12,15,16,17,18,19]
					<ul>
						<li>
							{" "}
							[1 (Left),3,4,6,8,9,11 (too small),12,15,16,17,18,19
							(Right)]
						</li>
						<li>
							{" "}
							[1,3,4,6,8,9,11,12 (Left),15,16,17 (too Big),18,19
							(Right)]
						</li>
						<li>
							{" "}
							[1,3,4,6,8,9,11,12 (Left),15 (15!),16
							(Right),17,18,19]
						</li>
					</ul>
				</Typography>
				<Typography variant="subtitle2" gutterBottom>
					<strong>Binary Search Pseudocode</strong>
					<ul>
						<li>
							This function accepts a sorted array and a value
						</li>
						<li>
							Create a left pointer at the start of the array, and
							a right pointer at the end of the array
						</li>
						<li>
							While the left pinter comes before the right
							pointer:
						</li>
						<ul>
							<li>Create a pointer in the middle</li>
							<li>
								If you find the value you want, return the index
							</li>
							<li>
								If the value is too small, move the left pointer
								up
							</li>
							<li>
								If the value is too large, move the right
								pointer down
							</li>
						</ul>
						<li>If you never find the value, return -1</li>
					</ul>
				</Typography>
				<Typography variant="subtitle2" gutterBottom>
					<p>
						Write a function called <strong>binarySearch</strong>{" "}
						which accepts a <strong>sorted</strong> array and a
						value and returns the index at which the value exists.
						Otherwise, return -1.{" "}
					</p>

					<p>
						This algorithm should be more efficient than
						linearSearch - you can read how to implement it here -
						https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search
						and here -
						https://www.topcoder.com/community/data-science/data-science-tutorials/binary-search/
					</p>

					<p>
						<strong>Examples:</strong>
					</p>

					<p>binarySearch([1,2,3,4,5], 2) answer: 1</p>
				</Typography>
				<FunctionExcecution
					inputCount={2}
					defaultValues={["[1,2,3,4,5]", 2]}
				>
					{`
                    function binarySearch(arr,val){                       
                       var left = 0;
                       var right = arr.length - 1;
                       var pointer = Math.floor((left + right)/2)

                       while(pointer !== left ){
                           if(arr[pointer] === val) return pointer;
                           if(arr[left] === val) return left;
                           if(arr[right] === val) return right;
                           (arr[pointer] > val) ? right = pointer : left = pointer
                           pointer = Math.floor((left + right)/2)
                       }

                       return  -1
                    }
`}
				</FunctionExcecution>
                <br></br>
				<FunctionExcecution
					inputCount={2}
					defaultValues={["[1,2,3,4,5]", 2]}
				>
					{`
                    function binarySearch(arr, elem){                       
                       var start = 0;
                       var end = arr.length - 1;
                       var middle = Math.floor((start + end)/2)
                       
                       while( arr[middle] !== elem && start <= end ){
                           if(elem < arr[middle]){
                               end = middle -1;
                           }else{
                               start = middle + 1;
                           }
                           middle =Math.floor((start + end)/2)
                       }

                       if(arr[middle] === elem){
                           return middle
                       }
                       return -1;
                    }
`}
				</FunctionExcecution>
                <Typography variant="subtitle2" gutterBottom>
					<p> Binary Search Big O</p>
					<ul>
						<li>Best O(1) </li>
						<li>Worst and average O(log(n))</li>
					</ul>
				</Typography>
                <Typography variant="h6" gutterBottom>
					Naive String Search
				</Typography>
				<Typography variant="subtitle2" gutterBottom>
					<ul>
						<li>Suppose you want to count the number of times a smaller string appears in longer string</li>
					</ul>
                    <p>Pseudocode</p>
                    <ul>
                        <li>Loop over the longer string</li>
                        <li>Loop over the shorter string</li>
                        <li>If the characters don't match, break out of the inner loop</li>
                        <li>If you complete the inner loop and find a match, increment th ocunt of matches</li>
                        <li>Return the count</li>
                    </ul>
				</Typography>
                <FunctionExcecution
					inputCount={2}
					defaultValues={["lorie loled", "lol"]}
				>
					{`
                    function naiveSearch(long, short){   
                        let count = 0;
                        for(var i =0; i< long.length; i ++){
                            for(var j = 0; j < short.length; j++){
                                if(short[j] !== long[i+j]){
                                    break;
                                }
                                if(j === short.length -1 ){
                                    count++;
                                }
                            }
                        }
                    }
`}
				</FunctionExcecution>
			</Box>
		</>
	);
};

export default SearchingAlgorithms;
