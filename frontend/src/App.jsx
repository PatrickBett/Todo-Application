import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Landingpage from './components/Landingpage';
import Navbar from './components/NavigationBar';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import Footer from './components/Footer';
import Protected from './components/Protected';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import NotFound from './components/NotFound';


function Logout(){
  localStorage.clear()
  return <Navigate to='/login' />
}

function RegisterAndLogout(){
  localStorage.clear()
  return <Signup />
}

function App() {
       
  return (
    <div>
    <BrowserRouter>
    <Navbar />
    

    <Routes>
      <Route path='/' element={<Landingpage />} />
      <Route path='login' element={<Login />} />
      <Route path='logout' element={<Logout />} />
      <Route path='signup' element={ <RegisterAndLogout />} />
      <Route path='home' element={<Protected>{ <Home />}</Protected>} />
      <Route path='*' element={ <NotFound />} />
      
    </Routes>

    <Footer />
    </BrowserRouter>
      

    </div>
  )
}

export default App
