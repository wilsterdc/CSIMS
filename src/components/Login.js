import { useState } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import './Login.css'

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [successful, setSuccessful] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

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
                localStorage.setItem('isLoggedIn', true);
                window.location.reload();
            } else {
                setError('Login failed! Username or Password is incorrect');
            }
        } catch (error) {
            console.error('Error fecthing the data!', error);
            setError('An unexpected error occured while fetching data.');
        }

        // use for adding accounts
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
        //         setSuccessful('Login successful!');
        //         alert('Login success!')
        //         // localStorage.setItem('token', data.token);
        //         // window.location.href = '/protected-page'
        //     }
        // } catch (error) {
        //     console.error('Login error!', error);
        //     setError('An unexpected error occured.');
        // }
    };

  return (
    <div className = 'container'>
        <div className = 'cover'>
            <h4>College of Mary Immaculate</h4>
            <form onSubmit = {handleSubmit}>
                <div>
                    <input 
                        className = 'login-input' 
                        type = 'text' 
                        placeholder = 'Username'
                        value = {username}
                        onChange = {(e) => setUsername(e.target.value)} />
                </div>
                <div>
                    <input 
                        className = 'login-input' 
                        type = {showPassword ? 'text' : 'password'} 
                        placeholder = 'Password'
                        value = {password}
                        onChange = {(e) => setPassword(e.target.value)} />
                    <button 
                        className = 'pass-btn'
                        type = 'button'
                        onClick = {toggleShowPassword}>{showPassword ? <FaEyeSlash /> : <FaEye />}</button>
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
                         through email; <a href = "mailto:inquiries@collegeofmaryimmaculate.edu.ph" target = 'blank'>
                            inquiries@collegeofmaryimmaculate.edu.ph</a>
                    </p>
                </div>
                <div>
                    <button type = 'submit' className = 'login-btn'>Login</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Login