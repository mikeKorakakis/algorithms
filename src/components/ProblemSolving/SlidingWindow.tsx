import { Box, Typography } from "@material-ui/core";
import React from "react";
import FunctionExcecution from "../common/FunctionExecution";

export interface Props {}

const SlidingWindow: React.FC<Props> = () => {
	return (
		<>
			<Box style={{ textAlign: "left" }}>
				<Typography variant="h5" gutterBottom>
					Sliding Window.
				</Typography>
				<Typography variant="subtitle2" gutterBottom>
					This pattern involves creating a window which can either be
					an array or number from one position to another.
					<br></br>
					Depending on a certain condition, the window either
					increases or closes (and a new widnow is created)
					<br></br>
					Very userful for keeping track of a subset of data in an
					array/string etc.
				</Typography>
				<br></br>
				<Typography variant="h6" gutterBottom>
					Write a function called maxSubarraySum which accepts an
					array of integers and a number called n. The function should
					calculate the maximum sum of n consecutive elements in the
					array.<br></br>
				</Typography>
				<Typography variant="subtitle2" gutterBottom>
					maxSubarraySum([1,2,5,2,8,1,5], 4)// 17<br></br>
					<br></br>A Naive Solution (O(n^2))
				</Typography>
				<FunctionExcecution
					inputCount={2}
					defaultValues={["[1,2,5,2,8,1,5]", 4]}
				>
					{`function maxSubarraySum(arr, num){
    if(num > arr.length){
        return null;
    }

    var max = -Infinity;
    for(let i =0; i< arr.length -num +1; i++){
        temp = 0;
        for (let j = 0; j < num; j++ ){
            temp += arr[i + j];
        }
        if(temp > max){
            max = temp;
        }
    }
    return max;

}`}
				</FunctionExcecution>
				<Typography variant="subtitle2" gutterBottom>
					<br></br>Refactored (time O(n) space O(1))
				</Typography>
				<FunctionExcecution
					inputCount={2}
					defaultValues={["[1,2,5,2,8,1,5]", 4]}
				>
					{`function maxSubarraySum(arr, num){
   let maxSum = 0;
   let tempSum = 0;
   if (arr.length < num ) return null;
   for (let i = 0; i< num; i++) {
       maxSum += arr[i];
   }
   tempSum = maxSum;
   for (let i = num; i < arr.length; i++){
       tempSum = tempSum - arr[i-num] + arr[i];
       maxSum = Math.max(maxSum, tempSum)
   }
   return maxSum;

}`}
				</FunctionExcecution>
				<br></br>
			</Box>
		</>
	);
};

export default SlidingWindow;
