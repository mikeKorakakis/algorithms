import { Box, Typography } from "@material-ui/core";
import React from "react";
import FunctionExcecution from "../common/FunctionExecution";

const SelectionSort: React.FC = () => {
	return (
		<>
			<Typography variant="h5" gutterBottom>
				Selection Sort
			</Typography>
			<Box style={{ textAlign: "left" }}>
				<Typography variant="h6" gutterBottom>
					What is Selection Sort?
				</Typography>
				<Typography variant="subtitle2" gutterBottom>
					Similar to bubble sort, but instead of first placing large
					values into sorted position, it places smaller values into
					sorted position<br></br>[ 5, 3, 4, 1, 2]<br></br>[ 1, 3, 4,
					5, 2]
				</Typography>
				<iframe
					style={{ width: "100%", height: "500px", scale: "0.5" }}
					src="https://visualgo.net/en/sorting"
				></iframe>

				<Typography variant="subtitle2" gutterBottom>
					<strong>Selection Sort Pseudocode</strong>
					<ul>
						<li>
							Store the first element as the smallest value you've
							seen so far.
						</li>
						<li>
							Compare this item to the next item in the array
							until you find a smaller number
						</li>
						<li>
							if a smaller number is found, designate that smaller
							numbe to be the new "minimum" and continue until the
							end of the array.
						</li>
						<li>
							If the "minimum" is not the value (index) you
							initially began with, swap the two values
						</li>
						<li>
							Repeat this with the next element until the array is
							sorted.
						</li>
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

export default SelectionSort;
