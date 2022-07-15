import React from 'react';
import './SidebarMenu.css';
import { GrTwitter } from 'react-icons/gr';
import { RiHome7Fill } from 'react-icons/ri';
import { FiHash } from 'react-icons/fi';
import { BsPeopleFill,BsFillBookmarkFill} from 'react-icons/bs';
import { IoMdNotifications } from 'react-icons/io';
import { FiMail,FiMoreHorizontal } from 'react-icons/fi';
import { HiOutlineDotsCircleHorizontal } from 'react-icons/hi';
import {Link } from 'react-router-dom';
// import { BsFillBookmarkFill } from 'react-icons/io';
import { CgProfile } from 'react-icons/cg';

function SidebarMenu() {
  return (
      <div className='sidebar-menu-container'>
          
        <div className='sidebar-menu-items-container'>
          <div className='icon-header-twitter sidebar-menu-items'>
              <GrTwitter id='icon'/>
          </div>
          <div className='sidebar-menu-items'>
                <RiHome7Fill id='icon' />
                <Link to="/" style={{textDecoration:'none'}}><span>Home</span></Link>  
          </div>
           <div className='sidebar-menu-items'>
                  <FiHash id='icon' />
                  <Link to="explore" style={{textDecoration:'none'}}><span>Explore</span></Link>
          </div>
           <div className='sidebar-menu-items'>
                  <BsPeopleFill id='icon' />
                  <Link to="communities" style={{textDecoration:'none'}}><span>Communities</span></Link>
          </div>

           <div className='sidebar-menu-items'>
                  <IoMdNotifications id='icon' />
                  <Link to="notifications" style={{textDecoration:'none'}}><span>Notifications</span></Link>
          </div>
           <div className='sidebar-menu-items'>
                  <FiMail id='icon' />
                  <Link to="messages" style={{textDecoration:'none'}}><span>Messages</span></Link>
          </div>
           <div className='sidebar-menu-items'>
                  <BsFillBookmarkFill id='icon' />
                  <Link to="bookmarks" style={{textDecoration:'none'}}><span>Bookmarks</span></Link>
          </div>
           <div className='sidebar-menu-items'>
                  <CgProfile id='icon' />
                  <Link to="profile" style={{textDecoration:'none'}}><span>Profile</span></Link>
          </div>
           <div className='sidebar-menu-items'>
              <HiOutlineDotsCircleHorizontal id='icon' />
              <span>More</span>
          </div>
          <div className='tweet-btn-sidebar'>
              <span>Tweet</span>
          </div>
              
        </div>
          <div className='account-sidebar'>
              <div style={{display:'flex',width:'80%',justifyContent:'space-between'}}>
                <span>
                    <CgProfile id='icon'/>
                </span>
                <span className='account-info'>
                    <span>Ali</span>
                    <span>user name</span>
                </span>
                <span>
                    <FiMoreHorizontal id='icon'/>
                </span>   
              </div>
          </div>
    </div>
  )
}

export default SidebarMenu