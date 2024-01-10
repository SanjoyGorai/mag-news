import React from 'react'
import './LogoBar.scss'
import logo from '../assets/images/icons/logo-01.png'
import bannner from '../assets/images/banner-01.jpg'

const LogoBar = () => {
  return (
    <>

    <div className="logo-container">
        <div>
            <a href="">
                <img src={logo} alt="LOGO" />
            </a>
        </div>

        <div>
            <a href="">
                <img src={bannner} alt="" />
            </a>
        </div>
    </div>
    
    </>
  )
}

export default LogoBar