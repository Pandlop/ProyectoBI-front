import { Nav, Navbar } from "react-bootstrap";
// import {FaCalendarAlt} from "react-icons/fa";
// import { MdDashboard, MdSchedule, MdHelp } from "react-icons/md";

// import logo from "./biteLogo.png";

function Card({ children, color = '#2F3C4F' }) {
    return (
      <div className="card" style={{ backgroundColor: color }}>
        {children}
      </div>
    );
  }
  
  export default Card;
