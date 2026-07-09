import { Link } from "react-router-dom";
import './Header.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-solid-svg-icons";
const Header = () => {
    return (
        <section className="header">
            <div className="logo-section">
                <div className="tick-icon">
                    <FontAwesomeIcon icon={faCheck} style={{ color: "#0C447C" }} />
                </div>
                <div className="logo-text">
                    tasklist
                </div>
            </div>

            <div className="search-section">
                <input type="text" name="search" id="search-box" placeholder="Search tasks" className="search" />
            </div>


            <div className="right-nav-bar">
                <Link className="add-task-button">+ New Task</Link>
                <Link to='/notifications'><FontAwesomeIcon className="bell-icon" icon={faBell} /></Link>
            </div>
        </section>
    );
}

export default Header;