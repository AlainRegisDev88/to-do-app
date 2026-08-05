import './App.css'
import AuthenticationPage from './components/Authentication/AuthenticationPage'
import { Route, Routes } from 'react-router-dom'
import { useEffect, useState, useCallback } from 'react'
import profileService from './services/profileService'
import Login from './components/Authentication/Login'
import Signup from './components/Authentication/Signup'
import NotFound from './components/NotFound'
import HomePage from './components/Pages/HomePage/HomePage'
import NewTask from './components/Pages/TasksPages/NewTask'
import ProjectsPage from './components/Pages/Projects/ProjectsPage'
import HomeLayout from './components/HomeLayout'
import SettingsPage from './components/Pages/Settings/SettingsPage'
import Empty from './components/Empty'
import projectsServices from './services/projectsServices'
import NewProject from './components/Pages/Projects/NewProject'
import delay from './helpers/delay'
import CompletedTasks from './components/Pages/TasksPages/CompletedTasks'
import taskService from './services/tasksService'
import Project from './components/Pages/Projects/Project'
import { useNavigate } from 'react-router-dom'

function App() {
  const [user, setUser] = useState(null)
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(false)
  const [loadingUser, setLoadingUser] = useState(false)
  const [tasks, setTasks] = useState([])
  const [ activeProjectId, setActiveProjectId] = useState(null)
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        setLoadingUser(true)
        const fetchedUser = await profileService.getPersonalData()
        setUser(fetchedUser)
        await delay(1000);
        // setRandom(Math.random())
      } catch (error) {
        console.error('Failed to load profile', error)
      }
      finally {
        setLoadingUser(false)
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

  const handleProjectSelect = (id) => {
    setActiveProjectId(id); // Update your raised state
    navigate(`/project/${id}`); // Update the URL dynamically
  };

  return (
    <>
      <Routes>
        <Route path='/' element={<HomeLayout user={user} loadingUser={loadingUser} />}>
          <Route index element={<HomePage user={user} tasks={tasks} setTasks={setTasks} />}></Route>
          <Route path='/projects' element={<ProjectsPage loading={loading} projects={projects}  onSelectProject={handleProjectSelect} />} />
          <Route path='/settings' element={<SettingsPage user={user} setUser={setUser} />} />
          <Route path='/upcoming-tasks' element={<Empty />} />
          <Route path='/completed-tasks' element={<CompletedTasks tasks={tasks} />} />
          <Route path={`/project/:projectId`} element={<Project  projects={projects} tasks={tasks} activeProjecttId={activeProjectId} />} />
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
