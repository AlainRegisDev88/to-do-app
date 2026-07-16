import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer/Footer";
import './HomeLayout.css'

const HomeLayout = () => {
    return ( 
        <>
            <Header />
            <div className="main">
                
            </div>
            <Footer />
        </>
     );
}
 
export default HomeLayout;