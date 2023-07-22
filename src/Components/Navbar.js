import React from 'react'


const Navbar = () => {

    return (
        <>
          <nav className='main-nav'>

            {/*logo part */}
            <div className='logo'>
                <h2>Ilama</h2>
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
                        <a href='#codechef'>CodeChef</a>
                    </li>

                    <li>
                        <a href='#hackerrank'>Heckerrank</a>
                    </li>

                    <li>
                        <a href='#github'>Github</a>
                    </li>
                </ul>
            </div>


          </nav>
        </>
    )
}

export default Navbar