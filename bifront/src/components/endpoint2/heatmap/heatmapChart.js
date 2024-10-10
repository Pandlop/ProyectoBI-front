import React, { useState } from "react";
import Chart from "react-apexcharts";

function HeatmapChart() {
	const [options] = useState({
		chart: {
			type: "heatmap",
			foreColor: "#ffffff",
		},
		plotOptions: {
			heatmap: {
				shadeIntensity: 0.8,
				colorScale: {
					ranges: [
						{
							from: 0,
							to: 60,
							color: "#008FFB",
						},
					],
				},
			},
		},
		xaxis: {
			categories: ["Clase 3", "Clase 4", "Clase 5"],
		},
		title: {
			text: "Heatmap Metrics",
		},
	});

	const [series] = useState([
		{
			name: "Metric 1",
			data: [10, 20, 30],
		},
		{
			name: "Metric 2",
			data: [20, 30, 10],
		},
		{
			name: "Metric 3",
			data: [30, 10, 50],
		},
		{
			name: "Metric 4",
			data: [40, 50, 60],
		},
	]);

	return (
		<div id="chart">
			<Chart options={options} series={series} type="heatmap" height={350} />
		</div>
	);
}

export default HeatmapChart;
