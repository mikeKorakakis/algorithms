import { Box, Typography } from "@material-ui/core";
import React from "react";
import FunctionExcecution from "../common/FunctionExecution";

const MergeSort: React.FC = () => {
	return (
		<>
			<Typography variant="h5" gutterBottom>
				Merge Sort
			</Typography>
			<Box style={{ textAlign: "left" }}>
				<Typography variant="h6" gutterBottom>
					What is Merge Sort?
				</Typography>
				<Typography variant="subtitle2" gutterBottom>
					<ul>
						<li>
							It's a combination of two things - merging and
							sorting
						</li>
						<li>
							Exploits the fact that arrays of 0 or 1 element are
							always sorted
						</li>
						<li>
							Works by decomposing an array into smaller arrays of
							0 or 1 elements, then building up a newly sorted
							array.
						</li>
					</ul>
					<br></br>
					<strong>How does it work</strong>
					<br></br>
					<span>Start by spliting the arrays</span>
					<br></br>[ 8, 3, 5, 4, 7, 6, 1, 2 ]<br></br>[ 8, 3, 5, 4 ] [
					7, 6, 1, 2 ]<br></br>[ 8, 3 ] [ 5, 4 ] [ 7, 6 ] [ 1, 2 ]
					<br></br>[ 8 ] [ 3 ] [5 ] [ 4 ] [ 7 ] [ 6 ] [ 1 ] [ 2 ]
					<br></br>
					<span>Then we merge</span>
					<br></br>[ 3, 8 ] [ 4, 5 ] [ 6, 7 ] [ 1, 2 ]<br></br>[ 3, 4,
					5, 8 ] [ 1, 2, 6, 7 ]<br></br>[ 1, 2, 3, 4, 5, 6, 7, 8 ]
				</Typography>
                <br></br>
				<iframe
                    title="merge sort"
					style={{ width: "100%", height: "500px", scale: "0.5" }}
					src="https://visualgo.net/en/sorting"
				></iframe>
				<br></br>
				<Typography variant="subtitle2" gutterBottom>
					<strong>Merging Arrays </strong>
					<ul>
						<li>
							In order to implement merge sort, it's useful to
							first implement a function responsible for merging
							two sorted arrays
						</li>
						<li>
							Given two arrays which are sorted, this helper
							function should create a new array which is also
							sorted, and consists of all of the elements in the
							two input arrays
						</li>
						<li>
							This function should run in O(n+m) time and O(n+m)
							space and should not modify the parameters passed to
							it.
						</li>
					</ul>

					<strong>Merging Arrays Pseudocode</strong>
					<ul>
						<li>
							Create and empty array, take a look at the smallest
							values in each input array
						</li>
						<li>
							while there are still values we haven't looked at
						</li>
						<ul>
							<li>
								If the value in the first array is smaller than
								the value in the second array, push the value in
								the first array into our results and move on to
								the next value in the first array
							</li>
							<li>
								If the value in the first array is larger than
								the value in the second array, push the value in
								the second array into our results and move on
								the next value in the second array
							</li>
						</ul>
					</ul>
				</Typography>
				<FunctionExcecution
					inputCount={2}
					defaultValues={["[1,3,5]", "[2,4,6]"]}
				>
					{`
                    function mergeArrays(arr1, arr2){
                        var i = 0;
                        var j = 0;
                        var arr = [];
                        while ( i < arr1.length &&  j < arr2.length){
                            if( arr1[i] < arr2[j]){
                                arr.push(arr1[i])
                                i++;
                            }else{
                                arr.push(arr2[j])
                                j++;
                            }
                        }

                        while(i < arr1.length){
                            arr.push(arr1[i])
                            i++
                        }

                        while(j < arr2.length){
                            arr.push(arr2[j])
                            j++
                        }

                        return arr
                    }
`}
				</FunctionExcecution>
				<Typography variant="subtitle2" gutterBottom>
					<strong>Merge Sort Pseudocode </strong>
					<ul>
						<li>
							Break up the array into halves until you have arrays
							that are empty or have one element.
						</li>
						<li>
							Once you have smaller sorted arrays, merge those
							arrays with other sorted arrays until you are back at the full
                            length of the array.
						</li>
                        <li>Once the array has been merged back together, return the merged (and sorted!) array.</li>
					</ul>
				</Typography>
                <FunctionExcecution
					inputCount={1}
					defaultValues={["[1,7,5,6,9,4,3]"]}
				>
					{`
                    function mergeSort(arr){
                            function mergeArrays(arr1, arr2){
                                var i = 0;
                                var j = 0;
                                var result = [];
                                while ( i < arr1.length &&  j < arr2.length){
                                    if( arr1[i] < arr2[j]){
                                        result.push(arr1[i])
                                        i++;
                                    }else{
                                        result.push(arr2[j])
                                        j++;
                                    }
                                }

                                while(i < arr1.length){
                                    result.push(arr1[i])
                                    i++
                                }

                                while(j < arr2.length){
                                    result.push(arr2[j])
                                    j++
                                }

                                return result
                            }
                        

                        var res = []
                        if (arr.length <=1) return arr
                       let mid = Math.floor(arr.length/2)
                       let left = arguments.callee(arr.slice(0, mid));
                       let right = arguments.callee(arr.slice(mid));

                       return mergeArrays(left, right)
                       

                        }

                    
`}
				</FunctionExcecution>

			

				<Typography variant="subtitle2" gutterBottom>
					<strong>Merge Sort Big O</strong>
					<ul>
						<li>Time Complexity (Best) O(n*log(n))</li>
						<li>Time Complexity (Average) O(n*log(n))</li>
						<li>Time Complexity (Worst) O(n*log(n))</li>
						<li>Space Complexity O(n)</li>
					</ul>
				</Typography>
			</Box>
		</>
	);
};

export default MergeSort;
