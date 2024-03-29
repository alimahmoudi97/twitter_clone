import React, { useContext, useEffect, useState } from 'react';
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
import{register,getTokens, logoutAct, load_user, checkAuthenticated, userProfile} from './../redux/asyncActions/UserAsync';
import { CgProfile } from 'react-icons/cg';
import { resetDataTweet } from '../redux/asyncActions/TweetAsync';
import { MessagePage } from './Main';
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
  const isAuthenticated = useSelector((state) => state.userReducer.isAuthenticated);
  const userStatus = useSelector((state) => state.userReducer.user);
  const{isMessagePage,setIsMessagePage} =useContext(MessagePage);
  // const id = useSelector((state) => state.userReducer.user.id);
  const username = useSelector((state) => {
    if (userStatus !== null) {
      return state.userReducer.user.username
    }
  });

  const handleSignOut = () => {
    dispatch(logoutAct());
    dispatch(load_user());
    dispatch(checkAuthenticated());
    // dispatch({type:'store/reset'});
  }
  const handleProfilePage = () => {
    dispatch(userProfile(userStatus.username));
    console.log("handleProfilePage");
  }
  const handlePage = (page) => {
    setIsMessagePage({
      value: true,
      page:page
    });
    console.log(page);
  }
  useEffect(() => {
    console.log(temptData);
    console.log(data);
    console.log(isAuthenticated);
  }, [temptData, data, isAuthenticated]);
  // useEffect(() => {
  //   console.log(`Id:${id}`)
  // },[id])
  return (
      <div className='sidebar-menu-container'>
          
        <div className='sidebar-menu-items-container'>
          <div className='icon-header-twitter sidebar-menu-items'>
              <GrTwitter id='icon'/>
          </div>
          <div id='home' className='sidebar-menu-items'>
                <RiHome7Fill id='icon' />
                <Link to="/" style={{textDecoration:'none'}} onClick={()=>handlePage("")}><span id='link-text'>Home</span></Link>  
          </div>
           <div id='explore' className='sidebar-menu-items'>
                  <FiHash id='icon' />
                  <Link to="explore" style={{textDecoration:'none'}} onClick={()=>handlePage("explore")}><span id='link-text'>Explore</span></Link>
          </div>
           <div id='communities' className='sidebar-menu-items'>
                  <BsPeopleFill id='icon' />
                  <Link to="communities" style={{textDecoration:'none'}} onClick={()=>handlePage("communities")}><span id='link-text'>Communities</span></Link>
          </div>

           <div id='notifications' className='sidebar-menu-items'>
                  <IoMdNotifications id='icon' />
                  <Link to="notifications" style={{textDecoration:'none'}} onClick={()=>handlePage("notifications")}><span id='link-text'>Notifications</span></Link>
          </div>
           <div id='messages' className='sidebar-menu-items'>
                  <FiMail id='icon' />
                  <Link to="messages" style={{textDecoration:'none'}} onClick={()=>handlePage("messages")}><span id='link-text'>Messages</span></Link>
          </div>
           <div id='bookmarks' className='sidebar-menu-items'>
                  <BsFillBookmarkFill id='icon' />
                  <Link to="bookmarks" style={{textDecoration:'none'}}  onClick={()=>handlePage("bookmarks")}><span id='link-text'>Bookmarks</span></Link>
          </div>
           <div id='profiles' className='sidebar-menu-items'>
                  <CgProfile id='icon' />
          <Link to="profile" style={{ textDecoration: 'none' }} onClick={() => { handleProfilePage();handlePage("profile") }}><span id='link-text'>Profile</span></Link>
          </div>
           <div id='more' className='sidebar-menu-items'>
              <HiOutlineDotsCircleHorizontal id='icon' />
              <span id='link-text'>More</span>
          </div>
          <div className='tweet-btn-sidebar'>
          <span id='btn-text'>Tweet</span>
          <RiQuillPenLine id='icon'/>
          </div>
              
        </div>
          <div onClick={handleSignOut} className='account-sidebar'>
              <div className='account-sidebar-details'>
                
                    <CgProfile id='icon'/>
                
                <span className='account-info'>
                    {/* <span>Ali</span> */}
                    <span>{isAuthenticated && username}</span>
                </span>
                
                    {/* <FiMoreHorizontal id='icon-three-dots'/> */}
                   
              </div>
          </div>
    </div>
  )
}

export default SidebarMenu