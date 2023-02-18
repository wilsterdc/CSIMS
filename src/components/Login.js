import './Login.css'

const Login = () => {
  return (
    <div>
        <div className = 'cover'>
            <h2>CSIMS</h2>
            <form>
                <div>
                    <input className = 'login-input' type = 'text' placeholder = 'Username'></input>
                </div>
                <div>
                    <input className = 'login-input' type = 'password' placeholder = 'Password'></input>
                </div>
                <div>
                    <p id = 'failed'>Login failed! Incorrect username or password.</p>
                </div>
                <div>
                    <p className = 'reset'>Forgot password? <br />Please contact the Office of the Registrar 
                        through the following contact number: <strong><em>(044) 769 2021</em></strong> or
                         through email; <a href = "mailto:inquiries@collegeofmaryimmaculate.edu.ph" target = 'blank'>
                            inquiries@collegeofmaryimmaculate.edu.ph</a>
                    </p>
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