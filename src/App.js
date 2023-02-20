import {Routes, Route} from 'react-router-dom'
import Login from './components/Login'
import Home from './components/Home'

function App() {
  
  return (
    <div className = 'container'>
      <div>
        <Login />
      </div>
      <Routes>
        <Route path = '/home' component = {<Home />} />
      </Routes>
    </div>
)}

export default App;