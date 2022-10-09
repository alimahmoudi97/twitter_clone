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
import data from '@emoji-mart/data';
import { Picker } from 'emoji-mart';
import { removeMessage } from '../redux/slices/tweetSlice';
import ClipLoader from "react-spinners/ClipLoader";
// import "emoji-mart/css/emoji-mart.css";

function Home() {
    const tweets = useSelector((state) => state.tweetReducer.tweets);
    const isAuthenticated = useSelector((state) => state.userReducer.isAuthenticated);
    const isLoading = useSelector((state) => state.tweetReducer.isLoading);
    const textAreaRef = useRef(null);
    const [currentValue, setCurrentValue] = useState("");
    const [makeTweet, setMakeTweet] = useState({});
    const [showEmoji, setShowEmoji] = useState(false);
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
        dispatch(removeMessage());
        console.log("Tweets");
    },[isAuthenticated])
    const handleTweetButton = () => {
        dispatch(addTweet(makeTweet));
    };
    const showEmojiHandle = () => {
        setShowEmoji(!showEmoji);
        console.log("Emoji")
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
                                <div onClick={showEmojiHandle}>
                                    <BsEmojiSmile />
                                </div>
                                <GrSchedulePlay />
                                <GrLocation/>
                            </div>
                            <div className='tweet-btn'>
                                <button onClick={handleTweetButton}>Tweet</button>
                            </div>
                            
                        </div>
                    </div>
            </div>
            {
                isLoading ?
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height:'100vh'
                    }}>
                        <ClipLoader color="blue" loading={isLoading} size={70}/>
                    </div> : <Tweet data={tweets} />
            }
            {
                showEmoji && (
                    <Picker
                        data={data}
                        style={{
                            position: "absolute",
                            marginTop: -18,
                            display: `${showEmoji}`,
                            zIndex:10
                        }}
                        onEmojiSelect={console.log} />)
            }
            </>
     
    )
}

export default Home;