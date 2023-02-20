import {Routes, Route} from 'react-router-dom'
import Login from './components/Login'
import Home from './components/Home'

function App() {
  
  return (
    <div>
      <div className = 'container'>
        <Login />
      </div>
      {/* <Routes>
        <Route exact path = '/' component = {<Login />} />
        <Route path = '/home' component = {<Home />} />
      </Routes> */}
    </div>
)}

export default App;