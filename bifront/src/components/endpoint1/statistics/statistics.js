import React from "react";
import { Doughnut } from "react-chartjs-2";
import "./statistics.css";
import { Card } from "react-bootstrap";

function Statistics() {
	return (
		<Card className="stats-card">
			<Card.Body>
				<Card.Title>
					<h2 className="stats-title">Estadísticas</h2>
				</Card.Title>
				<Card.Text>
					<p>Accuracy: 45%</p>
					{/* <Doughnut data="" /> */}
				</Card.Text>
			</Card.Body>
		</Card>
	);
}

export default Statistics;
