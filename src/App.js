// import {useState} from 'react'
import {Routes, Route} from 'react-router-dom'
import Login from './components/Login'
import Home from './components/Home'
import Profile from './components/Profile'

function App() {
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  
  return (
    <div className = 'container'>
      {isLoggedIn ? (
        <Routes>
          <Route path = '/' element = {<Home />} />
          <Route path = '/profile' element = {<Profile />} />
        </Routes>
      ) : (
        <Login />
      )}
    </div>
)}

export default App;