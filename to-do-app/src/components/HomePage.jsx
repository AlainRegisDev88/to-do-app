import { useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import profileService from '../services/profileService'


const HomePage = () => {
    const location = useLocation()
    const { message, name } = location.state || {}
    const [user, setUser] = useState(null)
    const [random, setRandom] = useState(0)

    useEffect(() => {
        const fetchUserInfo = async () => {
            try {
                const fetchedUser = await profileService.getPersonalData()
                setUser(fetchedUser)
                console.log(fetchedUser)
                console.log(fetchedUser, "Here")
                // setRandom(Math.random())
            } catch (error) {
                console.error('Failed to load profile', error)
            }
        }

        fetchUserInfo()
    }, [])

    return (
        <div className="user-info">
            <p><strong>{message}, Hello {name}</strong></p>
            {user && (
                <div>
                    <p>User email: {user.email}</p>
                    <p>User id: {user.id}</p>
                    <p>Random Score /100: {random}</p>
                </div>
            )}
        </div>
    );
}

export default HomePage;