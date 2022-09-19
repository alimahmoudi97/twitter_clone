import React, { useState, useRef, useEffect } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import './Home.css';
import SidebarMenu from './SidebarMenu';
import Trends from './Trends';
import Tweet from './Tweet';
import { WiStars } from 'react-icons/wi';
import { BsImage,BsEmojiSmile } from 'react-icons/bs';
import { AiOutlineFileGif } from 'react-icons/ai';
import { BiPoll } from 'react-icons/bi';
import { GrSchedulePlay, GrLocation } from 'react-icons/gr';
import { Routes,Route } from 'react-router-dom';
import avatar from './../download.jpg';
import TweetUser from './TWEETUSER';
// import { addTweet } from './../app/TweetsUserSlice';
import {addTweet, load_tweet} from './../redux/asyncActions/TweetAsync';
import { checkAuthenticated } from '../redux/asyncActions/UserAsync';
function Home() {
    const tweets = useSelector((state) => state.tweetReducer.tweets);
    const isAuthenticated = useSelector((state) => state.userReducer.isAuthenticated);
    const textAreaRef = useRef(null);
    const [currentValue, setCurrentValue] = useState("");
    const [makeTweet, setMakeTweet] = useState({});
    const dispatch = useDispatch();

    useEffect(() => {
        textAreaRef.current.style.height = "0px";
        const scrollHeight = textAreaRef.current.scrollHeight;
        textAreaRef.current.style.height = scrollHeight+"px";
    }, [currentValue])
    useEffect(() => {
        setMakeTweet({
            title: currentValue,
            is_private:false,
        });
    }, [currentValue])
    useEffect(() => {
        dispatch(load_tweet());
        console.log("Tweets");
    },[isAuthenticated])
    const handleTweetButton =()=>{
        dispatch(addTweet(makeTweet));
    }
    return (
            <>
                <header className='header-feed-container'>
                    <span>
                        Home
                    </span>
                    <WiStars id='icon'/>                    
                </header>
                <div className='write-tweet-box'>
                    <div className='avatar'>
                        <img id="avatar" src={avatar} alt=""/>
                    </div>
                    <div className='write-tweet-container'>
                        <div className='text-tweet'>
                            {/* <span placeholder='ff'></span> */}
                            <textarea
                                ref={textAreaRef}
                                value={currentValue}
                                onChange={(e) => {
                                    setCurrentValue(e.target.value)
                                }}
                                placeholder="What's happening?"></textarea>
                            {/* <input placeholder="What's happening?"/> */}
                        </div>
                        <div className='icons-write-tweet'>
                            <div className='icons'>
                                <BsImage />
                                <AiOutlineFileGif />
                                <BiPoll />
                                <BsEmojiSmile />
                                <GrSchedulePlay />
                                <GrLocation/>
                            </div>
                            <div className='tweet-btn'>
                                <button onClick={handleTweetButton}>Tweet</button>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <Tweet data={tweets}/>
            </>
     
    )
}

export default Home;