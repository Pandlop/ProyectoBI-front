import { Col, Row } from "react-bootstrap";
import SideDashboard from "../sideDashboard/sideDashboard";
import UploadFile from "./uploadFile/uploadFile";
import "./endpoint1.css";
import ClassifiedTexts from "./classifiedTexts/classifiedTexts";
import Statistics from "./statistics/statistics";

function Endpoint1() {
	return (
		<>
			<div className="endpoint1-org">
				<SideDashboard />

				<div className="endpoint1-separ">
					<UploadFile />
					<div className="endpoint1-data">
						<ClassifiedTexts />
						<Statistics />
					</div>
				</div>
			</div>
		</>
	);
}
export default Endpoint1;
