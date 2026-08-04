import './AuthenticationPage.css'
import { Outlet } from "react-router-dom";
import { Navigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
// import { useEffect, useState } from 'react';


const AuthenticationPage = () => {
    const location = useLocation()
    const currentPath = location.pathname
    console.log(currentPath)

    if (location.pathname === '/auth') {
    return <Navigate to="/auth/login" replace />
  }

    return (
        <section className="authentication-container">
            <div className="auth-body">
                <div className="auth-header">



                </div>
                <Outlet />
                
            </div>


        </section>

    );
}

export default AuthenticationPage;