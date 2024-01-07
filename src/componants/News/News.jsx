import React from 'react'
import image from '../../assets/images/post-28.jpg'
import './News.css'

const News = () => {
  return (
    <>
      <h1>Celebrity Music quisque at ipsum vel orci eleifend ultrices</h1>
      <div className='w-96 h-96 ' style={{ backgroundImage: `url(${image})` }}>
        <h1>Image Div</h1>
      </div>
    </>
  )
}

export default News