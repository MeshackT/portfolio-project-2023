import React, { useState } from 'react';
import { FaBars, FaReact } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { HiX } from 'react-icons/hi';
import './style.scss';

const data = [
    {
        label: 'HOME',
        to: '/'
    },
    {
        label: 'ABOUT',
        to: '/about'
    },
    // {
    //     label: 'RESUME',
    //     to: '/resume'
    // },
    {
        label: 'SKILLS',
        to: '/skills'
    },
    {
        label: 'PORTFOLIO',
        to: '/portfolio'
    },
    {
        label: 'CONTACT',
        to: '/contact'
    }

]

const Navbar = () => {

    const [toggleIcons, setToggleIcons] = useState(false);

    const handleToggleIcons = () => {
        setToggleIcons(!toggleIcons)
    }

    return (
        <div>
            <nav className='navbar'>
                <div className='navbar_container'>
                    <Link to={'/'} className='navbar_container_logo'>
                        <h3>FSH.</h3>
                    </Link>
                </div>
                <ul className={`navbar_container_menu ${toggleIcons ? "active" : ""}`}>

                    {
                        data.map((item, key) => (
                            <li key={key} className='navbar_container_menu_item'>
                                <Link to={item.to} className='navbar_container_menu_item_links'>
                                    {item.label}
                                </Link>
                            </li>
                        ))
                    }

                </ul>
                <div className='nav-icon' onClick={handleToggleIcons}>
                    {toggleIcons ? <HiX size={30} /> : <FaBars size={30} />}

                </div>
            </nav>
        </div>
    )
}
export default Navbar;
