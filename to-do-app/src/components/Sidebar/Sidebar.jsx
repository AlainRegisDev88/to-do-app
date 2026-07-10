import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import { faFolder, faSun } from "@fortawesome/free-regular-svg-icons";
import { faCalendar } from "@fortawesome/free-regular-svg-icons";
import { faCheck, faGear } from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
    return ( 
        <section className="sidebar">
            <NavLink to="/dashboard"><FontAwesomeIcon icon={faSun} /> Today</NavLink>
            <NavLink to="/upcoming-tasks"><FontAwesomeIcon icon={faCalendar} /> Today</NavLink>
            <NavLink to="/projects"><FontAwesomeIcon icon={faFolder} /> Today</NavLink>
            <NavLink to="/completed-tasks"><FontAwesomeIcon icon={faCheck} /> Today</NavLink>
            <NavLink to="/settings"><FontAwesomeIcon icon={faGear} /> Today</NavLink>
        </section>
     );
}
 
export default Sidebar;