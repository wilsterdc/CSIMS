import './Login.css'

const Login = () => {
  return (
    <div>
        <div className = 'cover'>
            <h1 className = 'header'>Login</h1>
            <form>
                <div>
                    <label>Username</label>
                    <br />
                    <input type = 'text' placeholder = 'Username'></input>
                </div>
                <div>
                    <label>Password</label>
                    <br />
                    <input type = 'password' placeholder = 'Password'></input>
                </div>
                <div className = 'login-btn'>
                    <button>Login</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Login