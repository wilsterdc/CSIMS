const Login = () => {
  return (
    <div>
        <div>
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
                <div>
                    <button>Login</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Login