import React from 'react';
import { NavLink } from 'react-router-dom';
import header from '../header/Header.module.css';


const Header = (props) => {
    return (
        <header className= {header.header}>
            
            <img src="https://64.media.tumblr.com/8bbfeb627097e7267245af3da4ba2be7/83ccf85920b34b1d-39/s500x750/c0a776b3b1f43a87278c6d1573e84601cf3bc990.png" alt="" />
        
            <div className={header.loginBlock}>
                {props.isAuth? props.login  :<NavLink to = '/login'>Login</NavLink>}
            </div>
        
        </header>

    );
}

export default Header;