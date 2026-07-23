import './App.css'
import AuthenticationPage from './components/AuthenticationPage'
import { Route, Routes } from 'react-router-dom'
import { useEffect, useState } from 'react'
import profileService from './services/profileService'
import Login from './components/Login'
import Signup from './components/Signup'
import NotFound from './components/NotFound'
import HomePage from './components/HomePage'
import NewTask from './components/NewTask'
import ProjectsPage from './components/projectsPage'
import HomeLayout from './components/HomeLayout'
import SettingsPage from './components/SettingsPage'
import Empty from './components/Empty'

function App() {
  const [user, setUser] = useState([])

      useEffect(() => {
        const fetchUserInfo = async () => {
            try {
                const fetchedUser = await profileService.getPersonalData()
                setUser(fetchedUser)
                // setRandom(Math.random())
            } catch (error) {
                console.error('Failed to load profile', error)
            }
        }

        fetchUserInfo()
    }, [])

  return (
    <>
      <Routes>


        <Route path='/' element={<HomeLayout user={user} />}>
        <Route index element={<HomePage user={user} />}></Route>
        <Route path='/projects' element={<ProjectsPage />} />
        <Route path='/settings' element={<SettingsPage />} />
        <Route path='/upcoming-tasks' element={<Empty />} />
        <Route path='/completed-tasks' element={<Empty />} />
        </Route>

        <Route path='/auth' element={<AuthenticationPage />}>
          <Route path='login' element={<Login />} />
          <Route path='signup' element={<Signup />} />
        </Route>

        <Route path='/new-task' element={<NewTask />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
