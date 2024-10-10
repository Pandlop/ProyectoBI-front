import React from "react";
import { Card, Table } from "react-bootstrap";
import "./classifiedTexts.css";

function ClassifiedTexts({ resultados }) {
	return (
		<Card className="table-card">
			<Card.Body>
				<Card.Title>
					<h2 className="table-title">Textos clasificados</h2>
				</Card.Title>
				<Card.Text>
					<Table striped bordered hover className="table-texts">
						<thead>
							<tr>
								<th>#</th>
								<th>Texto</th>
								<th>Predicción</th>
								<th>Probabilidades</th>
							</tr>
						</thead>
						<tbody>
							{resultados.map((item, index) => (
								<tr key={index}>
									<td>{index + 1}</td>
									<td>{item.texto}</td>
									<td>{item.prediccion}</td>
									<td>{item.probabilidades.join(", ")}</td>
								</tr>
							))}
						</tbody>
					</Table>
				</Card.Text>
			</Card.Body>
		</Card>
	);
}

export default ClassifiedTexts;
