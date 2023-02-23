// import {useState} from 'react'
import {Routes, Route} from 'react-router-dom'
import Nav from './components/Nav'
import Landing from './components/Landing'
import Login from './components/Login'
import Home from './components/Home'
import Profile from './components/Profile'

function App() {
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  
  return (
    <div className = 'container'>
      <Nav />
      {isLoggedIn ? (
        <Routes>
          <Route path = '/home' element = {<Home />} />
          <Route path = '/profile' element = {<Profile />} />
        </Routes>
      ) : (
        <Routes>
        <Route path = '/' element = {<Landing />} />
        <Route path = '/login' element = {<Login />} />
      </Routes>
      )}
    </div>
)}

export default App;