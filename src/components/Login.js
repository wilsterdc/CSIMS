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
                <br />
                <div>
                    <p className = 'reset'>Forgot password? Please contact the Office of the Registrar 
                        through the following contact number: <em>(044) 769 2021</em> or
                         through email; <a href = "mailto:inquiries@collegeofmaryimmaculate.edu.ph" target="_blank">
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