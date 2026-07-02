import { useState } from "react";
import './Login.css'
import axios from "axios";
import { useNavigate, useLocation } from 'react-router-dom'
import authService from "../services/authService";


const Login = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError ] = useState('')
    const [loading, setLoading] = useState(false)

    const location = useLocation()
    const {successMessage, name} = location.state || {}

    const handleData = async (e) => {
        e.preventDefault()
        setLoading(true)
        setError('')

        try {
            const result = await authService.login(email, password );
            console.log('Login Successful', result.user)
            const user =  result.user
            const message = result.data.message
            navigate('/', {state: {message, name: user?.name || user?.email}})
        } catch (error) {
            setError(error.toString() || 'Wrong credentials')
        }finally{
            setLoading(false)
        }
    }

    return (
        <div className="login-page">

            <div className="login-form">
                <h2>Login</h2>
                <form onSubmit={handleData} action='post'>
                    <div className="form-items">

                        <div className="form-item">
                            <label htmlFor="email">Email</label>
                            <input
                                className='input-box'
                                type="text"
                                name="email"
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
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <div className="class-item">
                            <button type="submit" className="submit-button">Submit</button>
                        </div>
                        <div>{error}{successMessage && (`${successMessage}, You Can now login ${name}`)}</div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;