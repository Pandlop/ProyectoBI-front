import { Nav, Navbar } from "react-bootstrap";
// import {FaCalendarAlt} from "react-icons/fa";
// import { MdDashboard, MdSchedule, MdHelp } from "react-icons/md";
import "./cardStyle.css";

// import logo from "./biteLogo.png";

function Card({ children, color = '#33415C' }) {
    return (
      <div className="general-card" style={{ backgroundColor: color }}>
        {children}
      </div>
    );
  }
  
  export default Card;
