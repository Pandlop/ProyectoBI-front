import { Col, Row } from "react-bootstrap";
import SideDashboard from "../sideDashboard/sideDashboard";
import UploadFile from "./uploadFile/uploadFile";
import "./endpoint1.css";

function Endpoint1() {
	return (
		<>
			<div className="endpoint1-org">
				<SideDashboard />

				<div className="endpoint1-separ">
					<UploadFile />
				</div>
			</div>
		</>
	);
}
export default Endpoint1;
