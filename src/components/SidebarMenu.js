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
              <span>Home</span>
          </div>
           <div className='sidebar-menu-items'>
              <FiHash id='icon' />
              <span>Explore</span>
          </div>
           <div className='sidebar-menu-items'>
              <BsPeopleFill id='icon' />
              <span>Communities</span>
          </div>

           <div className='sidebar-menu-items'>
              <IoMdNotifications id='icon' />
              <span>Notifications</span>
          </div>
           <div className='sidebar-menu-items'>
              <FiMail id='icon' />
              <span>Messages</span>
          </div>
           <div className='sidebar-menu-items'>
              <BsFillBookmarkFill id='icon' />
              <span>Bookmarks</span>
          </div>
           <div className='sidebar-menu-items'>
              <CgProfile id='icon' />
              <span>Profile</span>
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