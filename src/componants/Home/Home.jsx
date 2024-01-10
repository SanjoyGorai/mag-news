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
import SectionHeading from '../RightSection/SectionHeading/SectionHeading'
import SectionLinks from '../RightSection/SectionLinks/SectionLinks'
import Subscribe from '../RightSection/Subscribe/Subscribe'
import Tags from '../RightSection/Tags/Tags'
import Footer from '../Footer/Footer'
import RightSection from '../RightSection/RightSection'


const Home = () => {
    return (
        <>
            <div className='container'>

                <div>
                    <LatestNews />
                </div>
                <div className='flex'>
                    <div className=''>
                        <Category title='Entertainment' />
                        <Category title='Business' />
                        <Category title='Travel' />
                        {/* <SectionLinks/> */}
                        {/* <Subscribe/> */}
                        {/* <Tags /> */}
                    </div>
                    <div>
                        <RightSection title='Most Popular' />
                        <RightSection title='Stay Connected' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home