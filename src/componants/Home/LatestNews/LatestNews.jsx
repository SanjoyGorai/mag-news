import React from 'react'
import image from '../../../assets/images/post-01.jpg'
import post2 from '../../../assets/images/post-02.jpg'
import post3 from '../../../assets/images/post-03.jpg'
import post4 from '../../../assets/images/post-04.jpg'
import News from './News'
import './LatestNews.css'


const LatestNews = () => {
    return (
        <>
            <div className=' news-container'>

                <div className='left-news'>
                    <img src={image} alt="" />
                </div>

                <div className='right-news'>
                    <div className='top-news'>
                        <img src={post2} alt="" />
                    </div>
                    <div className='bottom-news'>
                        <div className='left-div'>
                            <img src={post3} alt="" />
                        </div>
                        <div className='right-div'>
                            <img src={post4} alt="" />
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default LatestNews