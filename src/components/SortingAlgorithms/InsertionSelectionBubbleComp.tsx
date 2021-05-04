import {
	Box,
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableRow,
	Typography,
} from "@material-ui/core";
import React from "react";
import FunctionExcecution from "../common/FunctionExecution";

function createData(
	name: string,
	best: string,
	average: string,
	worst: string,
	space: string
) {
	return { name, best, average, worst, space };
}

const rows = [
	createData("Bubble Sort", "O(n)", "O(n^2)", "O(n^2)", "O(1)"),
	createData("Insertion Sort", "O(n)", "O(n^2)", "O(n^2)", "O(1)"),
	createData("Selection Sort", "O(n^2)", "O(n^2)", "O(n^2)", "O(1)"),
];

const InsertionSelectionBubbleComp: React.FC = () => {
	return (
		<>
			<Typography variant="h5" gutterBottom>
				Big O of Sorting algorithms
			</Typography>
			<Table aria-label="simple table">
				<TableHead>
					<TableRow>
						<TableCell>Algorithm</TableCell>
						<TableCell align="right">Time Complexity (Best)</TableCell>
						<TableCell align="right">Time Complexity (Average)</TableCell>
						<TableCell align="right">Time Complexity (Worst)</TableCell>
						<TableCell align="right">Space Complexity </TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{rows.map((row) => (
						<TableRow key={row.name}>
							<TableCell component="th" scope="row">
								{row.name}
							</TableCell>
							<TableCell align="right">{row.best}</TableCell>
							<TableCell align="right">{row.average}</TableCell>
							<TableCell align="right">{row.worst}</TableCell>
							<TableCell align="right">{row.space}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</>
	);
};

export default InsertionSelectionBubbleComp;
