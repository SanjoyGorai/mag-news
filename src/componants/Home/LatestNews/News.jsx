import React from 'react'
import image from '../../../assets/images/post-03.jpg'
import bike from '../../../assets/images/post-04.jpg'
import './News.css'

const News = ({ image = { bike }, title = '', author = 'Sanjoy Gorai' }) => {

    return (
        <div className=' bg-center bg-no-repeat bg-cover image-container'
            style={{ backgroundImage: `url(${bike})` }}>
            <div className='info-div'>
                <a href="" className='' id='category-btn'>Business</a>
                <h3 className='text-xl font-bold hover:text-green-500 ;'>
                    <a href="">Microsoft quisque at ipsum vel orci eleifend ultrices</a></h3>
                <span class="how1-child2">
                    <span class="f1-s-4 cl11">
                        Jack Sims
                    </span>

                    <span class="f1-s-3 cl11 m-rl-3">
                        -
                    </span>

                    <span class="f1-s-3 cl11">
                        Feb 16
                    </span>
                </span>
            </div>
        </div>
    )
}

export default News