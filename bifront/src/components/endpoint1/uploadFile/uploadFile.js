import { Button, Card, Form } from "react-bootstrap";
import "./uploadFile.css";
import Image from "./undraw_reading_time_re_phf7 1.svg";

function UploadFile() {
	return (
		<Card className="file-card">
			<Card.Body
				style={{
					display: "flex",
					justifyContent: "space-between",
					alignItems: "center",
				}}
			>
				<div className="file-card-1">
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
				</div>

				<div style={{ position: "relative", maxWidth: "40%" }}>
					<img
						src={Image}
						alt="Decorative"
						style={{
							position: "absolute",
							right: "-3em",
							top: "-10em",
							width: "20rem",
							height: "20rem",
							zIndex: 10000,
						}}
					/>
				</div>
			</Card.Body>
		</Card>
	);
}
export default UploadFile;
