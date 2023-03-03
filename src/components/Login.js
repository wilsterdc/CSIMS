import { useState } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import './Style.css'
import cmilogo from './Images/cmi.png'

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [successful, setSuccessful] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [selected, setSelected] = useState('');
    const [birthday, setBirthday] = useState('');
    const dropdown = 'Please select'

    const handleSaveCancel = (e) => {
        e.preventDefault();
        if (window.confirm('Please make sure all fields are correct and filled with right information. After submitting the form, wait for an e-mail with your username and password.')) {
            alert('Form saved');
            window.location.href = '/'
        }
    }

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleRadioSelect = (e) => {
        setSelected(e.target.value);
    }

    const handleBirthday = (e) => {
        setBirthday(e.target.value);
    }

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
                window.location.href = '/home'
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
    <div className = 'main-container'>
        <div className = 'login-container'>
            <div className = 'csims-container'>
                <div className = 'cmi-logo'>
                    <img className = 'cmi-img' src = {cmilogo} alt = 'CMI LOGO' />
                </div>
                <div className = 'csims'>
                    <h4>Student Information Management System</h4>
                </div>
            </div>
            <div className = 'form-container'>
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
    {/* -------------------------------------------------------------------------------------------------------------------- */}
        <div className = 'create-csims'>
            <div>
                <h4>Create CSIMS Account</h4>
            </div>
            <div>
                <p><strong><i>Note: Creation of account is for Incoming students and Transferee only.</i></strong></p>
                <p>Please fill up this Registration Form completely. Enter NOT APPLICABLE when necessary.</p>
            </div>
            <div>
                <form className = 'create-csims-form' onSubmit = {handleSaveCancel}>
                    <div>
                        <label>
                            School Preffered Program to Study
                        </label>
                        <select className = 'instance'>
                            <option>{dropdown}</option>
                            <option value = 'Playschool'>Incoming Playschool</option>
                            <option value = 'Kinder 1'>Incoming Kinder 1</option>
                            <option value = 'Kinder 2'>Incoming Kinder 2</option>
                            <option value = 'Grade 11'>Incoming Grade 11</option>
                            <option value = 'Grade 12'>Incoming Grade 12</option>
                            <option value = '1st Year'>Incoming 1st Year College</option>
                            <option value = '2nd Year'>Incoming 2nd Year College</option>
                            <option value = '3rd Year College'>Incoming 3rd Year College</option>
                            <option value = '4th Year College'>Incoming 4th Year College</option>
                        </select>
                    </div>
                    <div className = 'name'>
                        <label>
                            Last Name:
                            <input required className = 'lastName' placeholder = 'Last name'></input>
                        </label>
                        
                        <label>
                            First Name:
                            <input required className = 'firsName' placeholder = 'First name'></input>
                        </label>
                        
                        <label>
                            Middle Name:
                            <input required className = 'middleName' placeholder = 'Middle name'></input>
                        </label>
                        
                    </div>
                    <div className = 'gd-container'>
                        <label>
                            Gender:
                            <label>
                                <input 
                                required
                                type = 'radio' 
                                className = 'male' 
                                value = 'male'
                                checked = {selected === 'male'}
                                onChange = {handleRadioSelect}
                                disable = {selected === 'female'}
                                />Male
                            </label>
                            <label>
                                <input 
                                required
                                type = 'radio' 
                                className = 'female' 
                                value = 'female'
                                checked = {selected === 'female'}
                                onChange = {handleRadioSelect}
                                disable = {selected === 'male'}
                                />Female
                            </label>
                        </label>
                        <label>
                            Date of Birth:
                            <input 
                                required
                                type = 'date' 
                                className = 'birthday' 
                                value = {birthday}
                                onChange = {handleBirthday}
                                max = {new Date().toISOString().split('T')[0]}
                            ></input>
                        </label>
                    </div>
                    <div className = 'ec-container'>
                        <label>
                            Email:
                            <input required type = 'email' className = 'email' placeholder = 'Email address'></input>
                        </label>
                        <label>
                            Contact Number:
                            <input required type = 'number' className = 'contact' placeholder = 'Contact number'></input>
                        </label>
                    </div>
                    <div>
                        <button type = 'submit' className = 'save' value = 'save'>Save</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Login