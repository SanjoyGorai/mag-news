import React from 'react'
import image from '../../assets/images/post-01.jpg'
import LatestNews from './LatestNews/LatestNews'
import './Home.css'


const Home = () => {
    return (
        <>
            <div className='container'>

                {/* <h1>Home</h1> */}
                {/* <h1>Business Microsoft quisque at ipsum vel orci eleifend ultrices</h1> */}
                {/* <img src={image} alt="" className='w-96'/> */}
                <LatestNews />

            </div>
        </>
    )
}

export default Home