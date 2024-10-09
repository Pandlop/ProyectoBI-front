import { Button, Card, Form } from "react-bootstrap";
import "./uploadFile.css";

function UploadFile() {
	return (
		<>
			<Card className="file-card">
				<Card.Body>
					<Card.Title>Sube tu archivo!</Card.Title>
					<Card.Text>
						El archivo debe ser un <span className="csv-highlight">CSV</span>{" "}
						que contenga los textos que requieras clasificar.
						<Form>
							<Form.Group controlId="formFile">
								<Form.Control type="file" />
							</Form.Group>
							<Button variant="primary" type="submit" className="mt-3">
								Subir archivo
							</Button>
						</Form>
					</Card.Text>
				</Card.Body>
			</Card>
		</>
	);
}
export default UploadFile;
