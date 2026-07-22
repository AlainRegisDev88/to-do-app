import { useState } from "react";
import './Login.css'
import { useNavigate, useLocation } from 'react-router-dom'
import authService from "../services/authService";
import { faCheck, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";


const Login = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    const location = useLocation()
    const { successMessage, name } = location.state || {}

    const handleData = async (e) => {
        e.preventDefault()
        setLoading(true)
        setError('')

        try {
            const result = await authService.login(email, password);
            console.log('Login Successful', result.user)
            const user = result.user
            const message = result.message
            navigate('/', { state: { message, name: user?.name || user?.email } })
        } catch (error) {
            setError(
                typeof error === 'string'
                    ? error
                    : error.response?.data?.message || error.message || 'Wrong credentials'
            )
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="login-page">
            {loading && (
                <span class="spinner-container">
                    <FontAwesomeIcon className='loading-spinner' icon={faSpinner} />
                </span>)}
            <div className="login-form">
                <div className="logo-section"><div className="tick-icon"><FontAwesomeIcon icon={faCheck} style={{ color: "#0C447C" }} /></div><div className="logo-text">tasklist</div></div>
                <div className="form-headline">
                    <p className="main-headline">Welcome back</p>
                    <p className="subtext">Log in to see your tasks</p>
                </div>
                <form onSubmit={handleData} action='post'>
                    <div className="form-items">

                        <div className="form-item">
                            <label htmlFor="email">Email</label>
                            <input
                                className='input-box'
                                type="text"
                                name="email"
                                placeholder="name@email.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>

                        <div className="form-item">
                            <label htmlFor="password">Password</label>
                            <input
                                className='input-box'
                                type="password"
                                name="password"
                                placeholder="Enter your password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <div className="forgot-password">
                            <Link className="link" to='/reset-password'>Forgot password?</Link>
                        </div>
                        <div className="class-item">
                            <button type="submit" className="submit-button">Submit</button>
                        </div>

                        <div className="class-item divider-section">
                            <span className="divider-line"></span>
                            <span className="divider-text">or</span>
                            <span className="divider-line"></span>
                        </div>

                        <div className="class-item continue-with-google">
                            <div className="icon"><FontAwesomeIcon icon={faGoogle} /></div><p>Continue with Google</p>
                        </div>
                        <div className="box-footer">
                            <p>Don't have an account? <Link className="link" to="/auth/signup">Sign up</Link></p>
                        </div>
                        <div>{error && (error)}{successMessage && (`${successMessage}, You Can now login ${name}`)}</div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;