import React from 'react'
import './Menu.css'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/icons/logo-01.png'

const Manu = () => {
    return (
        <header className='bg-red-500 '>
            <nav className=''>
                {/* <img src={logo} alt="" /> */}
                <ul className='flex gap-10 font-semibold'>
                    <li><Link className='' to="/">Home</Link></li>
                    <li><Link to="/news">News</Link></li>
                    <li><Link to="/entaintment">Entaintment</Link></li>
                    <li><Link to="/business">Business</Link></li>
                    <li><Link to="/Travel">Travel</Link></li>
                    <li><Link to="/LifeStyle">Life Style</Link></li>
                    <li><Link to="/LifeStyle">Video</Link></li>
                    <li><Link to="/LifeStyle">Features</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Manu