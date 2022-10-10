import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import userSlice from "../../../redux/slices/userSlice";
import ReconnectingWebSocket from "reconnecting-websocket";
import { addMessage } from "../../../redux/slices/ChatSlice";
import { getChatMessage, loadMoreMessage } from "../../../redux/asyncActions/ChatAsync";
import './PrivateRoomChat.css';
import AddPicker from "../components/AddPicker";
import { BiSend, BiUpArrowCircle } from "react-icons/bi";

const PrivateRoomChat = () => {
    const [messageInput, setMessageInput] = useState("");
    const [isTyping, setIsTyping] = useState(null);
    const [typingUser, setTypingUser] = useState(null);
    const { username } = useParams();
    const userIn = useSelector((state) => state.userReducer);
    const [noScroll, setNoScroll] = useState(true);
    const dispatch = useDispatch();
    let endpoint = process.env.REACT_APP_WS_DOMAIN;
    const me = userIn?.username;
    const chatState = useSelector((state) => state.chatReducer);
    const chats = chatState.chatMessage;
    const meta = chatState.meta;
    const [onlineStatus, setOnlineStatus] = useState(null);
    const audioRef = useRef(null);
    const messageDivRef = useRef(null);

    const client = new ReconnectingWebSocket(
        endpoint + "ws/chat/" + username + "/" + "?token=" + userIn.access
    );
    
    useEffect(() => {
        if (localStorage.getItem("access")) {
            client.onopen = function () {
                console.log("Chat Websoket Connected");
                // dispatch(setMessageNotify());
            };
            client.onmessage = function (event) {
                const data = JSON.parse(event.data);

                if (data.command === "private_chat") {
                    dispatch(addMessage(data));
                    if (audioRef.current) {
                        audioRef.current.play();
                    }
                }
                if (data.command === "is_typing") {
                    setTypingUser(data.user);
                    setIsTyping(data.text);
                    timer = setTimeout(() => {
                        setIsTyping(null);
                    }, 500);
                }
            };
            client.onclose = function () {
                console.log("WebSocket Client disconnected");
            };
        }
    }, [dispatch]);

    // useEffect(() => {
    //     if (noScroll) {
    //         messageDivRef.current.scrollTop = messageDivRef.current.scrollHeight;
    //     }
    // }, [chats]);
    const EnterKey = (e) => {
        if (e.key === "Enter" || e.keyCode === 13) {
            if (messageDivRef.lenght !== 0) {
                sendChat(e)
            }
        }
    };
    useEffect(() => {
        dispatch(getChatMessage(username));
    }, [dispatch, username]);
    // setInterval(() => {
    //     console.log(userIn.access);
    // },100);
    const sendChat = (e) => {
        e.preventDefault();
        if (!messageInput) {
            alert("cannot be blank!");
        } else {
            client.send(
                JSON.stringify({
                    command: "private_chat",
                    message: messageInput,
                    username: me,
                })
            );
        }
        setMessageInput("");
    };
    let timer;
    const isTypingFunction = (e) => {
        window.clearTimeout(timer);
        client.send(
            JSON.stringify({
                command: "is_typing",
                text: `${me} is typing ...`,
                user: me,
            })
        );
    };
    function loadMore() {
        if (meta?.next) {
            setNoScroll(false);
            dispatch(loadMoreMessage(meta.next));
        }
    }

    return (
        <div className="private-message-conatiner">
            <div className="messages-chat-box">
                <div className="private-message-chat">
                    <div className="msg-chat">    
                        chat message chat message
                        chat message
                        chat message
                        chat message
                        chat message
                        chat message
                        chat message
                        chat message
                        chat message
                        chat message
                        chat message
                        chat message
                    </div>
                </div>
                <div className="private-message-chat">
                    <div className="msg-chat">    
                        chat message chat message
                        chat message
                        chat message
                        chat message
                        chat message
                        chat message
                        chat message
                        chat message
                        chat message
                        chat message
                        chat message
                        chat message
                    </div>
                </div>
            </div>
            <div className="input-pivate-message-box">
                <div className="private-message-input">
                    <span className="chat-emoji">
                        <AddPicker
                            classNem="chat-emoji-class"
                            position="up"
                            setInput={setMessageInput}
                        />
                    </span>
                    <div className="input-conatiner">
                        <input
                            type="text"
                            value={messageInput}
                            onChange={(e)=>setMessageInput(e.target.value)}
                            placeholder="Start a new message"
                            onKeyDown={EnterKey}
                            onKeyDownCapture={isTyping}
                            className="chat-input"
                        />
                    </div>
                    <div className="send-icon-chat">
                        <BiSend id="icon-send"/>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default PrivateRoomChat;