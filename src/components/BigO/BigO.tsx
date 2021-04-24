import {
	Box,
	Divider,
	Grid,
	TextField,
	Typography,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";

export interface Props {}

function addUpTo(n: number) {
	let total = 0;
	for (let i = 1; i <= n; i++) {
		total += i;
	}
	return total;
}

function addUpTo2(n: number) {
	return (n * (n + 1)) / 2;
}

const add1 = (n: number) => {
	const t1 = performance.now();
	let result = addUpTo(n);
	const t2 = performance.now();
	return { result: result, duration: `${(t2 - t1) / 1000}s` };
};

const add2 = (n: number) => {
	const t1 = performance.now();
	let result = addUpTo2(n);
	const t2 = performance.now();
	return { result: result, duration: `${(t2 - t1) / 1000}s` };
};

const BigO: React.FC<Props> = () => {
	const [number, setNumber] = useState(0);
	const [number2, setNumber2] = useState(0);
	const [result, setResult] = useState<any>();
	const [result2, setResult2] = useState<any>();

	useEffect(() => {
		setResult(JSON.stringify(add1(number)));
	}, [number]);

	useEffect(() => {
		setResult2(JSON.stringify(add2(number2)));
	}, [number2]);

	return (
		<>
			<Typography variant="h5" gutterBottom>
				BigO
			</Typography>
			<Typography variant="subtitle2" gutterBottom>
				Write a function that calculates the sum of all numbers from 1
				up to (and including) some number n.
			</Typography>
			<Grid container>
				<Grid item xs={6}>
					<pre>
						{`function addUpTo(n){
let total = 0;
for (let i=1; i<=n; i++) {
    total += i;
}
return total;
}`}
					</pre>
				</Grid>
				<Grid item xs={6}>
					<Grid container direction="column" alignItems="flex-start">
						<TextField
							style={{ width: "100px", margin: "20px" }}
							value={number}
							onChange={(event) =>
								setNumber(parseInt(event?.target?.value) || 0)
							}
						></TextField>
						<Box style={{ paddingLeft: "20px" }}>
							<Typography variant="subtitle2" gutterBottom>
								{result}
							</Typography>
						</Box>
					</Grid>
				</Grid>
			</Grid>
			<Divider></Divider>
			<Grid container>
				<Grid item xs={6}>
					<pre>
						{`function addUpTo2(n){
return n * (n + 1) / 2;
}`}
					</pre>
				</Grid>
				<Grid item xs={6}>
					<Grid container direction="column" alignItems="flex-start">
						<TextField
							style={{ width: "100px", margin: "20px" }}
							value={number2}
							onChange={(event) =>
								setNumber2(parseInt(event?.target?.value) || 0)
							}
						></TextField>
						<Box style={{ paddingLeft: "20px" }}>
							<Typography variant="subtitle2" gutterBottom>
								{result2}
							</Typography>
						</Box>
					</Grid>
				</Grid>
			</Grid>
			<Divider></Divider>
			<Box style={{ textAlign: "left", paddingTop: "10px" }}>
				<Typography variant="subtitle2" gutterBottom>
					Big O Notation is a way to formalize fuzzy counting.
				<br></br>
					It allows us to talk formally about how the runtime of an
					algorithm grows as the inputs grow.
                    <br></br>
					We don't care about the details. Only about the trends
                    <br></br>
					We say that an algorithm is O(f(n)) if the number of simple
					operations the computer has to do is eventually less than a
					constant times f(n), as n increases
                    <br></br>
					<ul>
						<li>f(n) could be linear (f(n) = n) </li>
						<li>f(n) could be quadratic (f(n) = n^2) </li>
						<li>f(n) could be consant (f(n) = 1) </li>
						<li>f(n) could be something entirely different</li>
					</ul>
                    <br></br>
					In the second example the function has 3 operations. So it
					is O(1)
                    <br></br>
					In the first example the function has (5*n + 2) operations.
					So it is O(n)<br></br>
					In the second example the function has 3 operations. So it
					is O(1)
                    <br></br>
					When determining the time complexity of an algorithm, there
					are some helpful rules of thumb for big O expressions.
					<ul>
						<li>{`Constants don't matter: O(2n) --> O(n), O(500) --> O(1) `}</li>
						<li>{`Smaller terms don't matter: O(n +10 ) --> O(n), O(1000n + 500) --> O(n), O(n^2 + 5n + 8) --> O(n^2) `}</li>
					</ul>
                    <br></br>
					Big O Shorthands
					<ul>
						<li>{`Arithmetic operations are constant.`}</li>
						<li>{`Variable assignment is constant.`}</li>
						<li>{`Accesing elements in an array (by index) or object (by key) is constant.`}</li>
						<li>{`Inside a loop, the complexity is the length of the loop times the complexity of whatever happens inside of the loop.`}</li>
					</ul>
				</Typography>
                <img src={process.env.PUBLIC_URL + "/big_o_complexity_chart.jpeg"} height="400px"></img>
                <Typography variant="subtitle2" style={{marginTop: "10px"}}>
					Space Complexity <br></br>
					Auxiliary space complexity refers to space required by the algorithm, not including the space taken up by the inputs 
                    <br></br>
                    Space Complexity in JS
                    Rules of Thumb                    
                    <ul>
						<li>{`Most primitives(booleans, numbers, undefined, null) are constant space.`}</li>
						<li>{`Strings require O(n) space (where n is the string length).`}</li>
						<li>{`Reference types are generally O(n), where n is the length (for arrays) or the number of keys(for objects).`}</li>
					</ul>
                     <br></br>
                     Examples
                     <pre>
{`function sum(arr){
let total = 0;
for (let i=1; i<=arr.length; i++) {
    total += arr[i];
}
return total;
}`}
					</pre>
                    The space is O(1) because we have one variable that gets incremented.
                    <br></br>
<Divider></Divider>
                    <pre>
{`function double(arr){
let newArr = 0;
for (let i=1; i<=arr.length; i++) {
    newArr.push(2 * arr[i]);
}
return newArr;
}`}
					</pre>
                    The space is O(n) because the length of the array is incremented in every loop.
                </Typography>
        	</Box>
		</>
	);
};

export default BigO;
