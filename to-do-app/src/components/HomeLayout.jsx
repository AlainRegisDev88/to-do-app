import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer/Footer";
import './HomeLayout.css'
import Sidebar from "./Sidebar/Sidebar";

const HomeLayout = ({user}) => {
    return ( 
        <>
            <Header user={user} />
            <div className="main">
                <Sidebar />
                <Outlet />
            </div>
            <Footer />
        </>
     );
}
 
export default HomeLayout;