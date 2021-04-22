import {
	Box,
	Button,
	Container,
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
	console.log("calc1");
	const t1 = performance.now();
	let result = addUpTo(n);
	const t2 = performance.now();
	return { result: result, duration: `${(t2 - t1) / 1000}s` };
};

const add2 = (n: number) => {
	console.log("calc2");
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
		</>
	);
};

export default BigO;
