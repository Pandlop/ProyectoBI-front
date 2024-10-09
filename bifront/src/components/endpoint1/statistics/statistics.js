import React from "react";
import {
	Chart as ChartJS,
	ArcElement, // Asegúrate de registrar este elemento
	Tooltip,
	Legend,
} from "chart.js";
import { Doughnut } from "react-chartjs-2";
import "./statistics.css";
import { Card } from "react-bootstrap";

ChartJS.register(ArcElement, Tooltip, Legend);

function Statistics() {
	const data = {
		labels: ["Completed", "Pending", "Initiated"],
		datasets: [
			{
				label: "Classification Status",
				data: [242, 94, 61],
				backgroundColor: ["#36A2EB", "#FFCE56", "#FF6384"],
			},
		],
	};

	const options = {
		responsive: true,
		plugins: {
			legend: {
				display: true,
			},
		},
		layout: {
			padding: 0,
		},
	};

	return (
		<Card className="stats-card">
			<Card.Body>
				<Card.Title>
					<h2 className="stats-title">Estadísticas</h2>
				</Card.Title>
				<Card.Text>
					<label className="stats-text">
						Accuracy: <span className="accuracy-highlight">45%</span>
					</label>
					<div style={{ height: "100%" }} className="container-dona">
						<Doughnut className="dona" data={data} options={options} />
					</div>
				</Card.Text>
			</Card.Body>
		</Card>
	);
}

export default Statistics;
