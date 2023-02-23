import {useState, useEffect} from 'react'
// import { Link } from 'react-router-dom'
import cmibuildingSrc from './Images/cmibuilding.jpg'

function Landing() {
    const [textIndex, setTextIndex] = useState(0);
    const texts = ['Hello', 'Bonjour', 'Hola', 'こんにちは', '안녕하세요', 'Ciao'];

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTextIndex((textIndex + 1) % texts.length);
        }, 5000);

        return () => clearInterval(intervalId);
    }, [textIndex]);

  return (
    <div>
        {/* <Link to = '/login' target = '_blank'>
            <button>Login</button>
        </Link> */}
        {/* <a href = '/login' target = ' blank'>Login</a>
        <div className = 'img-container'>
            <img src = {cmibuildingSrc} alt = 'College of Mary Immaculate'/>
        </div> */}

        <p>{texts[textIndex]} <br /> How are you?</p>
    </div>
  )
}

export default Landing