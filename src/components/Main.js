import React,{useState,useRef,useEffect} from 'react';
import Trends from './Trends';
import Tweet from './Tweet';
import { WiStars } from 'react-icons/wi';
import SidebarMenu from './SidebarMenu';
import { FiSearch } from 'react-icons/fi';
import { BsImage,BsEmojiSmile } from 'react-icons/bs';
import { AiOutlineFileGif } from 'react-icons/ai';
import { BiPoll } from 'react-icons/bi';
import { GrSchedulePlay, GrLocation } from 'react-icons/gr';
import Home from './Home.js';
import avatar from './../download.jpg';


function Main() {
    const [isActive, setActive] = useState('');
    const handleSearchBlur = (event) => {
        if (event.currentTarget === event.target) {
            setActive('');
        } else {
            setActive('');
        }
        if (!event.currentTarget.contains(event.relatedTarget)) {
            setActive('');
        }
    }
    const handleSearchFocus =(event)=> {
        if (event.currentTarget === event.target) {
            setActive('active');
        } else {
            setActive('active');
        }
        if (!event.currentTarget.contains(event.relatedTarget)) {
            setActive('active');
        }
    }
    return (
        <div className='home-container'>
            <div className='sidebar-menu'>
                <SidebarMenu/>
            </div>
            <Home/>
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

export default Main;