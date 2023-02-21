import { useState } from 'react'
import { useNavigate } from 'react-router-dom'


function Home() {
  const navigate = useNavigate();
  // const [loggedIn, setLoggedIn] = useState(true);

  const handleLogout = () => {
    // localStorage.clear();
    // setLoggedIn(false);
    navigate('/');
  }
  

  return (
    <div>
      <h1>Welcome</h1>
      <p>You have successfully logged in!</p>
      <button onClick = {handleLogout}>Logout</button>
      {/* {loggedIn && (
        <button onClick = {handleLogout}>Logout</button>
      )} */}
    </div>
  )
}

export default Home