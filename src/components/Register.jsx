import React,{useState} from "react";
import LogoImage from "./../lohp_en.png";
import logo_register from './../logo_register.svg';
import apple_logo from './../apple_logo.svg';
import google_icon from 'react-icons/fc';
import { AiOutlineClose } from 'react-icons/ai';
import './Register.css';
import { useEffect } from "react";
import { getTokens, login } from "../redux/asyncActions/UserAsync";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { register } from "../redux/asyncActions/UserAsync";

const SignInPopUp = () => {
    const user = useSelector((state) => state.userReducer);
    const { isAuthenticated } = user;
    const userStatus = useSelector((state) => state.userReducer.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleUsername = (e) => {
        setEmail(e.target.value);
    }
    const handlePassword = (e) => {
        setPassword(e.target.value);
    }
    const handleSignIn = (e) => {
        e.preventDefault();
        dispatch(login(email, password));
    }
    useEffect(() => {
        if (isAuthenticated && (userStatus !== null)) {
            navigate("/");
        }
        // console.log("user Id:"+user.id);
    },[navigate, isAuthenticated, userStatus])
    return (
        <>
            <img className="register-logo-twitter" src={logo_register} alt="" />
            <h1>Sign in to twitter</h1>
            <div className="register-botton">
                <img src={apple_logo} alt="" />
                <span>Continue with Google</span>
            </div>
            <div className="register-botton">
                <img src={apple_logo} alt="" />
                <span>continue with Apple</span>
            </div>
            <div className="div-line">
                <div className="line-container">
                    <div className="line"></div>
                </div>
                <div className="text"><span style={{ color: 'white' }}>or</span></div>
                <div className="line-container">
                    <div className="line"></div>
                </div>
            </div>
            <div className="register-input">
                <input
                    type="text"
                    placeholder="Email"
                    value={email}
                    onChange={handleUsername}
                />
            </div>
            <div className="register-input">
                <input
                    type="text"
                    placeholder="Password"
                    value={password}
                    onChange={handlePassword}
                />
            </div>
            <div
                className="register-botton"
                onClick={handleSignIn}
            >
                <span>Sign In</span>
            </div>
            <div id="botton-four" className="register-botton">
                <span>Forgot password?</span>
            </div>
            
        </>
    )
};

const SignUpPopUp = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repassword, setRepassword] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const isAuthenticated = useSelector((state) => state.userReducer.isAuthenticated);
    const user = useSelector((state) => state.userReducer.user);
    const handleUsername = (e) => {
        setUsername(e.target.value);
    }
    const handleEmail = (e) => {
        setEmail(e.target.value);
    }
    const handlePassword = (e) => {
        setPassword(e.target.value);
    }
    const handleRepassword = (e) => {
        setRepassword(e.target.value);
    }
    const handleSignUp = (e) => {
        e.preventDefault();
        dispatch(register(
            username,
            email,
            password,
            repassword));
    }
    useEffect(() => {
        console.log("Aligfdh");
        if (isAuthenticated && (user!==null)) {
            console.log("Register:"+isAuthenticated);
            navigate("/profile");
        }
    },[isAuthenticated, navigate, user]);
    return (
        <>
            <div className="signup-popup-container">

                <div className="signup-input">
                    <input
                        type="text"
                        placeholder="username"
                        value={username}
                        onChange={handleUsername}
                        required
                    />
                    </div>
                    
                <div className="signup-input">
                    <input
                        type="text"
                        placeholder="email"
                        value={email}
                        onChange={handleEmail}
                        required
                    />
                    </div>
                    
                <div className="signup-input">
                    <input
                        type="text"
                        placeholder="password"
                        value={password}
                        onChange={handlePassword}
                        required
                    />
                    </div>
                    
                <div className="signup-input">
                    <input
                        type="text"
                        placeholder="repassword"
                        value={repassword}
                        onChange={handleRepassword}
                        required
                    />
                </div>
                <div
                    className="signup"
                    onClick={handleSignUp}
                >
                    <span>Sin Up</span>
                </div>
            </div>
        </>
    )
}

const Register = () => {

    const [toggle, setToggle] = useState(false);
    const [isActiveSignIn, setActiveSignIn] = useState(true);
    const handleToggle = () => {
        setToggle(!toggle);
    }
    const handleSignIN = () => {
        setActiveSignIn(true);
        handleToggle();
    }
    const handleSignUp = () => {
        setActiveSignIn(false);
        handleToggle(!toggle)
    }
    return (
        <>
        <div className={toggle?"register-lable-container":'inactive'}>
            <div className="register-popup">
                <div className="register-box">
                    <div className="register">
                        <AiOutlineClose
                            id="close-icon"
                            onClick={handleToggle}
                        />
                            { isActiveSignIn?<SignInPopUp/>:<SignUpPopUp/>}
                    </div>
                </div>
            </div>
        </div>
        <div className="register-container">
            <main className="register-content">
                <div className="register-logo">
                    <img id="logo" src={LogoImage} alt=""/>
                    <img id="logo-twitter" src={logo_register} alt=""/>
                </div>
                <div className="register-box">
                    <div className="register">
                        <img className="register-logo-twitter" src={logo_register} alt="" />
                        <h1>Happening now</h1>
                        <h2>Join Twitter today.</h2>
                        <div className="register-botton">
                            <img src={apple_logo} alt=""/>
                            <span>Sign up with Google</span>
                        </div>
                        <div className="register-botton">
                            <img src={apple_logo} alt=""/>
                            <span>Sign up with Apple</span>
                        </div>
                        <div className="div-line">
                            <div className="line-container">
                                <div className="line"></div>
                            </div>
                            <div className="text"><span style={{color:'white'}}>or</span></div>
                            <div className="line-container">
                                <div className="line"></div>
                            </div>
                        </div>
                            <div
                                id="botton-three"
                                className="register-botton"
                                onClick={handleSignUp}
                            >
                            <span>Sign up with phone or email</span>
                        </div>
                        <p>By signing up, you agree to the Terms of Service <br/> and Privacy Policy,including Cookie Use.</p>
                        <h2>Already have an account?</h2>
                        <div
                            id="botton-four"
                            className="register-botton"
                            onClick={handleSignIN}
                            >
                            <span>Sign in</span>
                        </div>
                    </div>
                </div>
            </main>
        </div>
        </>
    )
}

export default Register;