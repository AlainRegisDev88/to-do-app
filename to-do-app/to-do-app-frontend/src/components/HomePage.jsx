// import { useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
// import profileService from '../services/profileService'
import './HomePage.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleRight } from '@fortawesome/free-regular-svg-icons'
import taskService from '../services/tasksService'
import Skeleton from './Skeleton/AvatarSkeleton'


const HomePage = ({ user }) => {
    const [tasks, setTasks] = useState([])
    // const location = useLocation()
    // const { message, name } = location.state || {}
    // const [user, setUser] = useState([])
    // const [random, setRandom] = useState(0)
    const [activeFilter, setActiveFilter] = useState('')
    const [loading, setLoading] = useState(false)
    const [currentId, setCurrentId] = useState("")

    // useEffect(() => {
    //     const fetchUserInfo = async () => {
    //         try {
    //             const fetchedUser = await profileService.getPersonalData()
    //             setUser(fetchedUser)
    //             console.log(user)
    //             // setRandom(Math.random())
    //         } catch (error) {
    //             console.error('Failed to load profile', error)
    //         }
    //     }

    //     fetchUserInfo()
    // }, [])

    const now = new Date()
    const todaysDate = now.toDateString()

    const endOfToday = new Date();
    endOfToday.setHours(23, 59, 59, 999);



    useEffect(() => {
        const fetchTasks = async () => {
            try {
                setLoading(true)
                const response = await taskService.retrieveTasks()
                setLoading(false)
                setTasks(response.data.tasks)
            } catch (error) {
                console.log(error)
            }
        }

        fetchTasks()

    }, [])

    const completeTask = async (e) => {
        e.preventDefault()
        const currentId = e.currentTarget.dataset.id;
        const response = await taskService.retrieveTask(currentId);
    }

    const todayTasks = tasks.filter(task => task.title === "new task")
    console.log(todayTasks.title)


    const filters = ["All", "Today", "This week", "Active", "Done", "High priority", "Medium priority", "Low priority"]



    return (
        <div className="main">
            <div className="content-area">
                <div className="middle-section">
                    <div className="page-heading">
                        <p className='page-title'>Tasks</p>
                        <p className="page-subtitle">{todaysDate} <FontAwesomeIcon icon={faArrowAltCircleRight} /> {tasks.length} tasks</p>
                    </div>

                    <div className="filter-bar">

                        <div className="filter-buttons">
                            {filters.map(filter => {
                                return (
                                    <button
                                        key={filter}
                                        className={`filter-button ${activeFilter === filter ? "active-filter" : ""} ${activeFilter === "" && filter === "All" ? "active-filter" : ""}`}
                                        onClick={() => setActiveFilter(filter)}
                                    >
                                        {filter}
                                    </button>
                                )
                            })}
                        </div>

                    </div>

                    <section className="tasks-section">
                        {tasks.map((task) => {
                            setCurrentId(task.task_id)
                            return (
                                <div key={task.task_id} className="task-card active-task">
                                    <div className="task-card-right">
                                        <div data-id={task.task_id} onClick={completeTask} className={`checkbox ${task.task_status === 'Completed' ? "checked" : ""}`}></div>
                                        <div className={`task-title ${task.task_status === 'Completed' ? "title-done" : ""}`}>{task.title}</div>
                                    </div>
                                    <div className={`task-tag ${task.task_status !== "Completed" ? `${task.priority?.charAt(0).toLowerCase()}${task.priority?.slice(1)}-priority-tag` : ""} ${task.task_status === 'Completed' ? "done-tag" : ""}`}>
                                        {task?.task_status === "Completed" ? "Done" : task.priority}
                                    </div>

                                </div>
                            )
                        })}


                        <>
                            {/* <div className="task-card active-task">
                                <div className="task-card-right">
                                    <div className="checkbox"></div>
                                    <div className="task-title">Task 1 title</div>
                                </div>
                                <div className="task-tag high-priority-tag">High</div>
                            </div>
                            <div className="task-card active-task">
                                <div className="task-card-right">
                                    <div className="checkbox"></div>
                                    <div className="task-title">Task 3 title</div>
                                </div>
                                <div className="task-tag low-priority-tag">Low</div>
                            </div>
                            <div className="task-card active-task">
                                <div className="task-card-right">
                                    <div className="checkbox"></div>
                                    <div className="task-title">Task 4 title</div>
                                </div>
                                <div className="task-tag medium-priority-tag">Medium</div>
                            </div>
                            <div className="task-card done-task">
                                <div className="task-card-right">
                                    <div className="checkbox checked"></div>
                                    <div className="task-title title-done">Task 5 title</div>
                                </div>
                                <div className="task-tag done-tag">Done</div>
                            </div> */}
                        </>
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
    );
}

export default HomePage;