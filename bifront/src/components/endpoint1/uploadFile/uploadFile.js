import { Button, Card, Form } from "react-bootstrap";
import "./uploadFile.css";
import Image from "./undraw_reading_time_re_phf7 1.svg";
import { useState } from "react";

function UploadFile({ setResponse }) {
	const [file, setFile] = useState(null);

	function handleSubmit(e) {
		e.preventDefault();
		if (file) {
			const formData = new FormData();
			formData.append("file", file);
			fetch("http://127.0.0.1:8000/predict", {
				method: "POST",
				body: formData,
			})
				.then((res) => res.json())
				.then((data) => {
					setResponse(data);
					console.log(data);
					const link = document.createElement("a");
					link.href = `http://localhost:8000/download-predictions/`;
					link.download = data.archivo_xlsx;
					link.click();
				})
				.catch((err) => console.error(err));
		}
	}

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
					<div>
						<p className="upload-text">
							El archivo debe ser un <span className="csv-highlight">CSV</span>{" "}
							que contenga los{" "}
							<span className="csv-highlight">
								textos que requieras clasificar.
							</span>
						</p>
						<div>
							<Form onSubmit={handleSubmit}>
								<Form.Group controlId="formFile">
									<Form.Control
										type="file"
										onChange={(e) => setFile(e.target.files[0])}
									/>
								</Form.Group>
								<Button variant="primary" type="submit" className="mt-3">
									Subir archivo
								</Button>
							</Form>
						</div>
					</div>
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
