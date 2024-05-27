import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './components/NavigationBar';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
 

      
      
      
  return (
    <div className='container-fluid'>
    <BrowserRouter>
    <Navbar />
    

    <Routes>
      <Route path='login' element={<Login />} />
      <Route path='signup' element={ <Signup />} />
      <Route path='home' element={ <Home />} />
      
    </Routes>

    <Footer />
    </BrowserRouter>
      

    </div>
  )
}

export default App
