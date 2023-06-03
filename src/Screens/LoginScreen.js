import React from 'react'
import "./LoginScreen.css";
import { useState } from 'react';
import SignUpScreen from './SignUpScreen';


function LoginScreen() {

const [SignIn, setSignIn]=useState(false);

    return (
        <div className='loginScreen'>
            
   <div className='loginScreen_background'>
            <img className='loginScreen_logo'
                src='https://www.freepnglogos.com/uploads/netflix-logo-text-emblem-31.png' alt='' />

            <button onClick={()=> setSignIn(true)} className='loginScreen_button'>SignIn</button>
            <div className='loginScreen_gradient' />
            </div>
            <div className='loginScreen_body'>

                {SignIn ? (
                 <SignUpScreen/>
                ):(

<>
                <h1>Unlimited films, TV Programs and 
                    more.</h1>
                    <h2>Watch anywhere, Cancel at any time.</h2>
                    <h3>Ready to watch? Enter your Email to create or restart your membership.</h3>

                    <div className='loginScreen_input'>
                        <form>
                            <input type='email' placeholder='Email Address'/>
                            <button onClick={()=> setSignIn(true)}  className='loginScreen_getStarted'>GET STARTED</button>
                        </form>
                    </div>
                </>

                )}
                
            </div>
        </div>
    )
}

export default LoginScreen