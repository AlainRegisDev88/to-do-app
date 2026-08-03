import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import './HomeLayout.css'
import Sidebar from "./Sidebar/Sidebar";
import { Navigate } from "react-router-dom";

const HomeLayout = ({ user, loadingUser }) => {

    const token = localStorage.getItem('token'); // Replace with your auth state

    // If no token, redirect to login
    if (!token) {
        return <Navigate to="/auth/login" replace />;
    }

    else{return (
        <>
            <Header user={user} loadingUser={loadingUser} />
            <div className="main">
                <Sidebar />
                <Outlet />
            </div>
            <Footer />
        </>
    )}
}

export default HomeLayout;