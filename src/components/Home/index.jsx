import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

let DUMMY_DATA = [
	{ id: "d1", value: 10, region: "USA" },
	{ id: "d2", value: 11, region: "India" },
	{ id: "d3", value: 12, region: "China" },
	{ id: "d4", value: 6, region: "Germany" },
];

/* Component */
export const Home = (props) => {
	/* The useRef Hook creates a variable that "holds on" to a value across rendering
       passes. In this case it will hold our component's SVG DOM element. It's
       initialized null and React will assign it later (see the return statement) */
	const d3Container = useRef(null);

	const createChart = () => {
		const xScale = d3
			.scaleBand()
			.domain(DUMMY_DATA.map((dataPoint) => dataPoint.region))
			.rangeRound([0, 250])
			.padding(0.1);
		const yScale = d3.scaleLinear().domain([0, 15]).range([200, 0]);

		const svg = d3.select(d3Container.current).classed("container", true);

		svg.selectAll(".bar")
			.data(DUMMY_DATA)
			.enter()
			.append("rect")
			.classed("bar", true)
			.attr("width", xScale.bandwidth())
			.attr("height", (data) => 200 - yScale(data.value))
			.attr("x", (data) => xScale(data.region))
			.attr("y", (data) => yScale(data.value));

		svg.selectAll("text.bar")
			.data(DUMMY_DATA)
			.enter()
			.append("text")
			// .classed("bar", true)
			.classed("text", true)
			.attr("text-anchor", "middle")
			.attr("width", xScale.bandwidth())
			.attr("height", (data) => 200 - yScale(data.value))
			.attr("x", (data) => xScale(data.region) + xScale.bandwidth() / 2)
			.attr("y", (data) => yScale(data.value) - 5)
			.text((data) => data.value);
		// .transition().duration(4000).style("opacity", 0.1)
		// .append("text").text(data => data.value);
	};

	const updateChart = (data) => {
		const xScale = d3
			.scaleBand()
			.domain(data.map((dataPoint) => dataPoint.region))
			.rangeRound([0, 250])
			.padding(0.1);
		const yScale = d3.scaleLinear().domain([0, 15]).range([200, 0]);

		const svg = d3.select(d3Container.current).classed("container", true);

		svg.selectAll(".bar")
			.data(data)
			.transition()
			.duration(500)
			.attr("height", (data) => 200 - yScale(data.value))
			.attr("y", (data) => yScale(data.value));

		svg.selectAll("text.bar")
			.data(data)
			.transition()
			.duration(500)
			.attr("height", (data) => 200 - yScale(data.value))
			.attr("x", (data) => xScale(data.region) + xScale.bandwidth() / 2)
			.attr("y", (data) => yScale(data.value) - 5)
			.text((data) => data.value);
		// .transition().duration(4000).style("opacity", 0.1)
		// .append("text").text(data => data.value);
	};

	const swap = (data, index1, index2) => {
		const xScale = d3
			.scaleBand()
			.domain(data.map((dataPoint) => dataPoint.region))
			.rangeRound([0, 250])
			.padding(0.1);
		const yScale = d3.scaleLinear().domain([0, 15]).range([200, 0]);

		const svg = d3.select(d3Container.current).classed("container", true);

		svg.selectAll(`.bar:nth-child(${index1 + 1})`)
			.data(data)
			.style("fill", "green")
			.transition()
			.duration(500)
			.attr("y", (data) => yScale(DUMMY_DATA[index1].value) - 15)
			.transition()
			.duration(500)
			.attr("x", (dta) => xScale(DUMMY_DATA[index2].region))
			.transition()
			.duration(500)
			.attr("y", (data) => yScale(DUMMY_DATA[index1].value))
			.style("fill", "#720570");

		svg.selectAll(`.text:nth-child(${index1 + 1})`)
			.data(data)
			.transition()
			.duration(500)
			.attr("y", (data) => yScale(DUMMY_DATA[index1].value) - 20)
			.transition()
			.duration(500)
			.attr("x", (dta) => xScale(DUMMY_DATA[index2].region))
			.transition()
			.duration(500)
			.attr("y", (data) => yScale(DUMMY_DATA[index1].value) - 5)
			.style("fill", "#720570");

		svg.selectAll(`.bar:nth-child(${index2 + 1})`)
			.data(data)
			.style("fill", "red")
			.transition()
			.duration(500)
			.attr("y", (data) => yScale(DUMMY_DATA[index2].value) - 15)
			.transition()
			.duration(500)
			.attr("x", (dta) => xScale(DUMMY_DATA[index1].region))
			.transition()
			.duration(500)
			.attr("y", (data) => yScale(DUMMY_DATA[index2].value))
			.style("fill", "#720570");

		svg.selectAll(`.text:nth-child(${index2 + 1})`)
			.data(data)
			.transition()
			.duration(500)
			.attr("y", (data) => yScale(DUMMY_DATA[index2].value) - 20)
			.transition()
			.duration(500)
			.attr("x", (dta) => xScale(DUMMY_DATA[index1].region))
			.transition()
			.duration(500)
			.attr("y", (data) => yScale(DUMMY_DATA[index2].value) - 5)
			.style("fill", "#720570");

		// svg.selectAll("text.bar")
		// 	.data(data)

		// 	.attr("height", (data) => 200 - yScale(data.value))
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
				swap(DUMMY_DATA, 0, 1);
				// bars.data(DUMMY_DATA.slice(0, 2)).exit().transition().duration(4000).style("opacity", 0.1)
				// svg
				// .selectAll(".bar")
				// .data(DUMMY_DATA.push({ id: "d5", value: 7, region: "G" }))
				// 	.enter()
				// 	.append("rect")
				// 	.classed("bar", true)
				// 	.attr("width", xScale.bandwidth())
				// 	.attr("height", (data) => 200 - yScale(data.value))
				// 	.attr("x", (data) => xScale(data.region))
				// 	.attr("y", (data) => yScale(data.value));

				//     console.log(DUMMY_DATA)
			}, 2000);
		}
	}, [d3Container.current]);

	return (
		<>
			<svg
				width={"100%"}
				style={{ height: "calc(100vh-64)" }}
				ref={d3Container}
			/>
		</>
	);
};
