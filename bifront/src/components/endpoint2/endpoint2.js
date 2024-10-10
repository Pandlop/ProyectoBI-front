import { Button, Form } from "react-bootstrap";
import { useState } from "react";
import Card from "../cardComponent/card";
import SideDashboard from "../sideDashboard/sideDashboard";
import "./endpoint2Styles.css";
import "../cardComponent/cardStyle.css";
import RocketImage from "./uploadFile/carbon_ibm-watson-machine-learning.png";
import recallImage from "./uploadFile/ion_reload-circle-outline.png";
import precisionImage from "./uploadFile/pajamas_issue-type-objective.png";
import HeatmapChart from "./heatmap/heatmapChart";
import {
	Chart as ChartJS,
	ArcElement,
	Tooltip,
	Legend,
	LinearScale,
	CategoryScale,
} from "chart.js";

// Registrar todos los elementos
ChartJS.register(ArcElement, Tooltip, Legend, LinearScale, CategoryScale);

function Endpoint2() {
	const [file, setFile] = useState(null);
	const [response, setResponse] = useState(null);

	function handleSubmit(e) {
		e.preventDefault();
		if (file) {
			const formData = new FormData();
			formData.append("file", file);
			fetch("http://127.0.0.1:8000/retrain", {
				method: "POST",
				body: formData,
			})
				.then((res) => res.json())
				.then((data) => {
					setResponse(data);
					console.log(data);
				})
				.catch((err) => console.error(err));
		}
	}

	return (
		<>
			<div className="endpoint1-org">
				<SideDashboard />

				<div className="cards-container">
					<Card
						color="#33415C"
						style={{
							background: "linear-gradient(201deg, #979DAC 10%, #3D4046 100%)",
						}}
					>
						<div className="card-text-span-container">
							<span className="card-upload-csv-span-white">Entrena un </span>
							<span className="card-upload-csv-span-blue">nuevo modelo</span>
							<span className="card-upload-csv-span-white">
								{" "}
								de clasificacion con un{" "}
							</span>
							<span className="card-upload-csv-span-blue">CSV</span>
						</div>

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
					</Card>

					<Card color="#33415C">
						<img
							src={RocketImage}
							alt="Descripción de la imagen 1"
							className="card-image"
						/>
						<h4 className="title-card-measure">F1 Score</h4>
						<p className="measure-number">
							{response ? parseFloat(response.f1_score).toFixed(3) : "0"}%{" "}
						</p>
					</Card>

					<Card color="#33415C">
						<img
							src={recallImage}
							alt="Descripción de la imagen 2"
							className="card-image"
						/>
						<h4 className="title-card-measure">Recall</h4>
						<p className="measure-number">
							{response ? parseFloat(response.recall).toFixed(3) : "0"}%
						</p>
					</Card>

					<Card
						color="#33415C"
						style={{
							background: "linear-gradient(46deg, #0353A4 10%, #011F3E 100%)",
						}}
					>
						<img
							src={precisionImage}
							alt="Descripción de la imagen 3"
							className="card-image"
						/>
						<h4 className="title-card-measure">Precision</h4>
						<p className="measure-number">
							{response ? parseFloat(response.accuracy).toFixed(3) : "0"}%
						</p>
					</Card>

					<div className="heatmap">
						<h1>Heatmap</h1>
						<HeatmapChart />
					</div>
				</div>
			</div>
		</>
	);
}
export default Endpoint2;
