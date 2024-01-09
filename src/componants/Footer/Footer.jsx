import React from 'react'
import './Footer.css'
import logo from '../../assets/images/icons/logo-02.png'
import { SocialIcon } from 'react-social-icons'
import PostItemSmall from '../Category/PostItemSmall/PostItemSmall'
// import 'react-social-icons/vimeo'


const Footer = () => {


  return (
    <footer className='flex'>

      <div className="left-section">
        <div className=''>
          <a href=""><img src={logo} alt="MAGNEWS" /></a>
        </div>

        <div>
          <p className='para-1'>Lorem ipsum dolor sit amet, consectetur <br />
            adipiscing elit. Curabitur tempor magna eget elit <br />
            efficitur, at accumsan sem placerat. Nulla tellus <br />
            libero, mattis nec molestie at, facilisis ut turpis. <br />
            Vestibulum dolor metus, tincidunt eget odio</p>
          <p className='para-2'>Any questions? Call us on (+1) 96 716 6879</p>
          <div className='social-icons-container'>
            <SocialIcon url="www.facebook.com" bgColor='yellow' className='icon' />
            <SocialIcon url='www.twitter.com' className='icon' />
            <SocialIcon url='www.pinterest.com' className='icon' />
            <SocialIcon url='www.vimeo.' className='icon' />
            <SocialIcon url='www.youtube.' className='icon' />
          </div>
        </div>
      </div>

      <div className="middle-section">
        <PostItemSmall />
        <PostItemSmall />
        <PostItemSmall />
      </div>

      <div className="right-section">
        <div>
          <h5>Category</h5>
        </div>
        <ul>
          <li><a href="">Fashion (25)</a></li>
          <hr />
          <li><a href="">Technology (27)</a></li>
          <hr />
          <li><a href="">Street Style (22)</a></li>
          <hr />
          <li><a href="">Life Style (29)</a></li>
          <hr />
          <li><a href="">DIY & Craft (23)</a></li>
        </ul>
      </div>

      <div className='sub-footer'></div>
    </footer>
  )
}

export default Footer