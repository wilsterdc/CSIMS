import {useState} from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import './Nav.css'

function Nav() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMenu = () => setClick(false);


  return (
    <div>
        <div className = 'nav-container'>
            {/* <nav className = 'nav-logo' onClick = {closeMenu} /> */}
            <div className = 'menu-icon' onClick = {handleClick}>
                {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className = {click ? 'nav-menu active' : 'nav-menu'}>
                <li className = 'nav-item'>
                    <Link to = '/' className = 'nav-links' onClick = {closeMenu}>
                        Home
                    </Link>
                </li>
                <li className = 'nav-item'>
                    <Link to = '/courses' className = 'nav-links' onClick = {closeMenu}>
                        Courses
                    </Link>
                </li>
                <li className = 'nav-item'>
                    <Link to = '/enrollment' className = 'nav-links' onClick = {closeMenu}>
                        Enrollment
                    </Link>
                </li>
                <li className = 'nav-item'>
                    <Link to = '/about' className = 'nav-links' onClick = {closeMenu}>
                        About
                    </Link>
                </li>
                <li className = 'nav-item'>
                    <Link to = '/contact' className = 'nav-links' onClick = {closeMenu}>
                        Contact us
                    </Link>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Nav