import {Routes, Route} from 'react-router-dom'
import Login from './components/Login'
import Home from './components/Home'

function App() {
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

  
  return (
    <div className = 'container'>
      {isLoggedIn ? (
        <Routes>
          <Route path = '/home' element = {<Home />} />
        </Routes>
      ) : (
        <Login />
      )}
    </div>
)}

export default App;