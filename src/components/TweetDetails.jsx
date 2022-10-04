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
import { useLocation } from 'react-router-dom';
import { addComment, tweet_comments } from "../redux/asyncActions/CommentAsync";
import Tweet from "./Tweet";
import { likeTweet } from "../redux/asyncActions/TweetAsync";

const TweetDetails = () => {
    const textAreaRef = useRef(null);
    const commentList = useSelector(state => state.commentReducer.commentList);
    const [comment, setComment] = useState("");
    // const [comment, setComment] = useState("");
    const [likeCount, setLikeCount] = useState(0);
    const location = useLocation();
    const dispatch = useDispatch();
    const data = location.state;
    
    const handleReplyButton = () => {
        dispatch(addComment(data.id, comment, data.id, false));
        setComment("");
        // dispatch(tweet_comments(data.id));
    }
    const likeCounterBTN = () => {
        dispatch(likeTweet(data.id));
    }
    useEffect(() => {
        textAreaRef.current.style.height = "0px";
        const scrollHeight = textAreaRef.current.scrollHeight;
        textAreaRef.current.style.height = scrollHeight + "px";
    }, [comment]);
    useEffect(() => {
        dispatch(tweet_comments(data.id));
        // console.log(commentList);
    },[data.id, dispatch])
    useEffect(() => {
        setLikeCount(data.like_count);
        console.log(data.like_count);
    },[data.like_count,dispatch])
    return (
        <>

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
                    <p>{data.title}</p>
                    <a>Translate Tweet</a>
                    <div>
                        <span>1:44 AM · Jul 30, 2022</span>
                        <span> · Twitter Web App</span>
                    </div>
                    <div className="tweet-reaction">
                        <span>1 Retweet</span>
                        <span> {data.like_count} Likes</span>
                    </div>
                    <div className='tweet-icons-group'>
                        <div
                                className='reply-icon'
                                // onClick={replyCounterBTN}
                            >
                            <SiTheconversation id='icon'/>
                                { data.comment_count !==0 &&
                                            <div>{data.comment_count}</div>
                                }
                        </div>
                        <div className='retweet-icon'>
                            <FaRetweet id='icon'/>
                                {data.share_count !== 0 &&
                                        <div>{data.share_count}</div>
                                }
                        </div>
                            <div
                                className='like-icon'
                                onClick={likeCounterBTN}
                            >
                            <BsHeart id='icon'/>
                                {data.like_count !== 0 &&
                                    <div>{likeCount}</div>
                                }
                        </div>
                        <div className='sent-icon'>
                            <BsUpload id='icon'/>
                            {/* <div>131</div> */}
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
                                value={comment}
                                onChange={(e) => {
                                    setComment(e.target.value)
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
                                    <button
                                        disabled={!comment}
                                        onClick={handleReplyButton}
                                    >Reply</button>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                
            </div>
        </div>
        <Tweet data={commentList} />
                        
        </>
    )
}

export default TweetDetails;