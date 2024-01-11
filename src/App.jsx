import { Route, Routes } from 'react-router-dom'
import './App.css'
import Homepage from './pages/Homepage'
import NavBar from './components/NavBar'
import Login from './components/Login'
import Cart from './pages/Cart'
import Product from './pages/Product'
import Landing from './pages/Landing'

function App() {

  return (
    <>
      <NavBar></NavBar>
      <Routes>
        <Route path='/' element={<Homepage/>}></Route>
        <Route path='/home' element={<Landing/>}></Route>
        <Route path='/login' element={ <Login/> }></Route>
        <Route path='/cart' element={ <Cart/> }></Route>
        <Route path='/product/:id' element={ <Product/> }></Route>
      </Routes>
    </>
  )
}

export default App
