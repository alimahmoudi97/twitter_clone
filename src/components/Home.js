import React,{useState,useRef,useEffect} from 'react';
import './Home.css';
import SidebarMenu from './SidebarMenu';
import Trends from './Trends';
import Tweet from './Tweet';
import { WiStars } from 'react-icons/wi';
import { FiSearch } from 'react-icons/fi';
import { BsImage,BsEmojiSmile } from 'react-icons/bs';
import { AiOutlineFileGif } from 'react-icons/ai';
import { BiPoll } from 'react-icons/bi';
import { GrSchedulePlay, GrLocation } from 'react-icons/gr';
import { Routes,Route } from 'react-router-dom';
import avatar from './../download.jpg';
import Feed from './Feed.js';
function Home() {
    const [isActive, setActive] = useState('');
    const style = document.getElementById('search');
    const textAreaRef = useRef(null);
    const [currentValue, setCurrentValue] = useState("");
    useEffect(() => {
        textAreaRef.current.style.height = "0px";
        const scrollHeight = textAreaRef.current.scrollHeight;
        textAreaRef.current.style.height = scrollHeight+"px";
    },[currentValue])
    const handleSearchBlur = (event) => {
        // style.classList.toggle('active');
        if (event.currentTarget === event.target) {
            console.log('unfocused self');
            setActive('');
        } else {
            console.log('unfocused child', event.target);
            // style.classList.toggle('active');
            setActive('');
        }
        if (!event.currentTarget.contains(event.relatedTarget)) {
            console.log('focuse left self');
            setActive('');
            // style.classList.toggle('active');
        }
    }
    const handleSearchFocus =(event)=> {
        if (event.currentTarget === event.target) {
            console.log('focused self');
            setActive('active');
            // style.classList.toggle('active');
        } else {
            console.log('focused child');
            setActive('active');
            // style.classList.toggle('active');
        }
        if (!event.currentTarget.contains(event.relatedTarget)) {
            // console.log('focuse entered self');
            setActive('active');
        }
    }
    return (
        <div className='home-container'>
            <div className='sidebar-menu'>
                <SidebarMenu/>
            </div>
            <div className='feed-conatiner'>
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
                <Tweet />
                <Tweet />
                <Tweet/>
            </div>
            <div className='trend-sidebar'>
                <div className='search-container'>
                    <div id='search' tabIndex={0} onFocus={handleSearchFocus} onBlur={handleSearchBlur} className={`search ${isActive}`}>
                        <FiSearch id='icon'/>
                        <input  placeholder='Search Twitter'/>
                    </div>
                </div>
                <Trends/>
            </div>
        </div>
    )
}

export default Home;