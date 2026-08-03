import { Outlet, Navigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer/Footer";
import "./HomeLayout.css";
import Sidebar from "./Sidebar/Sidebar";

const HomeLayout = ({ user, loadingUser }) => {
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/auth/login" replace />;
  }

  return (
    <div className="home-layout">
      <Header user={user} loadingUser={loadingUser} />

      <div className="home-layout-main">
        <Sidebar />

        <div className="outlet-content">
          <Outlet />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default HomeLayout;