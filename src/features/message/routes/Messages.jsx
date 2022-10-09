import React from "react";
import { FiSettings } from 'react-icons/fi';
import { RiMailAddLine } from 'react-icons/ri';
import PrivateRoomChat from './PrivateRoomChat';
import './Messages.css';
import avatar from '../../../download.jpg';

export const Messages = () => {
    return (
        <div className="messages-container" style={{color:"white"}}>
            <div className="messages-users-container">
                <header className="messages-user-header">
                    <div className="messages-user-box">
                        <div className="messages-user-title">
                            Messages
                        </div>
                        <div className="messages-user-icons">
                            <div>
                                <FiSettings size={30}/>
                            </div>
                            <div>
                                <RiMailAddLine size={30}/>
                            </div>
                        </div>
                    </div>
                    <div className="messages-search">
                        <input type="text" placeholder="search direct messages"/>
                    </div>
                </header>
                <div className="message-user-info-container">
                    <div className="message-user-avatar">
                        <img src={avatar} alt=""/>
                    </div>
                    <div className="message-user-info">
                        <div>
                            <span>Arman</span>
                            <span>@Arman</span>
                            <span>.</span>
                            <span>Dec 2.2022</span>
                        </div>
                        <div>
                            <span>OK</span>
                        </div>
                    </div>
                </div>
                    <div className="message-user-info-container">
                    <div className="message-user-avatar">
                        <img src={avatar} alt=""/>
                    </div>
                    <div className="message-user-info">
                        <div>
                            <span>Arman</span>
                            <span>@Arman</span>
                            <span>.</span>
                            <span>Dec 2.2022</span>
                        </div>
                        <div>
                            <span>OK</span>
                        </div>
                    </div>
                </div>
                    <div className="message-user-info-container">
                    <div className="message-user-avatar">
                        <img src={avatar} alt=""/>
                    </div>
                    <div className="message-user-info">
                        <div>
                            <span>Arman</span>
                            <span>@Arman</span>
                            <span>.</span>
                            <span>Dec 2.2022</span>
                        </div>
                        <div>
                            <span>OK</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="messages-user-chat-room">
                <PrivateRoomChat/>
            </div>
        </div>
    )
}
