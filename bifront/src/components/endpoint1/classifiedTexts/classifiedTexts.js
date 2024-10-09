import React from "react";
import { Card, Table } from "react-bootstrap";
import "./classifiedTexts.css";
function ClassifiedTexts() {
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
								<th>First Name</th>
								<th>Last Name</th>
								<th>Username</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>1</td>
								<td>Mark</td>
								<td>Otto</td>
								<td>@mdo</td>
							</tr>
							<tr>
								<td>2</td>
								<td>Jacob</td>
								<td>Thornton</td>
								<td>@fat</td>
							</tr>
							<tr>
								<td>3</td>
								<td colSpan={2}>Larry the Bird</td>
								<td>@twitter</td>
							</tr>
						</tbody>
					</Table>
				</Card.Text>
			</Card.Body>
		</Card>
	);
}

export default ClassifiedTexts;
