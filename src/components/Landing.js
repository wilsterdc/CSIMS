import {useState, useEffect} from 'react'
// import { Link } from 'react-router-dom'
import dedication from './dedication.json'
import cmibuildingSrc from './Images/cmibuilding.jpg'
import cmiLogo from './Images/cmi.png'

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
        {/* <Link to = '/login' target = '_blank'>
            <button className = 'login-port'>Login</button>
        </Link> */}
        <a className = 'login-port' href = '/login' target = ' blank'>Login</a> 
        
        <div className = 'bg-light'>
            <div className = 'bg-dark'>
                <div className = 'img-container'>
                    <img src = {cmibuildingSrc} alt = 'College of Mary Immaculate'/>
                </div>
            </div>
        </div>
        <div className = 'interchng-text'>
            <img src = {cmiLogo} alt = "CMI Logo" />
            <p>{texts[currentTextIndex]?.text}</p>
        </div>
        
        
    </div>
  )
}

export default Landing