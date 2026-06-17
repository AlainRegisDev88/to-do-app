import './AuthenticationPage.css'
import { Outlet } from "react-router-dom";
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
// import { useEffect, useState } from 'react';


const AuthenticationPage = () => {
    const location = useLocation()
    const currentPath = location.pathname
    console.log(currentPath)

    return (
        <section className="authentication-container">
            <div className="auth-body">
                <div className="auth-header">



                </div>
                <Outlet />
                <div className="auth-link-container">

                    {currentPath === '/auth/login'
                        ? <Link className='auth-link' to='/auth/signup'>Go to Signup</Link>
                        : <Link className='auth-link' to='/auth/login'>Go to Login</Link>

                    }
                </div>
            </div>


        </section>

    );
}

export default AuthenticationPage;