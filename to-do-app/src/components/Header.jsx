import { Link } from "react-router-dom";

const Header = () => {
    return ( 
        <div className="header">
            <div className="logo">
                TASK MANAGER
            </div>
            <div className="nav">
                <Link to='/'>Home</Link>
                <Link to='/tasks'></Link>
            </div>
        </div>
     );
}
 
export default Header;