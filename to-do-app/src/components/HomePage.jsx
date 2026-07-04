import { useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import profileService from '../services/profileService'

const HomePage = () => {
    const location = useLocation()
    const { message, name } = location.state || {}
    const [user, setUser] = useState(null)

    useEffect(() => {
        const fetchUserInfo = async () => {
            try {
                const response = await profileService.getPersonalData()
                setUser(response.user)
                console.log(response.user)
            } catch (error) {
                console.error('Failed to load profile', error)
            }
        }

        fetchUserInfo()
    }, [])

    return (
        <p><strong>{message}, Hello {name}</strong></p>
    );
}

export default HomePage;