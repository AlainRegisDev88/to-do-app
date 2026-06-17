import './App.css'
import AuthenticationPage from './components/AuthenticationPage'
import { Route, Routes } from 'react-router-dom'
import Login from './components/Login'
import Signup from './components/Signup'
import NotFound from './components/NotFound'

function App() {

  return (
    <>
      <Routes>
        <Route path='/auth' element={<AuthenticationPage />}>
        <Route path='login' element={<Login />} />
        <Route path='signup' element={<Signup />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
