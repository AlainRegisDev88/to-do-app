import { useState, useEffect } from 'react'
import axios from 'axios'
import {v4 as uuidv4} from 'uuid'
import './Signup.css'
import { useNavigate } from 'react-router-dom'

const Signup = () => {
    // this page states
    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const navigate  = useNavigate()

    // other states
    const [data, setData] = useState([])
    const [message, setMessage] = useState('')

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get('/api/login-info')
            console.log(response.data)
            setData(response.data)
        }

        fetchData()

    }, [])


    const handleData = async (e) => {
        e.preventDefault()

        if (email != data.email && password === confirmPassword) {
            const newUser = {
                id: uuidv4(),
                name: fullName,
                email: email,
                password: password
            }

        
            const response = await axios.post('/api/login-info', newUser)

            const successMessage = response.data.message
            console.log(successMessage)

            navigate('/auth/login', {state: {successMessage: successMessage, name: fullName}})
        }
        else{
            setMessage('Something Went Wrong :(')
            console.log(message)
        }



    }

    return (
        <div className="login-page">

            <div className="login-form">
                <h2>Login</h2>
                <form onSubmit={handleData} action='post'>
                    <div className="form-items">

                        <div className="form-item">
                            <label htmlFor="email">Full Name</label>
                            <input
                                className='input-box'
                                type="text"
                                name="email"
                                value={fullName}
                                onChange={(e) => setFullName(e.target.value)}
                                required
                            />
                        </div>

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
                            <label htmlFor="email">Password</label>
                            <input
                                className='input-box'
                                type="text"
                                name="email"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>

                        <div className="form-item">
                            <label htmlFor="password">Confirm Password</label>
                            <input
                                className='input-box'
                                type="password"
                                name="password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                required
                            />
                        </div>
                        <div className="message">{message}</div>

                        <div className="class-item">
                            <button type="submit" className="submit-button">Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Signup;