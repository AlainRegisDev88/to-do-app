import './App.css'
import AuthenticationPage from './components/AuthenticationPage'
import { Route, Routes } from 'react-router-dom'
import { useEffect, useState, useCallback } from 'react'
import profileService from './services/profileService'
import Login from './components/Login'
import Signup from './components/Signup'
import NotFound from './components/NotFound'
import HomePage from './components/HomePage'
import NewTask from './components/NewTask'
import ProjectsPage from './components/ProjectsPage'
import HomeLayout from './components/HomeLayout'
import SettingsPage from './components/SettingsPage'
import Empty from './components/Empty'
import projectsServices from './services/projectsServices'
import NewProject from './components/Pages/NewProject/NewProject'
import delay from './helpers/delay'
import CompletedTasks from './components/CompletedTasks'
import taskService from './services/tasksService'

function App() {
  const [user, setUser] = useState([])
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(false)
  const [loadingUser, setLoadingUser] = useState(false)
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        setLoadingUser(true)
        const fetchedUser = await profileService.getPersonalData()
        setUser(fetchedUser)
        await delay(1000);
        setLoadingUser(false)
        // setRandom(Math.random())
      } catch (error) {
        console.error('Failed to load profile', error)
      }
    }

    fetchUserInfo()
  }, [])

  const getProjects = useCallback(async () => {
    setLoading(true);

    const results = await projectsServices.fetchProjects();
    setProjects(results.projects);
    setLoading(false);
  }, []);

  useEffect(() => {
    getProjects();
  }, []);

  // fetch tasks

  
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

  return (
    <>
      <Routes>


        <Route path='/' element={<HomeLayout user={user} loadingUser={loadingUser} />}>
          <Route index element={<HomePage user={user} tasks={tasks} setTasks={setTasks} />}></Route>
          <Route path='/projects' element={<ProjectsPage loading={loading} projects={projects} />} />
          <Route path='/settings' element={<SettingsPage user={user} />} />
          <Route path='/upcoming-tasks' element={<Empty />} />
          <Route path='/completed-tasks' element={<CompletedTasks tasks={tasks} />} />
        </Route>

        <Route path='/auth' element={<AuthenticationPage />}>
          <Route path='login' element={<Login />} />
          <Route path='signup' element={<Signup />} />
        </Route>

        <Route path='/new-task' element={<NewTask projects={projects} />} />
        <Route path='/new-project' element={<NewProject projects={projects} setProjects={setProjects} getProjects={getProjects} />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
