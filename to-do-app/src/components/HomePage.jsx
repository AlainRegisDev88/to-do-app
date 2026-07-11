import { useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import profileService from '../services/profileService'
import Header from './Header'
import Sidebar from './Sidebar/Sidebar'
import Footer from './Footer/Footer'
import './HomePage.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleRight } from '@fortawesome/free-regular-svg-icons'


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
                setRandom(Math.random())
            } catch (error) {
                console.error('Failed to load profile', error)
            }
        }

        fetchUserInfo()
    }, [])

    console.log(user)

    return (
        <>
            <Header />

            <div className="home">

                <div className="main">
                    <Sidebar />
                    <div className="content-area">
                        <div className="middle-section">
                            <div className="page-heading">
                                <p className='page-title'>Today</p>
                                <p className="page-subtitle">Wednesday, 8 July <FontAwesomeIcon icon={faArrowAltCircleRight} /> 4 tasks</p>
                            </div>
                            <section className="tasks-section">
                                <div className="task-card active-task">
                                    <div className="checkbox"></div>
                                    <div className="task-title">Task 1 title</div>
                                    <div className="task-tag high-priority-tag">High</div>
                                </div>
                                <div className="task-card active-task">
                                    <div className="checkbox"></div>
                                    <div className="task-title">Task 3 title</div>
                                    <div className="task-tag low-priority-tag">Low</div>
                                </div>
                                <div className="task-card active-task">
                                    <div className="checkbox"></div>
                                    <div className="task-title">Task 4 title</div>
                                    <div className="task-tag medium-priority-tag">Medium</div>
                                </div>
                                <div className="task-card done-task">
                                    <div className="checkbox checked"></div>
                                    <div className="task-title title-done">Task 5 title</div>
                                    <div className="task-tag done-tag">Done</div>
                                </div>
                            </section>
                        </div>

                        <div className="right-panel">
                            <div className="right-panel-header">
                                <p>Progress</p>
                                <div className="stat-card">
                                    <div className="stat-number">1/4</div>
                                    <div className="stat-label">Completed Today</div>
                                </div>
                            </div>

                            <div className="upcoming-tasks">
                                <div className="upcoming-header">
                                    Upcoming
                                </div>
                                <div className="upcoming-body">
                                    <p className="upcoming">Tomorrow - 2 tasks</p>
                                    <p className="upcoming">This Week - 5 tasks</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <Footer />
            </div>
            {/* <div className="user-info">
            <p><strong>{message}, Hello {name}</strong></p>
            <p>how are you?</p>
            {user && (
                <div>
                    <p>User email: {user.email}</p>
                    <p>User id: {user.id}</p>
                    <p>Random Score /100: {random}</p>
                </div>

            
            )}
        </div> */}
        </>
    );
}

export default HomePage;