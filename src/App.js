// import {useState} from 'react'
import {Routes, Route} from 'react-router-dom'
import Nav from './components/Nav'
import Landing from './components/Landing'
import Enrollment from './components/Enrollment'
import Login from './components/Login'
import Home from './components/Home'
import Profile from './components/Profile'

function App() {
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  
  return (
    <div className = 'container'>
      {isLoggedIn ? (
        <Routes>
          <Route path = '/home' element = {<Home />} />
          <Route path = '/profile' element = {<Profile />} />
        </Routes>
      ) : (
        <>
        <Nav />
          <Routes>
          <Route path = '/' element = {<Landing />} />
          <Route path = '/login' element = {<Login />} />
          <Route path = '/enrollment' element = {<Enrollment />} />
        </Routes>
        </>
        
      )}
    </div>
)}

export default App;