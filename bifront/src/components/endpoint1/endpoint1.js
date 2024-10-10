import { Col, Row } from "react-bootstrap";
import SideDashboard from "../sideDashboard/sideDashboard";
import UploadFile from "./uploadFile/uploadFile";
import "./endpoint1.css";
import ClassifiedTexts from "./classifiedTexts/classifiedTexts";
import Statistics from "./statistics/statistics";
import { useState } from "react";

function Endpoint1() {
	const [response, setResponse] = useState(null);

	return (
		<>
			<div className="endpoint1-org">
				<SideDashboard />

				<div className="endpoint1-separ">
					<UploadFile setResponse={setResponse} />
					<div className="endpoint1-data">
						<ClassifiedTexts response={response} />
						<Statistics response={response} />
					</div>
				</div>
			</div>
		</>
	);
}
export default Endpoint1;
