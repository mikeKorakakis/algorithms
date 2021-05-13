import React, { useEffect, useRef, useState } from "react";
import * as d3 from "d3";
import { Grid, TextField, Box, Typography } from "@material-ui/core";

let DUMMY_DATA = [10, 11, 13, 2, 7, 12, 9, 6];
const svgWidth = 500;
const svgHeight = 300;
const dataMaxHeight = 1.1 * Math.max(...DUMMY_DATA);

/* Component */
export const Home = () => {
	const [values, setValues] = useState(DUMMY_DATA);

	function bubbleSort(arr) {
		var noSwaps;
		for (var i = arr.length - 1; i > 0; i--) {
			noSwaps = true;
			for (var j = 0; j < i; j++) {
				if (arr[j] > arr[j + 1]) {
					var temp = arr[j];
					arr[j] = arr[j + 1];
					arr[j + 1] = temp;
					noSwaps = false;
					swap(arr, i, j);
                    
				}
			}
			if (noSwaps) break;
		}

		return arr;
	}

	const input = values; // values.map((value) => jsonParse(value));

	const d3Container = useRef(null);

	const createChart = () => {
		const xScale = d3
			.scaleBand()
			.domain(DUMMY_DATA.map((dataPoint) => dataPoint)) //region
			.rangeRound([0, svgWidth])
			.padding(0.1);
		const yScale = d3
			.scaleLinear()
			.domain([0, dataMaxHeight])
			.range([svgHeight, 0]);

		const svg = d3.select(d3Container.current).classed("container", true);

		svg.selectAll(".bar")
			.data(DUMMY_DATA)
			.enter()
			.append("rect")
			.classed("bar", true)
			.attr("width", xScale.bandwidth())
			.attr("height", (data) => svgHeight - yScale(data)) //value
			.attr("x", (data) => xScale(data)) //region
			.attr("y", (data) => yScale(data)); //value

		svg.selectAll("text.bar")
			.data(DUMMY_DATA)
			.enter()
			.append("text")
			.classed("bar", true)
			.attr("text-anchor", "middle")
			.attr("width", xScale.bandwidth())
			.attr("height", (data) => svgHeight - yScale(data.value))
			.attr("x", (data) => xScale(data) + xScale.bandwidth() / 2)
			.attr("y", (data) => yScale(data) - 5)
			.text((data) => data);
		// .transition().duration(4000).style("opacity", 0.1)
		// .append("text").text(data => data.value);
	};

	const updateChart = (data) => {
		const xScale = d3
			.scaleBand()
			.domain(data.map((dataPoint) => dataPoint.region))
			.rangeRound([0, 250])
			.padding(0.1);
		const yScale = d3.scaleLinear().domain([0, 15]).range([svgHeight, 0]);

		const svg = d3.select(d3Container.current).classed("container", true);

		svg.selectAll(".bar")
			.data(data)
			.transition()
			.duration(500)
			.attr("height", (data) => svgHeight - yScale(data.value))
			.attr("y", (data) => yScale(data.value));

		svg.selectAll("text.bar")
			.data(data)
			.transition()
			.duration(500)
			.attr("height", (data) => svgHeight - yScale(data.value))
			.attr("x", (data) => xScale(data.region) + xScale.bandwidth() / 2)
			.attr("y", (data) => yScale(data.value) - 5)
			.text((data) => data.value);
		// .transition().duration(4000).style("opacity", 0.1)
		// .append("text").text(data => data.value);
	};

	const swap = (data, index1, index2) => {
		const xScale = d3
			.scaleBand()
			.domain(data.map((dataPoint) => dataPoint))
			.rangeRound([0, svgWidth])
			.padding(0.1);
		const yScale = d3.scaleLinear().domain([0, 15]).range([svgHeight, 0]);

		const svg = d3.select(d3Container.current).classed("container", true);

		svg.selectAll(`.bar:nth-child(${index1 + 1})`)
			.data(data)
			.style("fill", "green")
			.transition()
			.duration(500)
			.attr("y", (data) => yScale(DUMMY_DATA[index1]) - 15)
			.transition()
			.duration(500)
			.attr("x", (dta) => xScale(DUMMY_DATA[index2]))
			.transition()
			.duration(500)
			.attr("y", (data) => yScale(DUMMY_DATA[index1]))
			.style("fill", "#720570");

		svg.selectAll(`text:nth-of-type(${index1 + 1})`)
			.data(data)
			.transition()
			.duration(500)
			.attr("y", (data) => yScale(DUMMY_DATA[index1]) - 20)
			.transition()
			.duration(500)
			.attr(
				"x",
				(dta) => xScale(DUMMY_DATA[index2]) + xScale.bandwidth() / 2
			)
			.transition()
			.duration(500)
			.attr("y", (data) => yScale(DUMMY_DATA[index1]) - 5)
			.style("fill", "#720570");

		svg.selectAll(`.bar:nth-child(${index2 + 1})`)
			.data(data)
			.style("fill", "red")
			.transition()
			.duration(500)
			.attr("y", (data) => yScale(DUMMY_DATA[index2]) - 15)
			.transition()
			.duration(500)
			.attr("x", (dta) => xScale(DUMMY_DATA[index1]))
			.transition()
			.duration(500)
			.attr("y", (data) => yScale(DUMMY_DATA[index2]))
			.style("fill", "#720570");

		svg.selectAll(`text:nth-of-type(${index2 + 1})`)
			.data(data)
			.transition()
			.duration(500)
			.attr("y", (data) => yScale(DUMMY_DATA[index2]) - 20)
			.transition()
			.duration(500)
			.attr(
				"x",
				(dta) => xScale(DUMMY_DATA[index1]) + xScale.bandwidth() / 2
			)
			.transition()
			.duration(500)
			.attr("y", (data) => yScale(DUMMY_DATA[index2]) - 5)
			.style("fill", "#720570");

		// svg.selectAll("text.bar")
		// 	.data(data)

		// 	.attr("height", (data) => svgHeight - yScale(data.value))
		// 	.attr("x", (data) => xScale(data.region) + xScale.bandwidth() / 2)
		// 	.attr("y", (data) => yScale(data.value) - 5)
		// 	.text((data) => data.value);
		// .transition().duration(4000).style("opacity", 0.1)
		// .append("text").text(data => data.value);
	};

	useEffect(() => {
		if (d3Container.current) {
			// const svg =
			// d3.select(d3Container.current)
			// .selectAll("p").data(DUMMY_DATA).enter().append('p').text(data => data.region);

			// scale width

			createChart();
			setTimeout(() => {
				// let DUMMY_DATA = [
				// 	{ id: "d1", value: 2, region: "USA" },
				// 	{ id: "d2", value: 5, region: "India" },
				// 	{ id: "d3", value: 10, region: "China" },
				// 	{ id: "d4", value: 13, region: "Germany" },
				// ];
				// updateChart(DUMMY_DATA);
				// swap(DUMMY_DATA, 0, 1);
				// bars.data(DUMMY_DATA.slice(0, 2)).exit().transition().duration(4000).style("opacity", 0.1)
				// svg
				// .selectAll(".bar")
				// .data(DUMMY_DATA.push({ id: "d5", value: 7, region: "G" }))
				// 	.enter()
				// 	.append("rect")
				// 	.classed("bar", true)
				// 	.attr("width", xScale.bandwidth())
				// 	.attr("height", (data) => svgHeight - yScale(data.value))
				// 	.attr("x", (data) => xScale(data.region))
				// 	.attr("y", (data) => yScale(data.value));
				//     console.log(DUMMY_DATA)
			}, 2000);
		}
	}, [d3Container.current]);
console.log(values)
	return (
		<>
			<Grid container>
				<Grid item xs={6}>
					<Grid container direction="column" alignItems="flex-start">
						<Grid container alignItems="flex-start">
							{/* {Array.from(Array(inputCount).keys()).map((_, i) => ( */}
							<TextField
								// key={i}
								label={`Input`}
								style={{ width: "auto", margin: "20px" }}
								value={values}
								// onChange={(event) => {
								// 	values = event?.target?.value;
								// 	setValues([...values]);
								// }}
							></TextField>
							{/* ))} */}
						</Grid>
						<Box style={{ paddingLeft: "20px" }}>
							<Typography variant="subtitle2" gutterBottom>
								{"result --> "}
								{JSON.stringify(bubbleSort(input))}
							</Typography>
						</Box>
					</Grid>
					<pre>{`
function bubbleSort(arr) {
    var noSwaps;
    for (var i = arr.length - 1; i > 0; i--) {
        noSwaps = true;
        for (var j = 0; j < i; j++) {
            if (arr[j] > arr[j + 1]) {
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                noSwaps = false;
                swap(arr, i, j);
            }
        }
        if (noSwaps) break;
    }

    return arr;
}
                    `}</pre>
					{/* <pre>{funct}</pre> */}
				</Grid>

				<Grid item xs={6} style={{ paddingLeft: "20px" }}>
					<svg
						width={svgWidth}
						height={svgHeight}
						// viewBox="0 0 100 300"
						// width={"100%"}
						// style={{ height: "calc(100vh-64)" }}
						ref={d3Container}
					/>
					{/* <Grid container direction="column" alignItems="flex-start">
					<Grid container alignItems="flex-start">
						{Array.from(Array(inputCount).keys()).map((_, i) => (
							<TextField
								key={i}
								label={`Input ${i}`}
								style={{ width: "auto", margin: "20px" }}
								value={values[i]}
								onChange={(event) => {
									values[i] = event?.target?.value;
									setValues([...values]);
								}}
							></TextField>
						))}
					</Grid>
					<Box style={{ paddingLeft: "20px" }}>
						<Typography variant="subtitle2" gutterBottom>
							{"result --> "}
							{JSON.stringify(fn(...input))}
						</Typography>
					</Box>
				</Grid> */}
				</Grid>
			</Grid>
		</>
	);
};
// const updateChart = (data) => {
//     const xScale = d3
//         .scaleBand()
//         .domain(data.map((dataPoint) => dataPoint.region))
//         .rangeRound([0, 250])
//         .padding(0.1);
//     const yScale = d3.scaleLinear().domain([0, 15]).range([svgHeight, 0]);

//     const svg = d3.select(d3Container.current).classed("container", true);

//     svg.selectAll(".bar")
//         .data(data)
//         .transition()
//         .duration(500)
//         .attr("height", (data) => svgHeight - yScale(data.value))
//         .attr("y", (data) => yScale(data.value));

//     svg.selectAll("text.bar")
//         .data(data)
//         .transition()
//         .duration(500)
//         .attr("height", (data) => svgHeight - yScale(data.value))
//         .attr("x", (data) => xScale(data.region) + xScale.bandwidth() / 2)
//         .attr("y", (data) => yScale(data.value) - 5)
//         .text((data) => data.value);
//     // .transition().duration(4000).style("opacity", 0.1)
//     // .append("text").text(data => data.value);
// };
