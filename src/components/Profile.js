import React, { useState } from 'react';
import './Profile.css';
import BackgroundImage from './../profile-background.jpg';
import avatar from './../download.jpg';
import { GoLocation } from 'react-icons/go';
import { BsCalendar2Date } from 'react-icons/bs';
import EditProfileModal from '../features/modal/user/routes/EditProfileModal';
import { useSelector } from 'react-redux';

function Profile() {
  const [istoggle, setTogle] = useState(false);
  const user = useSelector(state => state.userReducer.user);
  const profileUser = useSelector(state => state.userReducer.profileUser);
  const handleProfileModal = () => {
    setTogle(!istoggle);
    console.log("Modal Edit");
    console.log(istoggle);
  }
  return (
    <>
      
      <EditProfileModal onClose={handleProfileModal} toggle={istoggle} user={user} />
      
      <div className='profile-conatiner' style={{ color: "white" }}>
        <div className='profile-background-image'>
          <img src={BackgroundImage} alt=""/>
        </div>
        <div className='profile-header'>
          <div className='profile-avatar'>
            <img src={avatar} alt=""/>
          </div>
          <div
            className='botton-container'
            onClick={handleProfileModal}
          >
            <span className='edit'>Edit profile</span>
          </div>
        </div>
        <div className='proflie-title'>
          <span id='name' className='name'>{user.username}</span>
          <span id='username' className='username'>@{user.username}</span>
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
            <span id="num-user-follow">{(profileUser===null)?0:profileUser.following}</span>
            <span id="follow">Following</span>
          </div>
          <div>
            <span id="num-user-follow">{(profileUser===null)?0:profileUser.followers}</span>
            <span id="follow">Followers</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default Profile