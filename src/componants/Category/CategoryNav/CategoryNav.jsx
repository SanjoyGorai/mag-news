
import React from 'react'
import './CategoryNav.css'

const CategoryNav = () => {
    return (
        <>
            <div className='flex justify-between nav-container '>
                <h3 className="">Entertainment</h3>
                <ul className='flex gap-5'>
                    <li><a href="" className='link'>All</a></li>
                    <li><a href="">Celebrity</a></li>
                    <li><a href="">Movies</a></li>
                    <li><a href="">Music</a></li>
                    <li><a href="">Games </a></li>
                </ul>
                <a href="">view all <i className='fa fa-caret-right'>^</i> </a>
            </div>
        </>
    )
}

export default CategoryNav