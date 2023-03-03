import {useState, useEffect} from 'react'
// import { Link } from 'react-router-dom'
import dedication from './dedication.json'
import cmibuildingSrc from './Images/cmibuilding.jpg'
import cmiLogo from './Images/cmi.png'
import './Landing.css'

function Landing() {
    const [texts, setTexts] = useState([]);

    useEffect(() => {
        setTexts(dedication.texts)
    }, []);

    const [currentTextIndex, setCurrentTextIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTextIndex((prevIndex) =>
                prevIndex === texts.length - 1 ? 0 : prevIndex + 1
            );
        }, 5000);

        return () => clearInterval(interval);
    });

  return (
    <div>
        <div className = 'signin-container'>
            {/* <Link to = '/login' target = '_blank'>
                <button className = 'login-port'>Login</button>
            </Link> */}
            <a className = 'login-port' href = '/login'>
            Sign in
            </a>
        </div>
        
        <div className = 'bg-light'>
            <div className = 'bg-dark'>
                <div className = 'img-container'>
                    <img src = {cmibuildingSrc} alt = 'College of Mary Immaculate'/>
                </div>
            </div>
        </div>
        <div >
            <div className = 'interchng-text'>
                <img src = {cmiLogo} alt = "CMI Logo" />
                <p>{texts[currentTextIndex]?.text}</p>
            </div>     
        </div>
        {/* <div className = 'aims-container'>
            <p>
                The COLLEGE OF MARY IMMACULATE aims to provide Senior High School and Tertiary Education Programs,
                as well as Technical and Vocational Courses, with an integration of Values Formation and a strong Job Readiness Program. 
                Throughout their stay at the College of Mary Immaculate, the students learn all the necessary theories, 
                knowledge and skills necessary for success in their chosen career. Moreover, 
                the students are imbued with the necessary values that will empower them and prepare them for the world of work, 
                making them both locally and globally competitive. The students are trained and are expected to:
            </p>
            <ul className = 'students-container'>
                <li className = 'item-students'>
                    participate in the school's curricular program;
                </li>
                <li>
                    contribute and participate in their family affairs by assuming responsible 
                    roles in their various community activities where they are expected to help;
                </li>
                <li>
                    participate in their baranggay and Parish projects;
                </li>
                <li>
                    apply the knowledge and skills gained from school to improve their family income 
                    and eventually contribute to the larger community and national development.
                </li>
            </ul>
        </div> */}
    </div>
  )
}

export default Landing