import { Box,  Typography } from "@material-ui/core";
import React from "react";
import FunctionExcecution from "../common/FunctionExecution";

export interface Props {}

const DevideAndConquer: React.FC<Props> = () => {
	return (
		<>
			<Box style={{ textAlign: "left" }}>
				<Typography variant="h5" gutterBottom>
					Devide and Conquer.
				</Typography>
				<Typography variant="subtitle2" gutterBottom>
					This pattern involves dividing a data set into smaller chunks
                    and then repeating a process with a subset of data.
					<br></br>
				    This pattern can tremendously decrease time complexity
					<br></br>
				</Typography>
				<br></br>
				<Typography variant="h6" gutterBottom>
					Given a sorted array of integers, write a function called search, 
                    that accepts a value and returns the index where the value passed to the 
                    function is located. If the value is not found return -1<br></br>
				</Typography>
				<Typography variant="subtitle2" gutterBottom>
					search([1,2,3,4,5,6], 6)// 5<br></br>
					<br></br>A Naive Solution (O(n))
				</Typography>
				<FunctionExcecution
					inputCount={2}
					defaultValues={["[1,2,3,4,5,6]", 6]}
				>
					{`function search(arr, val){
  
    for(let i =0; i< arr.length; i++){
        if(arr[i] === val){
            return i;
        }
    }
    return -1;

}`}
				</FunctionExcecution>
				<Typography variant="subtitle2" gutterBottom>
					<br></br>Refactored (time O(log(n)))
				</Typography>
				<FunctionExcecution
						inputCount={2}
                        defaultValues={["[1,2,3,4,5,6]", 6]}
				>
					{`function search(array, val){
  let min = 0;
  let max = array.length -1;

  while (min <= max){
      let middle = Math.floor((min + max) / 2);
      let currentElement = array[middle];
      
      if (array[middle] < val){
          min  = middle + 1;
      }
      else if (array[middle] > val ){
          max = middle -1
      }
      else {
          return middle;
      }

    }
      return -1

}`}
				</FunctionExcecution>
				<br></br>
			</Box>
		</>
	);
};

export default DevideAndConquer;
