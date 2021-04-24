import {
	Box,
	Typography,
} from "@material-ui/core";
import React, {  useState } from "react";

export interface Props {}

function addUpTo(n: number) {
	let total = 0;
	for (let i = 1; i <= n; i++) {
		total += i;
	}
	return total;
}

const Performace: React.FC<Props> = () => {
	const [number, setNumber] = useState(0);

	return (
		<>
			<Typography variant="h5" gutterBottom>
				Performance of Arrays and Objects
			</Typography>
			<Box style={{ textAlign: "left" }}>
				<Typography variant="h6" gutterBottom>
					Objects
				</Typography>
				<Typography variant="subtitle2" gutterBottom>
					Unordered, key value pairs!
					<pre>
						{`let instructor = {
firstName: "kelly",
isIstructor: true,
favoriteNumbers: [1,2,3,4]
}`}
					</pre>
				</Typography>
				<Typography variant="h6" gutterBottom>
					When to use Objects
				</Typography>
				<Typography variant="subtitle2" gutterBottom>
					<ul>
						<li>When you don't need order</li>
						<li>When you need fast access/insertion and removal</li>
					</ul>
				</Typography>
				<Typography variant="h6" gutterBottom>
					BigO of Objects
				</Typography>
				<Typography variant="subtitle2" gutterBottom>
					<ul>
						<li>Instertion - O(1)</li>
						<li>Removal - O(1)</li>
						<li>Searching - O(n)</li>
						<li>Access - O(1)</li>
					</ul>
				</Typography>
				<Typography variant="h6" gutterBottom>
					BigO of Objects Methods
				</Typography>
				<Typography variant="subtitle2" gutterBottom>
					<ul>
						<li>Object.keys - O(N)</li>
						<li>Object.values - O(N)</li>
						<li>Object.entries - O(N)</li>
						<li>Object.hasOwnProperty - O(1)</li>
					</ul>
				</Typography>
				<Typography variant="h6" gutterBottom>
					Arrays
				</Typography>
				<Typography variant="subtitle2" gutterBottom>
					Ordered lists!
					<pre>
						{`let names = ["Michael", "Melissa", "Andrea"]
let values = ["true",{} , [], 2,  "awesome"]`}
					</pre>
				</Typography>
				<Typography variant="h6" gutterBottom>
					When to use Objects
				</Typography>
				<Typography variant="subtitle2" gutterBottom>
					<ul>
						<li>When you need order</li>
						<li>
							When you need fast access/insertion and removal(sort
							of...)
						</li>
					</ul>
				</Typography>
				<Typography variant="h6" gutterBottom>
					BigO of Objects
				</Typography>
				<Typography variant="subtitle2" gutterBottom>
					<ul>
						<li>
							Instertion - It depends.. (easy at the end, bad at the
							beginning due to reindexing)
						</li>
						<li>
							Removal - It depends... (easy at the end, bad at the
							beginning due to reindexing)
						</li>
						<li>Searching - O(n)</li>
						<li>Access - O(1)</li>
					</ul>
				</Typography>
				<Typography variant="h6" gutterBottom>
					BigO of Objects Methods
				</Typography>
				<Typography variant="subtitle2" gutterBottom>
					<ul>
						<li>push - O(1)</li>
						<li>pop - O(1)</li>
						<li>shift - O(n)</li>
						<li>unshift - O(n)</li>
						<li>concat - O(n)</li>
						<li>slice - O(n)</li>
						<li>splice - O(n)</li>
						<li>sort - O(n * log(n))</li>
						<li>forEach/map/filter/reduce/etc. - O(n)</li>
					</ul>
				</Typography>
			</Box>
		</>
	);
};

export default Performace;
