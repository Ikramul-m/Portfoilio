import React from 'react'
import {VscGithubInverted} from 'react-icons/vsc'
import {FaHackerrank} from 'react-icons/fa'
import {SiCodechef} from 'react-icons/si'
import './Navbar.css'

const Navbar = () => {

    return (
        <>
          <nav className='main-nav'>

            {/*logo part */}
            <div className='logo'>
                <h2>Portfo<span>lio</span></h2>
            </div>

            {/*Menu part */}
            <div className='menu-link'>
                <ul>
                    <li><a href="#home">Home</a></li>

                    <li><a href="#about">About</a></li>

                    <li><a href="#services">Services</a></li>

                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>

            {/*Social Media Links */}
            <div className='social-media'>
                <ul className='social-media-desktop'>
                    <li>
                        <a href='#codechef'><SiCodechef color='grey' fontSize='27px' /></a>
                    </li>

                    <li>
                        <a href='#hackerrank'><FaHackerrank color='#2EC866' fontSize='27px' /></a>
                    </li>

                    <li>
                        <a href='#github'><VscGithubInverted color='#FFF' fontSize='27px' /></a>
                    </li>
                </ul>
            </div>


          </nav>
        </>
    )
}

export default Navbar