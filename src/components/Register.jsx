import React,{useState} from "react";
import LogoImage from "./../lohp_en.png";
import logo_register from './../logo_register.svg';
import apple_logo from './../apple_logo.svg';
import google_icon from 'react-icons/fc';
import { AiOutlineClose } from 'react-icons/ai';
import './Register.css';


const SignInPopUp = () => {
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
                    placeholder="Phone,email,username"
                />
            </div>
            <div className="register-botton">
                <span>Next</span>
            </div>
            <div id="botton-four" className="register-botton">
                <span>Forgot password?</span>
            </div>
        </>
    )
};

const SignUpPopUp = () => {
    return (
        <>
            <div className="signup-popup-container">

                <div className="signup-input">
                    <input
                        type="text"
                        placeholder="username"
                        required
                    />
                    </div>
                    
                <div className="signup-input">
                    <input
                        type="text"
                        placeholder="email"
                        required
                    />
                    </div>
                    
                <div className="signup-input">
                    <input
                        type="text"
                        placeholder="password"
                        required
                    />
                    </div>
                    
                <div className="signup-input">
                    <input
                        type="text"
                        placeholder="repassword"
                        required
                    />
                </div>
                <div className="signup">
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