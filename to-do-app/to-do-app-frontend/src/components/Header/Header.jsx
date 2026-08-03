import { Link } from "react-router-dom";
import './Header.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import AvatarSkeleton from "../Skeleton/AvatarSkeleton";
import UserNameSkeleton from "../Skeleton/UserNameSkeleton";

const Header = ({ user, loadingUser}) => {

    const formattedName = user?.name
        ? user?.name?.charAt(0).toUpperCase() + user?.name?.slice(1)
        : "";

    const avatarInitial = user?.name
        ? user?.name?.charAt(0).toUpperCase()
        : "";


    return (
        <section className="header">
            <Link to="/" className="logo-section">
                <div className="tick-icon">
                    <FontAwesomeIcon icon={faCheck} style={{ color: "#0C447C" }} />
                </div>
                <div className="logo-text">
                    tasklist
                </div>
            </Link>

            <div className="search-section">
                <input type="text" name="search" id="search-box" placeholder="Search tasks" className="search" />
            </div>


            <div className="right-nav-bar">
                <Link className="add-task-button" to='/new-task'>+ New Task</Link>
                <Link to='/notifications'><FontAwesomeIcon className="bell-icon" icon={faBell} /></Link>
                <div className="user-name">{loadingUser? <UserNameSkeleton /> :formattedName}</div>
                <Link to="/settings" style={{textDecoration: "none"}}className={`${loadingUser ? "": "avatar"}`}>{loadingUser ? <AvatarSkeleton /> :avatarInitial}</Link>
            </div>
        </section>
    );
}

export default Header;