import {useState} from 'react'
import {Routes, Route} from 'react-router-dom'
import Login from './components/Login'
import Home from './components/Home'

function App() {
  // const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  const [loggedIn, setLoggedIn] = useState(false)

  const handleLogin = () => {
    setLoggedIn(true);
  }

  
  return (
    <div className = 'container'>
      {loggedIn ? (
        <Routes>
          <Route path = '/home' element = {<Home />} />
        </Routes>
      ) : (
        <Login onLogin = {handleLogin}/>
      )}
    </div>
)}

export default App;