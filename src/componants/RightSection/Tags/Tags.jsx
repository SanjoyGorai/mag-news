import React from 'react'
import './Tags.css'

const Tags = () => {
    return (
        <div className='tags-container'>
            <div className='sub-tags-container'>
                <a href="">Fashion</a>
                <a href="">Lifestyle</a>
                <a href="">Denim</a>
            </div>
            <div className='sub-tags-container'>
                <a href="">StreetStyle</a>
                <a href="">Crafts</a>
            </div>
            <div className='sub-tags-container'>
                <a href="">Magazine</a>
                <a href="">News</a>
                <a href="">Blogs</a>
            </div>
        </div>
    )
}

export default Tags