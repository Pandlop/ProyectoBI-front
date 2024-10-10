import React from "react";
import { Card, Table } from "react-bootstrap";
import "./classifiedTexts.css";
function ClassifiedTexts({ response }) {
	return (
		<Card className="table-card">
			<Card.Body>
				<Card.Title>
					<h2 className="table-title">Textos clasificados</h2>
				</Card.Title>
				<div>
					<Table striped bordered hover className="table-texts">
						<thead>
							<tr>
								<th>#</th>
								<th>Texto</th>
								<th>Prediccion</th>
								<th>Probabilidades</th>
							</tr>
						</thead>
						<tbody>
							{response && response.textos_y_predicciones ? (
								response.textos_y_predicciones.map((item, index) => (
									<tr key={index}>
										<td>{index + 1}</td>
										<td
											style={{
												wordWrap: "break-word",
												whiteSpace: "normal",
												maxWidth: "500px",
											}}
										>
											{item.texto}
										</td>
										<td>{item.prediccion}</td>
										<td>
											{item.probabilidades.map((prob, i) => (
												<div key={i}>
													Clase {i + 3}: {prob.toFixed(4)}
												</div>
											))}
										</td>
									</tr>
								))
							) : (
								<tr>
									<td colSpan="4">No hay datos aún</td>
								</tr>
							)}
						</tbody>
					</Table>
				</div>
			</Card.Body>
		</Card>
	);
}

export default ClassifiedTexts;
