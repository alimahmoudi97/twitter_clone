import React,{useState,useEffect,useRef} from "react";
import './TweetDetails.css';
import avatar from './../download.jpg';
import { BsThreeDots } from 'react-icons/bs';
import { SiTheconversation } from 'react-icons/si';
import { useSelector,useDispatch } from 'react-redux';
import { FaRetweet } from 'react-icons/fa';
import { BsHeart, BsUpload } from 'react-icons/bs';
import { WiStars } from 'react-icons/wi';
import { BsImage,BsEmojiSmile } from 'react-icons/bs';
import { AiOutlineFileGif } from 'react-icons/ai';
import { BiPoll } from 'react-icons/bi';
import { GrSchedulePlay, GrLocation } from 'react-icons/gr';

const TweetDetails = () => {
    const textAreaRef = useRef(null);
    const [currentValue, setCurrentValue] = useState("");

    useEffect(() => {
        textAreaRef.current.style.height = "0px";
        const scrollHeight = textAreaRef.current.scrollHeight;
        textAreaRef.current.style.height = scrollHeight+"px";
    }, [currentValue])
    return (
        <div className="tweet-details-box">
            <div className="tweet-details-container">
                <div className="tweet-details-info-user-container">
                    <div className="tweet-details-info-user">
                        <div className="tweet-details-avatar">
                            <img src={avatar} />
                        </div>
                        <div className="text">Tommy Vercetti</div>
                    </div>
                    <BsThreeDots/>
                </div>
                <div className="text-tweet-details">
                    <p>HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH</p>
                    <a>Translate Tweet</a>
                    <div>
                        <span>1:44 AM · Jul 30, 2022</span>
                        <span> · Twitter Web App</span>
                    </div>
                    <div className="tweet-reaction">
                        <span>1 Retweet</span>
                        <span> 34 Likes</span>
                    </div>
                    <div className='tweet-icons-group'>
                        <div className='reply-icon'>
                            <SiTheconversation id='icon'/>
                            <div>131</div>
                        </div>
                        <div className='retweet-icon'>
                            <FaRetweet id='icon'/>
                            <div>131</div>
                        </div>
                        <div className='like-icon'>
                            <BsHeart id='icon'/>
                            <div>131</div>
                        </div>
                        <div className='sent-icon'>
                            <BsUpload id='icon'/>
                            <div>131</div>
                        </div>
                    </div>
                    <div className='write-tweet-box' style={{
                        display: 'flex',
                        borderTop:'1px solid rgb(47,51,54)',
                    }}>
                    <div className='avatar'>
                        <img
                        style={{
                            width: '3em',
                            height: '3em',
                            borderRadius: '50%',
                            marginTop:'1em'
                        }}
                        src={avatar}
                        alt="" />
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
                </div>
                
            </div>
        </div>
    )
}

export default TweetDetails;