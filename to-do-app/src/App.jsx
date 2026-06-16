import './App.css'
import AuthenticationPage from './components/AuthenticationPage'
import { Route, Routes } from 'react-router-dom'


function App() {

  return (
    <>
      <Routes>
        <Route path='/login' element={<AuthenticationPage />} />
      </Routes>
    </>
  )
}

export default App
