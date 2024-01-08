import React from 'react'
import './PostItemSmall.css'
import post from '../../../assets/images/post-05.jpg'

const PostItemSmall = () => {
  return (
    <>
      <div className='post-container-small flex'>
        <a href="">
          <img src={post} alt="" className='post-img' />
        </a>
        <div className='m-4'>
          <h5><a href="">Donec metus orci, malesuada et lectus vitae</a></h5>
          <span>
            <a href="">Music</a>
            <span> - </span>
            <span> Jan 08 </span>
          </span>
        </div>
      </div>
    </>
  )
}

export default PostItemSmall