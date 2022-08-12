import React from 'react';
import { SiTheconversation } from 'react-icons/si';
import { useSelector,useDispatch } from 'react-redux';
import { FaRetweet } from 'react-icons/fa';
import { BsHeart, BsUpload } from 'react-icons/bs';
import { BsThreeDots } from 'react-icons/bs';
import {Link} from 'react-router-dom';
import './Tweet.css';
import avatar from './../download.jpg';
import TweetUser from './TWEETUSER.js';
import TimeLine from './TimeLine.js';

function Tweet() {
    const data=useSelector((state)=>state.tweet)
    return (
        
        data.tweets.map((value,index) => {
            return (
                <Link to="/tweetdetails">
                
                <div className='tweet-box'>
                        <div className='tweet-container'>
                            <div className='tweet-avatar'>
                                <img src={avatar} alt="" />
                            {(index.replyersLenght >= 1) &&
                                <div className='vertical-line-container'>
                                    <div className='vertical-line'></div>   
                                </div>
                            }
                            </div>
                            <div className='tweet-container-details'>
                                <div className='tweet-user-info'>
                                    <div className='user-info'>
                                        <span>Ali</span>
                                        <span>mahmoudi45</span>
                                        <span>. Mar 19</span>
                                    </div>
                                    <BsThreeDots id='icon'/>
                                </div>
                                <div className='tweet-user-replying-to'>
                                    <span>Replying to @mahmoudi45</span>
                                </div>
                                <div className='tweet-user-text'>
                                    <p>{value.tweet}</p>
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
                            </div>
                        </div>
                    {(index.replyersLenght >=1) && (
                        
                        <div className='tweet-container'>
                            <div className='tweet-avatar'>
                                <img src={avatar} alt=""/>
                            </div>
                            <div className='tweet-container-details'>
                                <div className='tweet-user-info'>
                                    <div className='user-info'>
                                        <span>Ali</span>
                                        <span>mahmoudi45</span>
                                        <span>. Mar 19</span>
                                    </div>
                                    <BsThreeDots id='icon'/>
                                </div>
                                <div className='tweet-user-replying-to'>
                                    <span>Replying to @mahmoudi45</span>
                                </div>
                                <div className='tweet-user-text'>
                                    <p>HI</p>
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
                            </div>
                        </div>
                        )}
                    
                </div>
            </Link>
            )
        })
    )
}

export default Tweet;