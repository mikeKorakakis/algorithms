import { Box, Typography } from "@material-ui/core";
import React from "react";
import FunctionExcecution from "../common/FunctionExecution";

const BubbleSort: React.FC = () => {
	return (
		<>
			<Typography variant="h5" gutterBottom>
				Sorting
			</Typography>
			<Box style={{ textAlign: "left" }}>
				<Typography variant="h6" gutterBottom>
					What is sorting?
				</Typography>
				<Typography variant="subtitle2" gutterBottom>
					Sorting is the process of rearranging the items in a
					collection (e.g. an array) so that the items are in some
					kind of order.
					<strong>Examples</strong>
					<ul>
						<li>Sorting numbers from smallest to largest</li>
						<li>Sorting names alphabetically</li>
						<li>Sorting movies based on release year</li>
					</ul>
					<strong>Why it is important</strong>
					<ul>
						<li>
							Sorting is an incredibly common tast, so it' s good
							to know how it works.
						</li>
						<li>
							There are many different ways to sort things, and
							different techniques have their own advantages and
							disadvantages.
						</li>
					</ul>
					<strong>Objecties</strong>
					<ul>
						<li>Implement bubble sort</li>
						<li>Implement selection sort</li>
						<li>Implement insertion sort</li>
						<li>
							Undestand why it is important to learn these simpler
							sorting algorigthms
						</li>
					</ul>
				</Typography>
				<Typography variant="h6" gutterBottom>
					Javascript has a sort method...
				</Typography>
				<Typography variant="subtitle2" gutterBottom>
					Yes, it does!<br></br>
					...but it doesn't always work the way you expect.<br></br>
					[6,4,15,10].sort();<br></br>
					[10,15,4,6]<br></br>
					<br></br>
					<strong>Telling javascript how to sort</strong>
					<ul>
						<li>
							The build-in sort method accepts an optional
							comparator funciton
						</li>
						<li>
							You can use this comparator function to tell
							javascript how you want it to sort
						</li>
						<li>
							The comparator looks at pairs of elements (a and b),
							determines their sort order based on the return
							value
						</li>
						<ul>
							<li>
								If it returns a negative number, a should come
								before b
							</li>
							<li>
								If it returns a positive number, a should come
								after b,
							</li>
							<li>
								If it returns 0, a and b a are the same as far
								as the sort is concerned
							</li>
						</ul>
					</ul>
					<br></br>
					<strong>Examples</strong>
					<pre>{`
                    function numberCompare(num1, num2){
                        return num1 - num2;
                    }

                    [ 6, 4, 15, 10].sort(numberCompare)
                    //[4,6,10,15]
                    `}</pre>
				</Typography>
				<Typography variant="h6" gutterBottom>
					Buble Sort
				</Typography>
				<Typography variant="subtitle2" gutterBottom>
					A sorting algorithm where the largest values bubble up to
					the top!
				</Typography>
				<iframe
					style={{ width: "100%", height: "500px", scale: "0.5" }}
					src="https://visualgo.net/en/sorting"
				></iframe>
				<Typography variant="subtitle2" gutterBottom>
					<p>Example</p>
					[5, 3, 4, 1, 2]<br></br>
					[3, 5, 4, 1, 2]<br></br>
					[3, 4, 5, 1, 2]<br></br>
					[3, 4 ,1, 5, 2]<br></br>
					[3, 4, 1, 2, 5]<br></br>
					...
				</Typography>
				<br></br>
				<Typography variant="subtitle2" gutterBottom>
					Before we sort, we must swap!
					<pre>{`
                    //ES5
                    function swap(arr, idx1, idx2){
                        var temp = arr[idx1]
                        arr[idx1] = arr[idx2]
                        arr[idx2] = temp
                    }

                    // ES2015
                    const swap = (arr, idx1, idx2) => {
                        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
                    }
                    `}</pre>
				</Typography>
				<br></br>
				<Typography variant="subtitle2" gutterBottom>
					<strong>Bubble Sort Implementation</strong>
					<ul>
						<li>
							Start looping with a variable called i at the end
							of the array towards the beginning
						</li>
                        <li>Start and inner loop with a variable called j from the beginning until i-1</li>
                        <li>If arr[j] is greater than arr[j+1], swap those 2 values!</li>
					</ul>
				</Typography>
                <FunctionExcecution
					inputCount={1}
					defaultValues={["[10,15,20,35]"]}
				>
					{`
                    function bubbleSort(arr){
                        var noSwaps;
                        for(var i = arr.length -1 ; i >  0; i--){
                                noSwaps = true;
                                for(var j = 0; j < i; j++){
                                    if(arr[j] > arr[j+1]){
                                    var temp = arr[j]
                                    arr[j] = arr[j+1]
                                    arr[j+1] = temp;
                                    noSwaps = false;
                                }
                            }
                            if(noSwaps) break;
                        }

                        return arr
                    }
`}
				</FunctionExcecution>
                <br></br>
                <Typography variant="subtitle2" gutterBottom>
					<strong>Bubble Sort Complexity</strong>
					<ul>
						<li>
                            normally O(n^2)
						</li>
                        <li>nearly sorted O(n)</li>
					</ul>
				</Typography>
			</Box>
		</>
	);
};

export default BubbleSort;
