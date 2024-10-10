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

function Statistics({ response }) {
	const conteoClases = response?.conteo_clases || { 3: 0, 4: 0, 5: 0 };

	const data = {
		labels: ["Clase 3", "Clase 4", "Clase 5"], // Etiquetas para las clases
		datasets: [
			{
				label: "Conteo por clase",
				data: [conteoClases[3], conteoClases[4], conteoClases[5]], // Datos desde el response
				backgroundColor: ["#36A2EB", "#FFCE56", "#FF6384"], // Colores de las clases
			},
		],
	};

	const options = {
		responsive: true,
		plugins: {
			legend: {
				display: true,
				labels: {
					color: "white",
				},
			},
		},
		layout: {
			padding: "1em",
		},
	};

	return (
		<Card className="stats-card">
			<Card.Body>
				<Card.Title>
					<h2 className="stats-title">Estadísticas</h2>
				</Card.Title>
				<div className="stats-container">
					<div style={{ height: "100%" }} className="container-dona">
						<Doughnut className="dona" data={data} options={options} />
					</div>
				</div>
			</Card.Body>
		</Card>
	);
}

export default Statistics;
