import { useState } from 'react'
import authService from '../services/authService'
import './Signup.css'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

const Signup = () => {
    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const navigate = useNavigate()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    const handleData = async (e) => {
        e.preventDefault()
        setLoading(true)
        setError('')

        if (password !== confirmPassword) {
            setError('Passwords do not match')
            return
        }

        try {
            const newUser = {
                name: fullName,
                email,
                password
            }

            const response = await authService.signup(newUser)
            navigate('/auth/login', { state: { successMessage: response.message, name: response.user.name } })
        } catch (error) {
            setError(typeof error === 'string' ? error : error.response?.data?.message || error.message || 'Error signing you up!')
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="login-page">

            <div className="login-form">
                <div className="logo-section"><div className="tick-icon"><FontAwesomeIcon icon={faCheck} style={{ color: "#0C447C" }} /></div><div className="logo-text">tasklist</div></div>
                <div className="form-headline">
                    <p className="main-headline">Join us</p>
                    <p className="subtext">Sign up to work with us</p>
                </div>
                <form onSubmit={handleData} action='post'>
                    <div className="form-items">

                        <div className="form-item">
                            <label htmlFor="email">Full Name</label>
                            <input
                                className='input-box'
                                type="text"
                                name="email"
                                placeholder='Enter your full name'
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
                                placeholder="name@email.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>

                        <div className="form-item">
                            <label htmlFor="email">Password</label>
                            <input
                                className='input-box'
                                type="password"
                                name="password"
                                placeholder='Enter your password'
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
                                name="confirmPassword"
                                placeholder='Confirm your password'
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                required
                            />
                        </div>
                        <div className="message">{error && (error)}</div>

                        <div className="class-item">
                            <button type="submit" className="submit-button">Signup</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Signup;