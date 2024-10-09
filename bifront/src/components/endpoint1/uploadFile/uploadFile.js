import { Button, Card, Form } from "react-bootstrap";
import "./uploadFile.css";

function UploadFile() {
	return (
		<Card className="file-card">
			<Card.Body>
				<Card.Title>
					<h2 className="upload-title">Sube tu archivo!</h2>
				</Card.Title>
				<Card.Text>
					<p className="upload-text">
						El archivo debe ser un <span className="csv-highlight">CSV</span>{" "}
						que contenga los{" "}
						<span className="csv-highlight">
							textos que requieras clasificar.
						</span>
					</p>
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
	);
}
export default UploadFile;
