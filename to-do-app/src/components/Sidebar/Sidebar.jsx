import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import { faFolder, faSun } from "@fortawesome/free-regular-svg-icons";
import { faCalendar } from "@fortawesome/free-regular-svg-icons";
import { faCheck, faGear } from "@fortawesome/free-solid-svg-icons";
import './Sidebar.css'

const Sidebar = () => {
    return ( 
        <section className="sidebar">
            <NavLink className={({ isActive }) => isActive ? 'nav-item active-link' : 'nav-item'} to="/dashboard"><FontAwesomeIcon icon={faSun} /><p className="navlink-text">Today</p></NavLink>
            <NavLink className={({ isActive }) => isActive ? 'nav-item active-link' : 'nav-item'} to="/upcoming-tasks"><FontAwesomeIcon icon={faCalendar} /><p className="navlink-text">Upcoming</p></NavLink>
            <NavLink className={({ isActive }) => isActive ? 'nav-item active-link' : 'nav-item'} to="/projects"><FontAwesomeIcon icon={faFolder} /><p className="navlink-text">Projects</p></NavLink>
            <NavLink className={({ isActive }) => isActive ? 'nav-item active-link' : 'nav-item'} to="/completed-tasks"><FontAwesomeIcon icon={faCheck} /><p className="navlink-text">completed</p></NavLink>
            <NavLink className={({ isActive }) => isActive ? 'nav-item active-link' : 'nav-item'} to="/settings"><FontAwesomeIcon icon={faGear} /><p className="navlink-text">Settings</p></NavLink>
        </section>
     );
}
 
export default Sidebar;