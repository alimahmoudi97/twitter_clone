import React from 'react';
import { SiTheconversation } from 'react-icons/si';
import { FaRetweet } from 'react-icons/fa';
import { BsHeart, BsUpload } from 'react-icons/bs';
import { BsThreeDots } from 'react-icons/bs';
import './Tweet.css';
import avatar from './../download.jpg';
import TweetUser from './TWEETUSER.js';
import TimeLine from './TimeLine.js';

function Tweet() {

    let TimeLineTweet = new TimeLine("mahmoudi345");
    for (let i = 0; i < 10; i++){
        let data = new TweetUser(`Ali ${i}`, "mahmoudi", "Hi everyone", "2", "5", new Date());
        data.replyers("hadi", "mahmoudi","hi ali","0", "10", new Date());
        data.replyers("mahdi", "mahmoudi", "this is good situation", "0", "120", new Date());
        TimeLineTweet.addTweetToTimeLine(data);
    }
    // console.log(TimeLineTweet);
    return (
        
        TimeLineTweet.listTimeLine.map((index) => {
            return (
                <div className='tweet-box'>
                        <div className='tweet-container' style={{paddingTop:'1em'}}>
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
                                    <p>Hi</p>
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
                    {(index.replyersLenght >= 1) && (
                        
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
                                    <p>Hi</p>
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
            )
        })
    )
}

export default Tweet;