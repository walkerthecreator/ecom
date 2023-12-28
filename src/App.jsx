import { Route, Routes } from 'react-router-dom'
import './App.css'
import Homepage from './pages/Homepage'
import NavBar from './components/NavBar'
import Login from './components/Login'
import { useContext, useEffect } from 'react'
import Store from './context/store'

function App() {

    const {setUser} = useContext(Store)

    useEffect(()=>{
        const data = localStorage.getItem("user")
        if(data) setUser(JSON.parse(data))
        
    } , [])


  return (
    <>
      <NavBar></NavBar>
      <Routes>
        <Route path='/' element={<Homepage/>}></Route>
        <Route path='/login' element={ <Login/> }></Route>
        {/* <Route path='/login' element={<Homepage/>}></Route>
        <Route path='/signup' element={<Homepage/>}></Route> */}
      </Routes>
    </>
  )
}

export default App
