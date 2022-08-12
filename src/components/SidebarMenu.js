import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './SidebarMenu.css';
import { GrTwitter } from 'react-icons/gr';
import { RiHome7Fill } from 'react-icons/ri';
import { FiHash } from 'react-icons/fi';
import { BsPeopleFill,BsFillBookmarkFill} from 'react-icons/bs';
import { IoMdNotifications } from 'react-icons/io';
import { FiMail,FiMoreHorizontal } from 'react-icons/fi';
import { HiOutlineDotsCircleHorizontal } from 'react-icons/hi';
import { RiQuillPenLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import{register} from './../redux/asyncActions/UserAsync';
import { CgProfile } from 'react-icons/cg';

const tweet = {
  tweets: ["hello world"],
  isLoading: false,
  error: null,
  singleTweet: {},
  uploading: false,
  message: null,
  bookmarksList:[]
}
function SidebarMenu() {
  const dispatch = useDispatch();
  const temptData = useSelector(state => state.isLoading);
  const [data, setData] = useState('');
  const fetchData = (e) => {
    console.log("ggg");
    e.preventDefault();
    axios.get("https://twitterapis.herokuapp.com/user/ali91/").then((response) => {
      setData(response)
    }).catch((error) => {
      console.log(error)
    });
    dispatch(register(
      "ali91",
      "alimahmoudi627@gmail.com",
      "ali@7%213",
      "ali@7%213",
    ));
  }
  useEffect(() => {
    console.log(temptData);
    console.log(data);
  },[temptData,data])
  return (
      <div className='sidebar-menu-container'>
          
        <div className='sidebar-menu-items-container'>
          <div className='icon-header-twitter sidebar-menu-items'>
              <GrTwitter id='icon'/>
          </div>
          <div id='home' className='sidebar-menu-items'>
                <RiHome7Fill id='icon' />
                <Link to="/" style={{textDecoration:'none'}}><span id='link-text'>Home</span></Link>  
          </div>
           <div id='explore' className='sidebar-menu-items'>
                  <FiHash id='icon' />
                  <Link to="explore" style={{textDecoration:'none'}}><span id='link-text'>Explore</span></Link>
          </div>
           <div id='communities' className='sidebar-menu-items'>
                  <BsPeopleFill id='icon' />
                  <Link to="communities" style={{textDecoration:'none'}}><span id='link-text'>Communities</span></Link>
          </div>

           <div id='notifications' className='sidebar-menu-items'>
                  <IoMdNotifications id='icon' />
                  <Link to="notifications" style={{textDecoration:'none'}}><span id='link-text'>Notifications</span></Link>
          </div>
           <div id='messages' className='sidebar-menu-items'>
                  <FiMail id='icon' />
                  <Link to="messages" style={{textDecoration:'none'}}><span id='link-text'>Messages</span></Link>
          </div>
           <div id='bookmarks' className='sidebar-menu-items'>
                  <BsFillBookmarkFill id='icon' />
                  <Link to="bookmarks" style={{textDecoration:'none'}}><span id='link-text'>Bookmarks</span></Link>
          </div>
           <div id='profiles' className='sidebar-menu-items'>
                  <CgProfile id='icon' />
                  <Link to="profile" style={{textDecoration:'none'}}><span id='link-text'>Profile</span></Link>
          </div>
           <div id='more' className='sidebar-menu-items'>
              <HiOutlineDotsCircleHorizontal id='icon' />
              <span id='link-text'>More</span>
          </div>
          <div className='tweet-btn-sidebar'>
          <span id='btn-text' onClick={fetchData}>Tweet</span>
          <RiQuillPenLine id='icon'/>
          </div>
              
        </div>
          <div className='account-sidebar'>
              <div className='account-sidebar-details'>
                
                    <CgProfile id='icon'/>
                
                <span className='account-info'>
                    <span>Ali</span>
                    <span>user name</span>
                </span>
                
                    <FiMoreHorizontal id='icon-three-dots'/>
                   
              </div>
          </div>
    </div>
  )
}

export default SidebarMenu