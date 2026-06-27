import { useEffect, useState } from "react";
import './Login.css'
import axios from "axios";
import { useNavigate, useLocation } from 'react-router-dom'


const Login = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [data, setData] = useState([])
    const [ failMessage, setFailMessage ] = useState('')

    const location = useLocation()
    const {successMessage, name} = location.state || {}

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get('/api/login-info')
            setData(response.data)
        }

        fetchData()
    }, [])

    const handleData = (e) => {
        e.preventDefault()

        const handleLogin = () => {
            const user = data.find((info) => {
                return info.email === email
            })

            if(user && user.password === password){
                const message = 'Login Successful';
                navigate('/', {state: {message: message, name: user.name}});
            } 
            else{
                setFailMessage("Wrong credentials")
                console.log(failMessage)
                console.log(password)
            }
        }

        handleLogin()

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
                        <div>{failMessage}{`${successMessage}, You Can now login ${name}`}</div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;