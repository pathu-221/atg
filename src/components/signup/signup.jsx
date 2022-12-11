import React from 'react';
import { useState } from 'react';
import CustomInput from '../customInput/custominput';
import Backdrop from '../backdrop/backdrop';
import facebookIcon from '../../assets/icons/facebookicon.png';
import GoogleIcon from '../../assets/icons/google.png';
import illustration from '../../assets/logo/signup-page.png';
import SignIn from '../signin/signin';

import './signup.styles.scss';

function Signup({ handleClose }) {

    const [signUp, setsignUp] = useState(true);
    const handleClick = () => {
        setsignUp(!signUp);
    }
  return (

    <Backdrop>
        {
           signUp ? (
            <div className="sign-up-wrapper">
            <span onClick={handleClose} ><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 0.333313C5.54838 0.333313 0.333374 5.54831 0.333374 12C0.333374 18.4516 5.54838 23.6666 12 23.6666C18.4517 23.6666 23.6667 18.4516 23.6667 12C23.6667 5.54831 18.4517 0.333313 12 0.333313ZM17.8334 16.1883L16.1884 17.8333L12 13.645L7.81171 17.8333L6.16671 16.1883L10.355 12L6.16671 7.81164L7.81171 6.16665L12 10.355L16.1884 6.16665L17.8334 7.81164L13.645 12L17.8334 16.1883Z" fill="white"/>
            </svg>
            </span>
            <div className="sign-up-container">
                <div className="green-head">
                    <p>Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼</p>
                </div>
                <div className="form">
                    
                <div className="form-container">
                    <h3>Create Account</h3>
                    <span className='first-name-last-name'>
                        <CustomInput name={'first-name'} placeholder={'First Name'}/>
                        <CustomInput name={'last-name'} placeholder={'Last Name'}/>
                    </span>
                    <CustomInput name={'email'} placeholder={'Email'}/>
                    <CustomInput name={'password'} placeholder={'Password'}/>
                    <CustomInput name={'confirm-password'} placeholder={'Confirm Password'}/>

                    <button>Create Account</button>
                    <button className='white-button'><span> <img src={facebookIcon} alt="" /> Sign Up with facebook </span></button>
                    <button className='white-button'><span> <img src={GoogleIcon} alt="" /> Sign Up with Google </span></button>
                </div>

                <div className="image-container">
                    <span className='heading' onClick={handleClick}> <h5>Already have an account? <span className="blue-text">Sign In</span></h5></span>
                    <img src={ illustration } alt='illustration'/>
                    <p>By signing up, you agree to our Terms & conditions, Privacy policy</p>
                </div>
                </div>
            </div>
        </div>
           )
           :
           <SignIn setSignup={ handleClick} handleClose={handleClose} />
        }
    </Backdrop>
  )
}

export default Signup