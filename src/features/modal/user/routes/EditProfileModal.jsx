import React, {useRef} from 'react';
import './EditProfileModal.css';
import { IoMdClose } from 'react-icons/io';
import { BsCamera } from 'react-icons/bs';

const EditProfileModal = () => {
    const inputRefrenceUsername = useRef(null);
    const inputRefrenceBio = useRef(null);
    const inputRefrenceLocation = useRef(null);
    const inputRefrenceWebsite = useRef(null);

    const handleFocusInputUsername = () => {
        inputRefrenceUsername.current.focus();
        console.log("clicked!");
    }
    const handleFocusInputBio = () => {
        inputRefrenceBio.current.focus();
    }
    const handleFocusInputLocation = () => {
        inputRefrenceLocation.current.focus();
    }
    const handleFocusInputWebsite = () => {
        inputRefrenceWebsite.current.focus();
    }
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
                    <img src="https://www.w3schools.com/w3css/img_lights.jpg" alt="" />
                    <div className='icon-camera-container'>
                        <div className='camera-icon'>
                            <BsCamera id="camera"/>
                        </div>
                    </div>
                </div>
                <div className='input-username-box'>
                    <div
                        ref={inputRefrenceUsername}
                        onClick={handleFocusInputUsername}
                        tabIndex={-1}
                        className='input-username-container'
                    >
                        <label for='username'>name</label>
                        <input id='username'/>
                    </div>
                </div>
                <div className='input-bio-box'>
                    <div
                        ref={inputRefrenceBio}
                        onClick={handleFocusInputBio}
                        tabIndex={-1}
                        className='input-bio-container'
                    >
                        <label for='bio'>bio</label>
                        <input id='bio'/>
                    </div>
                </div>
                <div className='input-location-box'>
                    <div
                        className='input-location-container'
                        ref={inputRefrenceLocation}
                        onClick={handleFocusInputLocation}
                        tabIndex={-1}
                    >
                        <label for='location'>location</label>
                        <input id='location'/>
                    </div>
                </div>
                <div className='input-website-box'>
                    <div
                        className='input-website-container'
                        ref={inputRefrenceWebsite}
                        onClick={handleFocusInputWebsite}
                        tabIndex={-1}
                    >
                        <label for='website'>website</label>
                        <input id='website'/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default EditProfileModal;