
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import AddProduct from './Components/AddProduct'
import EditProduct from './Components/EditProduct'
import AnimatedBackground from './Components/AnimatedBackground'


function App() {

  return (
<>
{/* <AnimatedBackground /> */}
   <Navbar />

   <Routes>
     <Route path='/' element = {<Home />}></Route>
     <Route path='/addProduct' element = {<AddProduct />}></Route>
     <Route path='/editProduct/:id' element = {<EditProduct />}></Route>
   </Routes>

</>
  )
}

export default App 
