import { Box, Grid, TextField, Typography } from "@material-ui/core";
import React, { useState } from "react";
import FunctionExcecution from "../common/FunctionExecution";

export interface Props {}

function isAlphaNumeric(str: string) {
	var code, i, len;

	for (i = 0, len = str.length; i < len; i++) {
		code = str.charCodeAt(i);
		if (
			!(code > 47 && code < 58) && // numeric (0-9)
			!(code > 64 && code < 91) && // upper alpha (A-Z)
			!(code > 96 && code < 123)
		) {
			// lower alpha (a-z)
			return false;
		}
	}
	return true;
}

const ProblemSolvingPatterns: React.FC<Props> = () => {
	return (
		<>
			<Typography variant="h5" gutterBottom>
				Problem Solving Patterns
			</Typography>
			<Box style={{ textAlign: "left" }}>
				<Typography variant="h6" gutterBottom>
					Some Patterns
				</Typography>
				<Typography variant="subtitle2" gutterBottom>
					<ul>
						<li>Frequency Counter.</li>
						<li>Multiple Pointers.</li>
						<li>Sliding Window.</li>
						<li>Devide and Conquer.</li>
						<li>Dynamic Programming.</li>
						<li>Greedy Algorigthms.</li>
						<li>BackTracking.</li>
					</ul>
				</Typography>
				<Typography variant="h6" gutterBottom>
					Frequency Counter Pattern.
				</Typography>
				<Typography variant="subtitle2" gutterBottom>
					This pattern uses objects or sets to collect
					values/frequences of values. <br></br>
					This can often avoid the need for nested loops or O(N^2)
					operations with arrays/strings.
				</Typography>

				<Typography variant="h6" gutterBottom>
					Write a function called same, which accepts two arrays. The
					function should return true if every value in the array has
					it's corrensponding value squared in the second array. The
					frequency of values must be the same
				</Typography>
				<Typography variant="subtitle2" gutterBottom>
					same([1,2,3], [4,1,9]) //true <br></br>
					same([1,2,3], [1,9]) //false <br></br>
					same([1,2,1], [4,4,1]) //false <br></br>
					<br></br>A Naive Solution
					<pre>
						{`
function same(arr1, arr2){
    if (arr1.length !== arr2.length){
        return false;
    }
    for (let i = 0; i < arr1.length; i++){
        let correctIndex = arr2.indexOf(arr1[i] ** 2)
        if (correct Index === -1) {
            return false;
        }
        arr2.splice(correctIndex,1)
    }
    return true
}
`}
					</pre>
				</Typography>
                <FunctionExcecution inputCount={2}>
{`
function same(arr1, arr2){
    if (arr1.length !== arr2.length){
        return false;
    }
    for (let i = 0; i < arr1.length; i++){
        let correctIndex = arr2.indexOf(arr1[i] ** 2)
        if (correct Index === -1) {
            return false;
        }
        arr2.splice(correctIndex,1)
    }
    return true
}
`}
</FunctionExcecution>
			</Box>
		</>
	);
};

export default ProblemSolvingPatterns;
