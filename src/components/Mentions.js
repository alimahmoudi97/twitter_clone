import React from 'react';
import { BsThreeDots } from 'react-icons/bs';
import './Mentions.css';
import avatar from './../download.jpg';
import { SiTheconversation } from 'react-icons/si';
import { FaRetweet } from 'react-icons/fa';
import { BsHeart } from 'react-icons/bs';
import { BsUpload } from 'react-icons/bs';

function Mentions() {
  return (
    <div className='mentions-box'>
            <div className='mentions-avatar'>
              <img src={avatar} alt=""/>
            </div>
            <div className='mentions-container-details'>
              <div className='mentions-user-info'>
                  <div className='user-info'>
                    <span>Ali</span>
                    <span>mahmoudi45</span>
                    <span>. Mar 19</span>
                  </div>
                <BsThreeDots id='icon'/>
              </div>
              <div className='mentions-user-replying-to'>
                  <span>Replying to @mahmoudi45</span>
              </div>
              <div className='mentions-user-text'>
                  <span>Hi</span>
              </div>
              <div className='mentions-icons-group'>
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
  )
}

export default Mentions