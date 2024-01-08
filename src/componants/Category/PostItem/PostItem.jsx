import React from 'react'
import './PostItem.css'
import post from '../../../assets/images/post-05.jpg'
import PostItemSmall from '../PostItemSmall/PostItemSmall'

const PostItem = () => {
  return (
    <>
      <div className='post-container flex'>
        <a href="">
          <img src={post} alt="" className='post-pic' />
        </a>
        <div>
          <h5><a href="">American live music lorem ipsum dolor sit amet consectetur</a></h5>
          <span>
            <a href="">Music</a>
            <span> - </span>
            <span> Jan 08 </span>
          </span>
        </div>
        <div>
          <PostItemSmall />
          <PostItemSmall />
          <PostItemSmall />
        </div>
      </div>
    </>
  )
}

export default PostItem