import { Nav, Navbar } from "react-bootstrap";
// import {FaCalendarAlt} from "react-icons/fa";
// import { MdDashboard, MdSchedule, MdHelp } from "react-icons/md";
import "./sideDashboard.css";
// import logo from "./biteLogo.png";

function SideDashboard() {
	return (
		<div className="sidebar-dashboard">
			<Navbar className="flex-column vh-100">
				<Navbar.Brand href="/" className="mx-auto my-3">
					{/* <img src="" alt="Bite Back" className="logo" width="100" /> */}
					<h1>UNFPA</h1>
				</Navbar.Brand>
				<Nav className="flex-column w-100 items">
					<Nav.Link href="/" className="sidebar-item">
						{/* <MdDashboard className="sidebar-icon" /> */}
						Endpoint 1
					</Nav.Link>
					<Nav.Link href="/reentrenar" className="sidebar-item">
						{/* <MdDashboard className="sidebar-icon" /> */}
						Endpoint 2
					</Nav.Link>
				</Nav>
			</Navbar>
		</div>
	);
}
export default SideDashboard;
