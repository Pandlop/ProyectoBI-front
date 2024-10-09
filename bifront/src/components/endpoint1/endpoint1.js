import { Col, Row } from "react-bootstrap";
import SideDashboard from "../sideDashboard/sideDashboard";
import UploadFile from "./uploadFile/uploadFile";

function Endpoint1() {
	return (
		<>
			<Row>
				<Col>
					<SideDashboard />
				</Col>
				<Col>
					<Row>
						<UploadFile />
					</Row>
					<Row></Row>
				</Col>
			</Row>
		</>
	);
}
export default Endpoint1;
