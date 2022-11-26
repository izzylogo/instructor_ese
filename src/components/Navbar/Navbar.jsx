import React, {useState} from 'react'
import './Navbar.css'
import logo from './royalti-logo.png'
import {GiHamburgerMenu} from 'react-icons/gi'
import {IoIosExit} from 'react-icons/io'
import {IoIosArrowDown} from 'react-icons/io'

export const Navbar = () => {
    const [active, setActive] = useState('nav__menu');
    const [toggle, setToggle] = useState(false);
    const [drop, setDrop] = useState(false)
    
    // function navToggle() {
    //     active === 'nav__menu' ? setActive('nav__menu nav__active') : setActive('nav__menu')
    //     toggler === 'nav__toggler' ? setToggler('nav__toggler toggle') : setToggler('nav__toggler');
    // }
 
    function toggleMenu() {
        setToggle(prev => !prev)
    }

  return (
    <nav className="nav">
        <div className="nav-con">

            <div className="nav-contain">

                <a href="#" className="nav__brand">
                    <img src={logo} alt="Royalti Records" className='logo' />
                </a>
                {/*  */}
                <div className="menu">
                    <ul>
                        <li>Dashboard </li>
                        <li className='roster'>Roster   
                            <IoIosArrowDown/>
                            <div className="droping1">
                                <p>Create User</p>
                                <p>Create Artist</p>
                            </div>
                        </li>
                        <li className='catalog'>Catalog  
                            <IoIosArrowDown/>
                            <div className="droping2">
                                <p>Create Track</p>
                                <p>Create Release</p>
                            </div>
                        </li>
                        <li>Royalty</li>
                        <li>
                            <IoIosExit className='li_icon' size={30}/>
                        </li>
                    </ul>
                </div>
                <div className="menu_bar" onClick={toggleMenu}>
                    <GiHamburgerMenu className='icon' color='white'  />
                </div>
            </div>
            {/* mobile menu */}
            <div className={toggle ? "active" : "hide"}>
                <div className="mobile_bar" onClick={toggleMenu}>
                    <GiHamburgerMenu className='men'/>
                </div>
                {/* mobile menu */}
                <div className="mobile_menu">
                    <ul>
                        <li>Dashboard</li>
                        <li>Royalty</li>
                        <li>
                            <IoIosExit color='black'/>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
  )
}


{/* <ul className={active}>
            <li className="nav__item"><a href="#" className="nav__link">Home</a></li>
            <li className="nav__item"><a href="#" className="nav__link">About</a></li>
            <div className="dropdown">
                <li className="nav__item lis"  onClick={showdropdown}>
                    <a href="#" className="nav__link">Services</a>
                    <IoIosArrowDown/>
                </li>
                <div className="drop" style={drop ? {display: 'block'} : {display: 'none'}}>
                    <h3>Explore Our Services</h3>
                    <li>Advanced Care</li>
                    <li>Canine and Feline Diabates</li>
                    <li>Pet Boarding</li>
                    <li>Pet Counseling</li>
                    <li>Preventive Care</li>
                </div>
            </div>
            <li className="nav__item"><a href="#" className="nav__link">Portfolio</a></li>
            <li className="nav__item"><a href="#" className="nav__link">Contact</a></li>
        </ul> */}