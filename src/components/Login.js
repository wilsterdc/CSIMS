import {useState} from 'react'
import './Login.css'

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [successful, setSuccessful] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // axios.get('http;//localhost:8000/students', {
        //     params: {
        //         usrname: username,
        //         password: password
        //     }
        // })
        // .then(response => {
        //     if (response.data.length > 0) {
        //         // Login successful
        //         window.location.href = './home';
        //     } else {
        //         // Login failed
        //         setError('Invalid username or password')
        //     }
        // })
        // .catch(error => {
        //     console.error('Login error!', error);
        //     setError('Login failed! Username or Password is incorrect');

        // })

        try {
            const response = await fetch('http://localhost:8000/students');
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const users = await response.json();
            const user = users.find(
                (u) => u.username === username && u.password === password
            );

            if (user) {
                setSuccessful('Login successfully!');
                alert('Login successfully')
            } else {
                setError('Login failed! Username or Password is incorrect');
                alert('Login failed!')
            }
        } catch (error) {
            console.error('Login error! Username or Password is incorrect', error);
            setError('Login failed! Username or Password is incorrect');
        }

        // Best practice I think. Try to dubug later.
        // try {
        //     const response = await fetch('http://localhost:8000/students', {
        //         method: 'POST',
        //         headers: {
        //             'Content-Type': 'application/json',
        //         },
        //         body: JSON.stringify({username, password}),
        //     });
        //     const data = await response.json();
        //     if (data.error) {
        //         setError(data.error);
        //     } else {
        //         setError('Login successful!');
        //         localStorage.setItem('token', data.token);
        //         window.location.href = '/protected-page'
        //     }
        // } catch (error) {
        //     console.error('Login error! Username or Password is incorrect', error);
        //     setError('Login failed! Username or Password is incorrect');
        // }
    };
    

  return (
    <div>
        <div className = 'cover'>
            <h2>CSIMS</h2>
            <form onSubmit = {handleSubmit}>
                <div>
                    <input 
                        className = 'login-input' 
                        type = 'text' placeholder = 'Username'
                        value = {username}
                        onChange = {(e) => setUsername(e.target.value)}
                        ></input>
                </div>
                <div>
                    <input 
                        className = 'login-input' 
                        type = 'password' placeholder = 'Password'
                        value = {password}
                        onChange = {(e) => setPassword(e.target.value)}
                        ></input>
                </div>
                <div>
                    {successful ? (<p id = 'success'>{successful}</p>) : 
                    error && <p id = 'failed'>{error}</p>}
                </div>
                <div>
                    <p className = 'reset'>
                        Forgot password? <br />
                        Please contact the Office of the Registrar 
                        through the following contact number: <strong><em>(044) 769 2021</em></strong> or
                         through email; {' '} <a href = "mailto:inquiries@collegeofmaryimmaculate.edu.ph" target = 'blank'>
                            inquiries@collegeofmaryimmaculate.edu.ph</a>
                    </p>
                </div>
                <div>
                    <button onClick = {handleSubmit} className = 'login-btn'>Login</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Login