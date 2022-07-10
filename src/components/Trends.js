import React from "react";
import './Trends.css';
import {FiMoreHorizontal } from 'react-icons/fi';
function Trends() {
    const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,11,12,13,14,15];
    return (
        <div className="trends-box">
            <div className="trend-header-title"><span>Trends for you</span></div>
            {data.map(index => {
                return (
                        <div className="trend-container">
                            <div className="trend-info">
                                <span id='topic-trend'>Trending in France</span>
                                <span id='trend'>Fritz</span>
                                <span id='trend-amount'>60.6k Tweets</span>
                            </div>
                            <FiMoreHorizontal id='icon'/>
                        </div>
                    
                )
            })}
            
        </div>
    )
}
export default Trends;