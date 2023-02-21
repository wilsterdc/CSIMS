import { useState } from 'react'


function Home() {

  const handleLogout = () => {
    localStorage.clear();
    window.location.reload();
  }
  

  return (
    <div>
      <h1>Welcome</h1>
      <p>You have successfully logged in!</p>
      <button onClick = {handleLogout}>Logout</button>
      {/* {loggedIn && (
        <button onClick = {handleLogout}>Logout</button>
      )} */}
      <a href = '/profile'>Profile</a>
    </div>
  )
}

export default Home