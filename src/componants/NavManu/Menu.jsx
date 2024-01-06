import React from 'react'
import './Menu.css'
import { Link } from 'react-router-dom'

const Manu = () => {
    return (
        <header className='bg-red-500'>
            <nav>
                <ul className='flex gap-5 '>
                    <li><Link className='' to="/">Home</Link></li>
                    <li><Link to="news">News</Link></li>
                    <li><Link to="entaintment">Entaintment</Link></li>
                    <li><Link to="Business">Business</Link></li>
                    <li><Link to="">Travel</Link></li>
                    <li><Link to="">Life Style</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Manu