import { Box, Typography } from "@material-ui/core";
import React from "react";
import FunctionExcecution from "../common/FunctionExecution";

const InsertionSort: React.FC = () => {
	return (
		<>
			<Typography variant="h5" gutterBottom>
				Insertion Sort
			</Typography>
			<Box style={{ textAlign: "left" }}>
				<Typography variant="h6" gutterBottom>
					What is Insertion Sort?
				</Typography>
				<Typography variant="subtitle2" gutterBottom>
					Builds up the sort by gradually creating a larger left half
					which is always sorted.
					<br></br>[ 5, 3, 4, 1, 2]<br></br>[ 3, 5, 4, 1, 2]<br></br>[
					3, 4, 5, 1, 2]<br></br>[ 1, 3, 4 ,5, 2]<br></br>[ 1, 2, 3,
					4, 5]<br></br>
				</Typography>
				<iframe
					style={{ width: "100%", height: "500px", scale: "0.5" }}
					src="https://visualgo.net/en/sorting"
				></iframe>

				<Typography variant="subtitle2" gutterBottom>
					<strong>Selection Sort Pseudocode</strong>
					<ul>
						<li>
							Start by picking the second element in the array.
						</li>
						<li>
							Now compare the second element with the one before
							it and swap if necessary.
						</li>
						<li>
							Continue to the next element and if it is in the
							incorrent order, iterate through the sorted portion
							(i.e. the left side) to place the element in the
							correct place.
						</li>
					</ul>
				</Typography>
				<FunctionExcecution
					inputCount={1}
					defaultValues={["[10,40,50,20,60]"]}
				>
					{`
                    function insertionSort(arr){
                        for(var i = 1; i <  arr.length; i++){
                            var currentVal = arr[i];
                            for( var j = i - 1; j >= 0 && arr[j] > currentVal; j-- ){
                                arr[j+1] = arr[j]
                            }
                            arr[j+1] = currentVal;
                           
                        }
                        return arr
                    }
`}
				</FunctionExcecution>
				<br></br>
				<Typography variant="subtitle2" gutterBottom>
					<strong>Bubble Sort Complexity</strong>
					<ul>
						<li>normally O(n^2)</li>
						<li>almost sorted is good</li>
                        <li>because it keeps on side of the array sorted it is good for data stream</li>
					</ul>
				</Typography>
			</Box>
		</>
	);
};

export default InsertionSort;
