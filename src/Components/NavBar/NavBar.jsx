import React from 'react'
import Logo from '/logo.png'
import Open from '/Open-ico.svg'
import './NavBar.css'

const NavBar = () => {
  return (
    <nav className="nav-bar">
        <div className="logo">
            <img src={Logo} alt="PWT Logo" />
        </div>
        <div className="navigation">
            <a href="https://github.com/pratyush0898/Portfolio-Website-Templates.git"><span>Source</span> <img src={Open} alt="Open-ico" /></a>
        </div>
    </nav>
  )
}

export default NavBar
