import React, {useRef,useState} from 'react';
import './EditProfileModal.css';
import { IoMdClose } from 'react-icons/io';
import { BsCamera } from 'react-icons/bs';
import ReactDom from 'react-dom';
import { useDispatch } from 'react-redux';
import { userEdit } from '../../../../redux/asyncActions/UserAsync';

const EditProfileModal = ({ onClose, toggle,user }) => {
    
    const dispatch = useDispatch();
    const [username, setUsername] = useState('');
    const [userBio, setUserBio] = useState('');
    const [userLocation, setUserLocation] = useState('');
    const [userWebsite, setUserWebsite] = useState('');
    const [isFocusUsername, setFocusUsername] = useState(false);
    const [isFocusBio, setFocusBio] = useState(false);
    const [isFocusLocation, setFocusLocation] = useState(false);
    const [isFocusWebsite, setFocusWebsite] = useState(false);
    const [cover, setCover] = useState();
    const [avatar, setAvatar] = useState();

    const handleCover = (e) => {
        setCover(e.target.file[0]);
        
    }
    const handleAvatar = (e) => {
        setAvatar(e.target.file[0]);
    }
    const handleUsername = (e) => {
        setUsername(e.target.value);
    }
    const handleUserBio = (e) => {
        setUserBio(e.target.value);
    }
    const handleUserLocation = (e) => {
        setUserLocation(e.target.value);
    }
    const handleUserWebsite = (e) => {
        setUserWebsite(e.target.value);
    }

    const handleFocusInputUsername = () => {
        setFocusUsername(!isFocusUsername);
    }
    const handleFocusInputBio = () => {
        setFocusBio(!isFocusBio);
    }
    const handleFocusInputLocation = () => {
        setFocusLocation(!isFocusLocation);
    }
    const handleFocusInputWebsite = () => {
        setFocusWebsite(!isFocusWebsite);
    }
    const handleSaveBtn = () => {
        const dataProfile = new FormData();
        cover && dataProfile.append("cover_image", cover);
        avatar && dataProfile.append("avatar", avatar);
        dataProfile.append("bio", userBio);
        dataProfile.append("nickname", username);
        dataProfile.append("location",userLocation);
        dispatch(userEdit(user.username,dataProfile));
    }
    return ReactDom.createPortal(
        <div className={toggle?"profile-modal-container":"inactive"}>
            <div className='profile-modal-box'>
                <div className='header-profile-modal'> 
                    <div className='header-title'>
                        <div onClick={onClose} id="md-close-icon">
                            <IoMdClose style={{width:'2em',height:'2em'}}/>
                        </div>
                        <span>
                            Edit Profile
                        </span>
                    </div>
                    <button
                        id="buttom-save"
                        onClick={handleSaveBtn}
                    >
                        Save
                    </button>
                </div>
                <div className='image-cover-box'>
                    <div className='image-container'>
                        <img src="https://www.w3schools.com/w3css/img_lights.jpg" alt=""/>
                    </div>
                    <div className='icon-container'>
                        <div className='camera-icon'>
                            <label htmlFor="file-input-camera">
                                <BsCamera id="camera" />
                            </label>
                            <input id="file-input-camera" type="file" onChange={handleCover}/>
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
                            <label htmlFor="file-input-camera">
                                <BsCamera id="camera" />
                            </label>
                            <input id="file-input-camera" type="file" onChange={handleAvatar}/>
                        </div>
                    </div>
                </div>
                <div className='input-username-box'>
                    <div
                        tabIndex={1}
                        onFocus={handleFocusInputUsername}
                        onBlur={handleFocusInputUsername}
                        // onClick={handleFocusInputUsername}
                        // tabIndex={1}
                        className={"input-username-container"+(isFocusUsername?" focus":"")}
                    >
                        <label htmlFor='username'>name</label>
                        <textarea
                            // ref={inputRefrenceUsername}
                            id='username'
                            type="text"
                            value={username}
                            onChange={handleUsername}
                        />
                    </div>
                </div>
                <div className='input-bio-box'>
                    <div
                        tabIndex={2}
                        onFocus={handleFocusInputBio}
                        onBlur={handleFocusInputBio}
                        className={'input-bio-container'+(isFocusBio?" focus":"")}
                    >
                        <label htmlFor='bio'>bio</label>
                        <textarea
                            id='bio'
                            type="text"
                            value={userBio}
                            onChange={handleUserBio}
                        />
                    </div>
                </div>
                <div className='input-location-box'>
                    <div
                        tabIndex={3}
                        className={'input-location-container'+(isFocusLocation?" focus":"")}
                        onFocus={handleFocusInputLocation}
                        onBlur={handleFocusInputLocation}
                    >
                        <label htmlFor='location'>location</label>
                        <textarea
                            id='location'
                            type="text"
                            value={userLocation}
                            onChange={handleUserLocation}
                        />
                    </div>
                </div>
                <div className='input-website-box'>
                    <div
                        tabIndex={4}
                        className={'input-website-container'+(isFocusWebsite?" focus":"")}
                        onFocus={handleFocusInputWebsite}
                        onBlur={handleFocusInputWebsite}
                    >
                        <label htmlFor='website'>website</label>
                        <textarea
                            id='website'
                            type="text"
                            value={userWebsite}
                            onChange={handleUserWebsite}
                        />
                    </div>
                </div>
            </div>
        </div>
        ,
        document.getElementById('modal')
    )
}
export default EditProfileModal;