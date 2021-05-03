import { Box,  Typography } from "@material-ui/core";
import React from "react";
import FunctionExcecution from "../common/FunctionExecution";

export interface Props {}

const MultiplePointers: React.FC<Props> = () => {
	return (
		<>
			<Box style={{ textAlign: "left" }}>
				<Typography variant="h5" gutterBottom>
					Multiple Pointers.
				</Typography>
				<Typography variant="subtitle2" gutterBottom>
					Creating pointers or values that correspond to an index or
					position and move towards the beginning, end or middle based
					on a certain condition.<br></br>
					Very efficient for solving problems with minimal spaace
					complexity as well.
				</Typography>
				<br></br>
				<Typography variant="h6" gutterBottom>
					Write a function called sumZero which accepts a sorted array
					of integers. The function should find the first pair where
					the sum is 0. Return an array that includes both values that
					sum to zero or undefined if a pair does not exist.<br></br>
				</Typography>
				<Typography variant="subtitle2" gutterBottom>
					sumZero([-3,-2,-1,0,1,2,3])// [-3,3]<br></br>
					sumZero([1,2,3])// undefined<br></br>
					<br></br>A Naive Solution (O(n^2))
				</Typography>
				<FunctionExcecution
					inputCount={1}
					defaultValues={["[-1,1,2,3]"]}
				>
					{`function sumZero(arr){
        
    for(let i = 0; i < arr.length; i++){
        for(let j = i + i; j< arr.length; j++){
            if(arr[i] + arr[j] === 0){
                return [arr[i], arr[j]]
            }
        }
    }
}`}
				</FunctionExcecution>
				<Typography variant="subtitle2" gutterBottom>
					<br></br>Refactored (time O(n) space O(1))
				</Typography>
				<FunctionExcecution
					inputCount={1}
					defaultValues={["[-1,1,2,3]"]}
				>
					{`function sumZero(arr){
        
    let left = 0;
    let right = arr.length -1;
    while(left<right){
        let sum = arr[left] + arr[right];
        if (sum === 0) {
            return [arr[left], arr[right]]
        }else if (sum > 0){
            right--;
        }else{
            left++;
        }
    }
}`}
				</FunctionExcecution>
                <br></br>
				<Typography variant="h6" gutterBottom>
                    Implement a function called countUniqueValues, which accepts a sorted array, and
                    counts the unique value in the array. There can be negative numbers in the array,
                    but it will always be  sorted.
				</Typography>
				<Typography variant="subtitle2" gutterBottom>
					countUniqueValues([1,1,1,1,1,2])// 2<br></br>
					<br></br>
				</Typography>
                <br></br>
                <FunctionExcecution
					inputCount={1}
					defaultValues={["[1,1,2,2,3]"]}
				>
					{`function countUniqueValues(arr){
        
   var i = 0;
   for (var j = 1; j < arr.length; j++){
       if(arr[i] !== arr[j]){
           i++;
           arr[i] = arr[j]
       }
   }
 
    arr.splice(i+1)
    return arr.length
}`}
				</FunctionExcecution>
			</Box>
		</>
	);
};

export default MultiplePointers;
