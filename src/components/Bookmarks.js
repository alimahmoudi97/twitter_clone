import React from 'react';
import { BsThreeDots } from 'react-icons/bs';
import './Bookmarks.css';
import Tweet from './Tweet';
function Bookmarks() {
  return (
    <div className='bookmarks-container'>
      <div className='bookmarks-header'>
        <div className='bookmarks-header-container'>
          <div className='bookmarks-title-header'>
            <span id='title'>Bookmarks</span>
            <span id='username'>@Ali123</span>
          </div>
          <BsThreeDots id='icon'/>
        </div>
      </div>
      {/* <Tweet/> */}
    </div>
  )
}

export default Bookmarks