import { useEffect, useState } from "react";
import './Login.css'
import axios from "axios";

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [data, setData] = useState([])

    useEffect(() =>{
        const fetchData = async () => {
            const response = await axios.get('/api/login-info')
            setData(response.data)
        }

        console.log(data)

        fetchData()
        
    },[])

    const handleData = (e) => {
        e.preventDefault()


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
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;