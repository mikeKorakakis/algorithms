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
					inputCount={1}
					defaultValues={["[10,15,40,20,35]"]}
				>
					{`
                    function selectionSort(arr){
                        for(var i = 0 ; i <  arr.length; i++){
                            var min = i
                            for( var j = i; j < arr.length; j++ ){
                             
                                if(arr[j] < arr[min]){

                                    min = j
                                    noSwaps = false;
                                  
                                }
                            }
                            if( i !== min){
                            var temp = arr[min]
                            arr[min] = arr[i]
                            arr[i] = temp;
                            }
                        }
                        return arr
                    }
`}
				</FunctionExcecution>
				<br></br>
				<iframe
					style={{ width: "100%", height: "500px", scale: "0.5" }}
					src="https://visualgo.net/en/sorting"
				></iframe>

				<Typography variant="subtitle2" gutterBottom>
					<strong>Bubble Sort Complexity</strong>
					<ul>
						<li>normally O(n^2)</li>
						<li>good if you don't want many swaps</li>
					</ul>
				</Typography>
			</Box>
		</>
	);
};

export default MergeSort;
