import React,{useState,useRef,useEffect} from 'react';
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

function Home() {

    const textAreaRef = useRef(null);
    const [currentValue, setCurrentValue] = useState("");
    useEffect(() => {
        textAreaRef.current.style.height = "0px";
        const scrollHeight = textAreaRef.current.scrollHeight;
        textAreaRef.current.style.height = scrollHeight+"px";
    },[currentValue])

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
                                <button>Tweet</button>
                            </div>
                        </div>
                    </div>
                </div>
                <Tweet/>
            </>
     
    )
}

export default Home;