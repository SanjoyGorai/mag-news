import React from 'react'
import image from '../../assets/images/post-01.jpg'
import LatestNews from './LatestNews/LatestNews'
import './Home.css'
import Header from '../Header/Header'
import News from './LatestNews/News'
import { Category, name } from '../Category/Category'
import CategoryNav from '../Category/CategoryNav/CategoryNav'
import PostItem from '../Category/PostItem/PostItem'
import PostItemSmall from '../Category/PostItemSmall/PostItemSmall'


const Home = () => {
    return (
        <>
            <div className='container'>

                {/* <h1>Home</h1> */}
                {/* <h1>Business Microsoft quisque at ipsum vel orci eleifend ultrices</h1> */}
                {/* <img src={image} alt="" className='w-96'/> */}
                {/* <LatestNews /> */}
                {/* <News/> */}
                <div>
                    {/* {name} */}
                    <Category/>
                </div>
            </div>
        </>
    )
}

export default Home