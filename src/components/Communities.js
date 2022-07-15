import React from 'react';
import { Link } from 'react-router-dom';
import { FiSearch, FiPlusCircle } from 'react-icons/fi';
import { MdOutlineArrowBack } from 'react-icons/md';
import './Communities.css';

function Communities() {
  return (
    <div className='communities-container' style={{height:1500}}>
          <header className='communities-header'>
              <div className='communities-header-title'>
                <Link id='link' to="/" style={{color:"white"}}>
                    <MdOutlineArrowBack id='icon'/>
                </Link>    
                <span>
                    Communities
                </span>
              </div>
              <div className='communities-header-icons'>
                  <FiSearch id='icon'/>
                  <FiPlusCircle id='icon'/>
              </div>
          </header>
    </div>
  )
}

export default Communities