import Home from './components/Home.js';
import './App.css';
import Main from './components/Main';
import TweetDetails from './components/TweetDetails';
import Register from './components/Register';
import Profile from './components/Profile';
import { Route, Routes,Router,Outlet } from 'react-router-dom';
import Bookmarks from './components/Bookmarks';
import Communities from './components/Communities';
import Explore from './components/Explore';
import { Messages }  from './features/message/index';
import Notifications from './components/Notifications';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from 'react-redux';
import React, { useState, useRef, useEffect } from 'react';
import {useDispatch } from 'react-redux';
import { removeMessage } from './redux/slices/tweetSlice';
import PrivateRoomChat from './features/message/routes/PrivateRoomChat.jsx';

function App() {
  const [message, setMessage] = useState('');
  const messageUser = useSelector(state => state.userReducer.message);
  const messageTweet = useSelector(state => state.tweetReducer.message);
  const dispatch = useDispatch();
  useEffect(() => {
    setMessage(messageTweet);
  }, [messageTweet]);
  useEffect(() => {
    setMessage(messageUser);
  }, [messageUser]);
  useEffect(() => {
    if (message !== null) {
      toast(message);
      dispatch(removeMessage());
      console.log(message);
    }
    },[message])
  return (
    <>
      <ToastContainer
        autoClose={1000}
      />
    <Routes>
      <Route path='/' element={<Main />}>
        <Route index element={<Home />}/>
        <Route path="bookmarks" element={<Bookmarks/>} />
        <Route path="communities" element={<Communities/>} />
        <Route path="explore" element={<Explore/>} />
        <Route path="messages" element={<Messages/>} />
        <Route path="messages/w/:username" element={<PrivateRoomChat/>} />
        <Route path="notifications" element={<Notifications/>} />
        <Route path="profile" element={<Profile />} />
        <Route path='tweetdetails' element={<TweetDetails />} />
      </Route>
      <Route path='/register' element={<Register/>} />
    </Routes>
    </>
    // <Messages/>
  );
}

export default App;
