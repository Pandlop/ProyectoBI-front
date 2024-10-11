import React, { useState } from "react";
import Chart from "react-apexcharts";

function HeatmapChart({ metrics }) {
	// Extrae los valores de precision, recall y f1-score de metrics
	const precisionData = [metrics[3].precision, metrics[4].precision, metrics[5].precision];
	const recallData = [metrics[3].recall, metrics[4].recall, metrics[5].recall];
	const f1ScoreData = [metrics[3]['f1-score'], metrics[4]['f1-score'], metrics[5]['f1-score']];

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
							to: 1,
							color: "#008FFB",  
						},
					],
				},
			},
		},
		xaxis: {
			categories: ["Clase 3", "Clase 4", "Clase 5"], 
			labels: {
				style: {
					colors: "#ffffff",  
				},
			},
		},
		yaxis: {
			labels: {
				style: {
					colors: "#ffffff",  
				},
			},
		},
		title: {
			text: "Heatmap Metrics",
		},
		legend: {
			labels: {
				colors: "#ffffff",  
			},
		},
		tooltip: {
			theme: "dark",  
			style: {
				fontSize: "14px",
				colors: ["#000000"],  
			},
		},
	});

	const [series] = useState([
		{
			name: "Precision",
			data: precisionData, 
		},
		{
			name: "Recall",
			data: recallData,  
		},
		{
			name: "F1 Score",
			data: f1ScoreData,  
		},
	]);

	return (
		<div id="chart">
			<Chart options={options} series={series} type="heatmap" height={350} />
		</div>
	);
}

export default HeatmapChart;
