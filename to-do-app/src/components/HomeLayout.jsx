import { Routes, Route, Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer/Footer";
import './HomeLayout.css'

const HomeLayout = () => {
    return ( 
        <>
            <Header />
            <div className="main">
                <Outlet />
            </div>
            <Footer />
        </>
     );
}
 
export default HomeLayout;