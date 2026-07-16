import './App.css'
import AuthenticationPage from './components/AuthenticationPage'
import { Route, Routes } from 'react-router-dom'
import Login from './components/Login'
import Signup from './components/Signup'
import NotFound from './components/NotFound'
import HomePage from './components/HomePage'
import NewTask from './components/NewTask'
import ProjectsPage from './components/projectsPage'
import HomeLayout from './components/HomeLayout'

function App() {

  return (
    <>
      <Routes>


        <Route path='/' element={<HomeLayout />}>
        <Route index element={<HomePage />}></Route>
        <Route path='/projects' element={<ProjectsPage />} />
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
