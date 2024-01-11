import React from 'react'
import './TopBar.scss'
import night_png from '../../assets/images/icons/icon-night.png';
import { SocialIcon } from 'react-social-icons'
import { FaFacebookF, FaTwitter, FaPinterestP, FaInstagram,FaYoutube  } from "react-icons/fa";


const TopBar = () => {
  return (
    <>
      <div className="topbar-container flex justify-between align-middle">
        <div className="left-topbar flex">
          <span className='flex justify-center flex-wrap'>
            <span>New York, NY</span>
            <img src={night_png} alt="" />
            <span>HI 58° LO 56°</span>
            <a href="">About</a>
            <a href="">Contact</a>
            <a href="">Sign up</a>
            <a href="">Log in</a>
          </span>
        </div>

        <div className="right-topbar flex">
          {/* <a href=""> <SocialIcon url='facebook.com' /> </a>
          <a href=""><SocialIcon url='twitter.com' /></a>
          <a href=""><SocialIcon url='instagram.com' /></a>
          <a href=""><SocialIcon url='pinterest.com' /></a>
          <a href=""><SocialIcon url='youtube.com' /></a> */}
          <a href=""><FaFacebookF className='' /></a>
          <a href=""><FaTwitter className='' /></a>
          <a href=""><FaPinterestP className='' /></a>
          <a href=""><FaInstagram className='' /></a>
          <a href=""><FaYoutube className='' /></a>
        </div>
      </div>
    </>
  )
}

export default TopBar