import { Nav, Navbar } from "react-bootstrap";
// import {FaCalendarAlt} from "react-icons/fa";
// import { MdDashboard, MdSchedule, MdHelp } from "react-icons/md";
import "./sideDashboard.css";
import e1 from "./carbon_machine-learning-model.svg";
import e2 from "./material-symbols_model-training-outline-rounded.svg";

function SideDashboard() {
	return (
		<div className="sidebar-dashboard">
			<Navbar className="flex-column vh-100">
				<Navbar.Brand href="/" className="mx-auto my-3">
					<h1>UNFPA</h1>
				</Navbar.Brand>
				<Nav className="flex-column w-100 items">
					<Nav.Link href="/" className="sidebar-item">
						<img src={e1} alt="logo" className="logo" />
						<label>Endpoint 1</label>
					</Nav.Link>
					<Nav.Link href="/reentrenar" className="sidebar-item">
						<img src={e2} alt="logo" className="logo" />
						<label>Endpoint 1</label>
					</Nav.Link>
				</Nav>
			</Navbar>
		</div>
	);
}
export default SideDashboard;
