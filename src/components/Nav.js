import {useState} from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import './Nav.css'

function Nav() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

  return (
    <div>
        <div className = 'nav-container'>
            <Link to = '/' className = 'nav-logo' onClick = {closeMobileMenu} />
            <div className = 'menu-icon' onClick = {handleClick}>
                {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className = {click ? 'nav-menu active' : 'nav-menu'}>
                <li className = 'nav-item'>
                    <Link to = '/' className = 'nav-links' onClick = {closeMobileMenu}>
                        Home
                    </Link>
                </li>
                <li className = 'nav-item'>
                    <Link to = '/courses' className = 'nav-links' onClick = {closeMobileMenu}>
                        Courses
                    </Link>
                </li>
                <li className = 'nav-item'>
                    <Link to = '/enrollment' className = 'nav-links' onClick = {closeMobileMenu}>
                        Enrollment
                    </Link>
                </li>
                <li className = 'nav-item'>
                    <Link to = '/about' className = 'nav-links' onClick = {closeMobileMenu}>
                        About
                    </Link>
                </li>
                <li className = 'nav-item'>
                    <Link to = '/contact' className = 'nav-links' onClick = {closeMobileMenu}>
                        Contact us
                    </Link>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Nav