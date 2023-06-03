import React, { useEffect, useState } from 'react'
import "./Nav.css";
import { useNavigate } from 'react-router-dom';

function Nav() {

    const [show, handleShow] = useState(false);
    const history = useNavigate();

    const transitionNavBar = () => {
        if (window.scrollY > 100) {
            handleShow(true);
        }else{
            handleShow(false);
        }
    }
    useEffect(()=>{
        window.addEventListener("scroll",transitionNavBar);
        return ()=> window.removeEventListener('scroll',transitionNavBar);
        },[]);
    return (
        <div className={`nav ${show && 'nav_black'}`}>
            <div className='nav_content'>
                <img
                    className='nav_logo'
                    src='https://www.freepnglogos.com/uploads/netflix-logo-text-emblem-31.png'>
                </img>

                <img onClick={()=>{history("./Profile")}}
                    className='nav_avatar'
                    src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'>
                </img>
            </div>
        </div>
    )
}

export default Nav