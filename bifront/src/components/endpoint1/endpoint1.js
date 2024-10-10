import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import SideDashboard from "../sideDashboard/sideDashboard";
import UploadFile from "./uploadFile/uploadFile";
import "./endpoint1.css";
import ClassifiedTexts from "./classifiedTexts/classifiedTexts";
import Statistics from "./statistics/statistics";

function Endpoint1() {
	const [resultados, setResultados] = useState([]);
	const [conteoClases, setConteoClases] = useState({});
	const [error, setError] = useState(null);

	return (
		<>
			<div className="endpoint1-org">
				<SideDashboard />

				<div className="endpoint1-separ">
					<UploadFile setResultados={setResultados} setConteoClases={setConteoClases} setError={setError} />
					{error && <p style={{ color: "red" }}>{error}</p>}
					<div className="endpoint1-data">
						<ClassifiedTexts resultados={resultados} />
						<Statistics conteoClases={conteoClases} />
					</div>
				</div>
			</div>
		</>
	);
}

export default Endpoint1;
