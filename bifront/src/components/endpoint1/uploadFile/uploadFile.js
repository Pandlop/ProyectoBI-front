import React, { useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import axios from "axios";
import "./uploadFile.css";
import Image from "./undraw_reading_time_re_phf7 1.svg";

function UploadFile({ setResultados, setConteoClases, setError }) {
	const [file, setFile] = useState(null);

	const handleFileChange = (e) => {
		setFile(e.target.files[0]);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		const formData = new FormData();
		formData.append("file", file);

		try {
			// Llamada a la API para subir el archivo y recibir los resultados
			const response = await axios.post("http://localhost:8000/predict/", formData, {
				headers: {
					"Content-Type": "multipart/form-data",
				},
			});

			const { archivo_xlsx, conteo_clases, textos_y_predicciones } = response.data;

			// Actualizar el estado con los resultados
			setResultados(textos_y_predicciones);
			setConteoClases(conteo_clases);
			console.log(textos_y_predicciones);

			// Descargar el archivo XLSX
			const link = document.createElement("a");
			link.href = `http://localhost:8000/download-predictions/`;
			link.download = archivo_xlsx;
			link.click();

		} catch (err) {
			setError("Error al procesar el archivo.");
		}
	};

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
						<Form onSubmit={handleSubmit}>
							<Form.Group controlId="formFile">
								<Form.Control type="file" onChange={handleFileChange} />
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
