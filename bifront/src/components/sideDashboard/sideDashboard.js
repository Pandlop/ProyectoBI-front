import { Nav, Navbar } from "react-bootstrap";
// import {FaCalendarAlt} from "react-icons/fa";
// import { MdDashboard, MdSchedule, MdHelp } from "react-icons/md";
import "./sideDashboard.css";
// import logo from "./biteLogo.png";

function SidebarDashboard() {
	return (
		<div className="sidebar-dashboard">
			<Navbar bg="light" className="flex-column vh-100">
				<Navbar.Brand href="#home" className="mx-auto my-3">
					<img src="" alt="Bite Back" className="logo" width="100" />
				</Navbar.Brand>
				<Nav className="flex-column w-100">
					<Nav.Link
						href="/"
						className="d-flex align-items-center sidebar-item active"
					>
						{/* <MdDashboard className="sidebar-icon" /> */}
						Endpoint 1
					</Nav.Link>
					<Nav.Link
						href="/reentrenar"
						className="d-flex align-items-center sidebar-item"
					>
						{/* <FaCalendarAlt className="sidebar-icon" /> */}
						Endpoint 2
					</Nav.Link>
				</Nav>
			</Navbar>
		</div>
	);
}
export default SidebarDashboard;
