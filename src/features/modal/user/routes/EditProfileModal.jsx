import React from 'react';
import './EditProfileModal.css';
import { IoMdClose } from 'react-icons/io';
import { BsCamera } from 'react-icons/bs';

const EditProfileModal = () => {
    return (
        <div className="profile-modal-container">
            <div className='profile-modal-box'>
                <div className='header-profile-modal'> 
                    <div className='header-title'>
                        <div>
                            <IoMdClose/>
                        </div>
                        <span>
                            Edit Profile
                        </span>
                    </div>
                    <button>
                        Save
                    </button>
                </div>
                <div className='image-cover-box'>
                    <div className='image-container'>
                        <img src="https://www.w3schools.com/w3css/img_lights.jpg" alt=""/>
                    </div>
                    <div className='icon-container'>
                        <div className='camera-icon'>
                            <BsCamera id="camera"/>
                        </div>
                        <div className='close-icon'>
                            <IoMdClose id="close"/>
                        </div>
                    </div>
                </div>
                <div className='avatar-box'>
                    <img src="https://www.w3schools.com/w3css/img_lights.jpg" alt=""/>
                </div>
            </div>
        </div>
    )
}
export default EditProfileModal;