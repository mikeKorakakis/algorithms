import { Box, Typography } from "@material-ui/core";
import React from "react";
import FunctionExcecution from "../common/FunctionExecution";

const QuickSort: React.FC = () => {


	return (
		<>
			<Typography variant="h5" gutterBottom>
				Quick Sort
			</Typography>
			<Box style={{ textAlign: "left" }}>
				<Typography variant="h6" gutterBottom>
					What is Quick Sort?
				</Typography>
				<Typography variant="subtitle2" gutterBottom>
					<ul>
						<li>
							Like merge sort, exploits the fact that arrays of 0
							or 1 element are always sorted
						</li>
						<li>
							Works by selecting one element (called the "pivot")
							and finding the index where the pivot should end up
							in the sorted array
						</li>
						<li>
							Once the pivot is positioned appropriately, quick
							sort can be applied on either side of the pivot
						</li>
					</ul>
					<br></br>
					<strong>How does it work</strong>
					<br></br>

					<p>[ 5, 2, 1, 8, 4, 7, 6, 3 ]</p>
					<span>
						pick one element and sort other elements around it
					</span>
					<p>[ 3, 2, 1, 4, 5, 7, 6 ,8 ] picked 5</p>
					<span>Recursively repeat the process on both sides</span>
					<p>[ 1, 2, 3, 4, 5, 7, 6 ,8 ] picked 3</p>
					<p>[ 1, 2, 3, 4, 5, 6, 7, 8 ] picked 7</p>
				</Typography>

				<br></br>
				<iframe
					title="quick sort"
					style={{ width: "100%", height: "500px", scale: "0.5" }}
					src="https://visualgo.net/en/sorting"
				></iframe>

				<br></br>
				<Typography variant="subtitle2" gutterBottom>
					<strong>Pivot Helper </strong>
					<ul>
						<li>
							In order to implement merge sort, it's useful to
							first implement a function responsible for arranging
							elements in an array on either side of a pivot.
						</li>
						<li>
							Given an array, this helper function should
							designate an element as the pivot
						</li>
						<li>
							It should then rearange elements in the array so
							taht all values less than the Pivot are moved to the
							left of the pivot, and all values greater than the
							pivot are moved to the right of the pivot
						</li>
						<li>
							The order of elements on either side of the pivot
							doesn't matter!
						</li>
						<li>
							This helper should do this in place, that is, it
							should not create a new array
						</li>
						<li>
							When complete, the helper should return the index of
							the pivot
						</li>
					</ul>

					<strong>Picking a pivot</strong>
					<ul>
						<li>
							The runtime of quicksort depends in part on how one
							selects the pivot
						</li>
						<li>
							ideally, the pivot should be chosen so that it's
							roughly the median value in the data set you're
							sorting.
						</li>
						<li>
							For somplicity, we'll always choose the pivot to be
							the first element( we'll talk about consequences of
							this later)
						</li>
					</ul>

					<strong>Pivot Pseudocode</strong>
					<ul>
						<li>
							It will help to accept three arguments: an array, a
							start index, and an end index (these can default to
							0 and the array length minus 1, respectively)
						</li>
						<li>Grab the pivot from the start of the array</li>
						<li>
							Store the current pivot index in a variable (this
							will keep track of where the pivot should end up)
						</li>
						<li>
							Loop through the array from the start until the end
						</li>
						<ul>
							<li>
								If the pivot is greater than the current
								element, increment the pivot index variable and
								then swap the current element with the element
								at the pivot index
							</li>
						</ul>
						<li>
							Swap the starting element (i.e. the pivot) with the
							pivot index
						</li>
						<li>Return the pivot index</li>
					</ul>
					<p>let arr = [ 5, 2, 1, 8, 4, 7, 6, 3 ]</p>
					<p>pivot(arr); answer 4</p>
					<p>arr;</p>
					<p> [ 2, 1, 3, 4, 5, 7, 6, 8 ]</p>
				</Typography>
				<FunctionExcecution
					inputCount={1}
					defaultValues={["[5, 2, 1, 8, 4, 7, 6, 3]"]}
				>
					{`
                    function pivot(arr, start=0, end=arr.length+1){

                        function swap(array, i, j){
                            var temp = array[i];
                            array[i] = array[j]
                            array[j] = temp;
                        }

                        var swapIdx = start;
                        var pivot = arr[start]

                        for(var i = start + 1; i < arr.length; i++){
                            if(pivot > arr[i]){
                                swapIdx++;
                                swap(arr, swapIdx, i)
                            }
                        }
                        swap(arr, start, swapIdx)

                        return swapIdx
                    }
`}
				</FunctionExcecution>
				<br></br>
				<Typography variant="subtitle2" gutterBottom>
					<strong>Quick Sort Pseudocode </strong>
					<ul>
						<li>Call the pivot helper on the array</li>
						<li>
							When the helper returns to you the updated pivot
							index, recursively call the pivot helper on the
							subarray to the left of that index, and the subarray
							to the right of that index
						</li>
						<li>
							Your base case occurs when you consider a subarray
							with less than 2 elements
						</li>
					</ul>
				</Typography>
				<FunctionExcecution
					inputCount={1}
					defaultValues={["[7,5,6,9,4,3]"]}
				>
					{`
                    function quickSort(arr, left, right){
                        if(!left) left = 0
                        if(!right) right = arr.length-1
                           function pivot(array, start = 0, end = arr.length+1){

                            function swap(ar, i, j){
                                var temp = ar[i];
                                ar[i] = ar[j]
                                ar[j] = temp;
                            }
    
                            var swapIdx = start;
                            var pivot = arr[start]
    
                            for(var i = start + 1; i < array.length; i++){

                                if(pivot > array[i]){
                                    swapIdx++;
                                    swap(array, swapIdx, i)
                                }
                            }
                            swap(array, start, swapIdx)
                            return swapIdx
                        }
                        
                        if(left < right){
                        let pivotIndex = pivot(arr, left, right)
                        console.log(pivotIndex)
                        //left
                        arguments.callee(arr, left, pivotIndex - 1)

                        // //right
                        arguments.callee(arr, pivotIndex + 1, right)
                        }
                        return arr
                       

                    }

                    
`}
				</FunctionExcecution>

				<Typography variant="subtitle2" gutterBottom>
					<strong>Quick Sort Big O</strong>
					<ul>
						<li>Time Complexity (Best) O(n*log(n))</li>
						<li>Time Complexity (Average) O(n*log(n))</li>
						<li>Time Complexity (Worst) O(n^2)</li>
						<li>Space Complexity O(n)</li>
                        <li>Bad for almost sorted and picking first or last element 
                            because when picking minimum or maximum element 
                            you have O(n) decompositions and O(n) comparisons so the complexity is O(n^2)
                        </li>
					</ul>
				</Typography>
			</Box>
		</>
	);
};

export default QuickSort;
