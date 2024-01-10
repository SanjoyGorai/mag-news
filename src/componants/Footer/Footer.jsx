import React from 'react'
import './Footer.css'
import './Footer.scss'
import logo from '../../assets/images/icons/logo-02.png'
import { SocialIcon } from 'react-social-icons'
import PostItemSmall from '../Category/PostItemSmall/PostItemSmall'
// import 'react-social-icons/vimeo'
import { IoMdHeart } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";


const Footer = () => {


  return (
    <>
      <footer className='p-10 '>
        <div className='flex main-footer'>

          <div className="left-section">
            <div className=''>
              <a href=""><img src={logo} alt="MAGNEWS" className='footer-logo' /></a>
            </div>

            <div>
              <p className='para-1'>Lorem ipsum dolor sit amet, consectetur <br />
                adipiscing elit. Curabitur tempor magna eget elit <br />
                efficitur, at accumsan sem placerat. Nulla tellus <br />
                libero, mattis nec molestie at, facilisis ut turpis. <br />
                Vestibulum dolor metus, tincidunt eget odio</p>
              <p className='para-2'>Any questions? Call us on (+1) 96 716 6879</p>
              <div className='social-icons-container'>
                <FaFacebookF className='bg-red-500 hover:cursor-pointer' color='green' style={{color:''}}/>
                <SocialIcon url="www.facebook.com" bgColor='yellow' className='icon' />
                <SocialIcon url='www.twitter.com' className='icon' />
                <SocialIcon url='www.pinterest.com' className='icon' />
                <SocialIcon url='www.vimeo.' className='icon' />
                <SocialIcon url='www.youtube.' className='icon' />
              </div>
            </div>
          </div>

          <div className="middle-section">
            <h3 className='text-white font-bold popular-post'>Popular Posts</h3>
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
        </div>

        <div className='sub-footer p-5 mt-10'>
          <span>
            Copyright © 2024
            <a href="" className='text-green-400 hover:underline'> Copyright ©
              <script>document.write(new Date().getFullYear())</script>
              2024 All rights reserved | This template is made with
              <IoMdHeart />
              <span> by </span>
            </a>
            <a href="" className='text-blue-600'> Colorlib </a>
          </span>
        </div>
      </footer>
      <div className='up-icon-div'>
        <span className='up-arrow fas fa-angle-up'>&uarr;
        </span>
      </div>
    </>
  )
}

export default Footer
