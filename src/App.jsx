import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import UserProfile from './pages/UserProfile'
import Create from './pages/Create'
import Edit from './pages/Edit'
import Footer from './components/Footer'
import Navbarr from './components/Navbarr'

function App() {

// ! the goble state id manage usestate 
  const [id,setid] = useState(0)
 

  return (
    <>

  
    <>
    <Navbarr />
    </>
 
{/*  this is routes send the value use to props method  */}
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/user' element={<UserProfile setid={setid} />} />
      <Route path='/create' element={<Create />} />
      <Route path='/edit/:id' element={<Edit id={id} />}/>
    </Routes>


  <>
  <Footer />
  </>
   
    </>
  )
}

export default App
