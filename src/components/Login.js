import './Login.css'

const Login = () => {
  return (
    <div>
        <div className = 'cover'>
            <h2 className = 'head'>CSIMS</h2>
            <form>
                <div>
                    <label className = 'label'>Username</label>
                    <br />
                    <input type = 'text' placeholder = 'Username'></input>
                </div>
                <div>
                    <label className = 'label'>Password</label>
                    <br />
                    <input type = 'password' placeholder = 'Password'></input>
                </div>
                <div>
                    <button className = 'login-btn'>Login</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Login