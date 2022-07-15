import React from 'react';
import {Routes,Route,Link} from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import './Notifications.css';
import ListMentions from './ListMentions';


function Notifications() {
  return (
    <div className='notifications-container' style={{ color: "white",height:1500 }}>
      <div className='notifications-header'>
        <div className='notifications-header-info'>
          <span>
            Notifications  
          </span>
          <FiSettings id='icon'/>
        </div>
        <div className='notifications-header-tabs'>
          <Link  className='tab-container' to='/notifications'>
            <div>
              <span>All</span>
            </div>
          </Link>
          <Link  className='tab-container' to=''>
            <div>
              <spna>Mentions</spna>
            </div>
          </Link>
        </div>
      </div>
      <Routes>
            <Route path='/' element={<ListMentions/>} />
            {/* <Route path="mentions"/> */}
          </Routes>
    </div>
  )
}

export default Notifications