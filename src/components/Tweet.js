import React from 'react';
import { SiTheconversation } from 'react-icons/si';
import { FaRetweet } from 'react-icons/fa';
import { BsHeart,BsUpload } from 'react-icons/bs';
import './Tweet.css';
import avatar from './../download.jpg';
function Tweet() {
    return (
        <div className='tweet-box'>
            <div className='tweet-container'>
                <div className='icons-tweet'>
                    <div id='icon-topic'>
                    </div>
                    <img id='avatar' src={avatar} alt="" />
                </div>
                <div className='info-tweet'>                    
                    <span>Computer programming</span>
                    <h3>Python Coding @ clcoding . 10h</h3>
                    <p className='text-tweet'>
                        Create Voice Recorder in Python.Create Voice Recorder in Python.Create Voice Recorder in Python.Create Voice Recorder in Python.
                        Create Voice Recorder in Python.Create Voice Recorder in Python.Create Voice Recorder in Python.Create Voice Recorder in Python.
                        Create Voice Recorder in Python.Create Voice Recorder in Python.Create Voice Recorder in Python.Create Voice Recorder in Python.
                        Create Voice Recorder in Python.Create Voice Recorder in Python.Create Voice Recorder in Python.Create Voice Recorder in Python.
                        Create Voice Recorder in Python.Create Voice Recorder in Python.Create Voice Recorder in Python.Create Voice Recorder in Python.
                        Create Voice Recorder in Python.Create Voice Recorder in Python.Create Voice Recorder in Python.Create Voice Recorder in Python.
                        Create Voice Recorder in Python.Create Voice Recorder in Python.Create Voice Recorder in Python.Create Voice Recorder in Python.
                        Create Voice Recorder in Python.Create Voice Recorder in Python.Create Voice Recorder in Python.Create Voice Recorder in Python.
                        Create Voice Recorder in Python.Create Voice Recorder in Python.Create Voice Recorder in Python.Create Voice Recorder in Python.
                        Create Voice Recorder in Python.Create Voice Recorder in Python.Create Voice Recorder in Python.Create Voice Recorder in Python.
                        Create Voice Recorder in Python.Create Voice Recorder in Python.Create Voice Recorder in Python.Create Voice Recorder in Python.
                        Create Voice Recorder in Python.Create Voice Recorder in Python.Create Voice Recorder in Python.Create Voice Recorder in Python.
                        Create Voice Recorder in Python.Create Voice Recorder in Python.Create Voice Recorder in Python.Create Voice Recorder in Python.
                        Create Voice Recorder in Python.Create Voice Recorder in Python.Create Voice Recorder in Python.Create Voice Recorder in Python.
                        Create Voice Recorder in Python.Create Voice Recorder in Python.Create Voice Recorder in Python.Create Voice Recorder in Python.
                        Create Voice Recorder in Python.Create Voice Recorder in Python.Create Voice Recorder in Python.Create Voice Recorder in Python.
                        Create Voice Recorder in Python.Create Voice Recorder in Python.Create Voice Recorder in Python.Create Voice Recorder in Python.
                        Create Voice Recorder in Python.Create Voice Recorder in Python.Create Voice Recorder in Python.Create Voice Recorder in Python.
                        Create Voice Recorder in Python.Create Voice Recorder in Python.Create Voice Recorder in Python.Create Voice Recorder in Python.
                        Create Voice Recorder in Python.Create Voice Recorder in Python.Create Voice Recorder in Python.Create Voice Recorder in Python.
                        Create Voice Recorder in Python.Create Voice Recorder in Python.Create Voice Recorder in Python.Create Voice Recorder in Python.
                        Create Voice Recorder in Python.Create Voice Recorder in Python.Create Voice Recorder in Python.Create Voice Recorder in Python.
                        Create Voice Recorder in Python.Create Voice Recorder in Python.Create Voice Recorder in Python.Create Voice Recorder in Python.
                        Create Voice Recorder in Python.Create Voice Recorder in Python.Create Voice Recorder in Python.Create Voice Recorder in Python.
                    </p>
                    <div className='bottom-icons-tweet'>
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
                </div>
            </div>

        </div>
    )
}

export default Tweet;