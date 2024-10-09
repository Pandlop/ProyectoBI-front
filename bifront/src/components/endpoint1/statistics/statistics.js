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
		maintainAspectRatio: false, // Desactiva el ratio fijo para ajustarse al contenedor
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
					<Doughnut data={data} options={options} />
				</Card.Text>
			</Card.Body>
		</Card>
	);
}

export default Statistics;
