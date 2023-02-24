import {useState} from 'react'
import {FaTimes, FaBars} from 'react-icons/fa'
import {BiHome} from 'react-icons/bi'
import {SlGraduation} from 'react-icons/sl'
import {HiOutlineDocumentDuplicate} from 'react-icons/hi2'
import {MdOutlineContactPhone} from 'react-icons/md'
import {AiOutlineQuestionCircle} from 'react-icons/ai'
import {Link} from 'react-router-dom'
import './Nav.css'

function Nav() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMenu = () => setClick(false);


  return (
    <div>
        <div className = 'nav-container'>
            <div className = 'menu-icon' onClick = {handleClick}>
                {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className = {click ? 'nav-active' : 'nav-menu'}>
                <li className = 'nav-item'>
                    <Link to = '/' className = 'nav-links' onClick = {closeMenu}>
                        <BiHome className/> Home
                    </Link>
                </li>
                <li className = 'nav-item'>
                    <Link to = '/courses' className = 'nav-links' onClick = {closeMenu}>
                        <SlGraduation /> Courses
                    </Link>
                </li>
                <li className = 'nav-item'>
                    <Link to = '/enrollment' className = 'nav-links' onClick = {closeMenu}>
                        <HiOutlineDocumentDuplicate /> Enrollment
                    </Link>
                </li>
                <li className = 'nav-item'>
                    <Link to = '/about' className = 'nav-links' onClick = {closeMenu}>
                        <AiOutlineQuestionCircle /> About
                    </Link>
                </li>
                <li className = 'nav-item'>
                    <Link to = '/contact' className = 'nav-links' onClick = {closeMenu}>
                        <MdOutlineContactPhone /> Contact us
                    </Link>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Nav