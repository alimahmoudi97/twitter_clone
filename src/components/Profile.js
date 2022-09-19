import React from 'react';
import './Profile.css';
import BackgroundImage from './../profile-background.jpg';
import avatar from './../download.jpg';
import { GoLocation } from 'react-icons/go';
import { BsCalendar2Date } from 'react-icons/bs';

function Profile() {
  return (
    <div className='profile-conatiner' style={{ color: "white" }}>
      <div className='profile-background-image'>
        <img src={BackgroundImage} alt=""/>
      </div>
      <div className='profile-header'>
        <div className='profile-avatar'>
          <img src={avatar} alt=""/>
        </div>
        <div className='botton-container'>
          <span className='edit'>Edit profile</span>
        </div>
      </div>
      <div className='proflie-title'>
        <span id='name' className='name'>Ali</span>
        <span id='username' className='username'>@AliMT</span>
        <span id='title' className='title'>React Developer</span>
      </div>
      <div className='info-origin-user'>
        <div>
          <GoLocation id="icon-profile"/>
          <span>Mashhad</span>
        </div>
        <div>
          <BsCalendar2Date id="icon-profile"/>
          <span>Joined March 2020</span>
        </div>
      </div>
      <div className='info-user-follow'>
        <div>
          <span id="num-user-follow">260</span>
          <span id="follow">Following</span>
        </div>
        <div>
          <sapn id="num-user-follow">10</sapn>
          <span id="follow">Followers</span>
        </div>
      </div>
    </div>
  )
}

export default Profile