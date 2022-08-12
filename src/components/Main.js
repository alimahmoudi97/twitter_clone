import React,{useState,useRef,useEffect} from 'react';
import Trends from './Trends';
import SidebarMenu from './SidebarMenu';
import { FiSearch } from 'react-icons/fi';
import {Route,Routes} from 'react-router-dom';
import Home from './Home.js';
import avatar from './../download.jpg';

import Bookmarks from './Bookmarks';
import Communities from './Communities';
import Explore from './Explore';
import Messages from './Messages';
import Notifications from './Notifications';
import Profile from './Profile';
import Search from './Search';
import TweetDetails from './TweetDetails';

function Main() {
  
    return (
        <div className='home-container'>
            <div className='sidebar-menu'>
                <SidebarMenu/>
            </div>
            <div className='feed-conatiner'>
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path="/bookmarks" element={<Bookmarks />} />
                <Route path="/communities" element={<Communities />} />
                <Route path="/explore" element={<Explore />} />
                <Route path="/messages" element={<Messages />} />
                <Route path="/notifications" element={<Notifications />} />
                <Route path="/profile" element={<Profile />} />
                <Route path='/tweetdetails' element={<TweetDetails/>} />
            </Routes>

            </div>
            {/* <Home/> */}
            <div className='trend-sidebar'>
                <Search/>
                <Trends/>
            </div>
        </div>
    )
}

export default Main;