import React from 'react';
import { NavLink } from 'react-router-dom';
import navbar from '../navbar/Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={navbar.nav}>
            <div className={navbar.item}><NavLink to='/profile' className = { navData => navData.isActive ? navbar.active : navbar.item }>Profile</NavLink></div>
            <div className={navbar.item}><NavLink to='/dialogs' className = { navData => navData.isActive ? navbar.active : navbar.item }>Messages</NavLink></div>
            <div className={navbar.item}><NavLink to='/users' className = { navData => navData.isActive ? navbar.active : navbar.item }>Users</NavLink></div>
            <div className={navbar.item}><NavLink to='/news' className = { navData => navData.isActive ? navbar.active : navbar.item }>News</NavLink></div>
            <div className={navbar.item}><NavLink to='/music' className = { navData => navData.isActive ? navbar.active : navbar.item }>Music</NavLink></div>
            <div className={navbar.item}><NavLink to='/settings' className = { navData => navData.isActive ? navbar.active : navbar.item }>Settings</NavLink></div>
            
        </nav>
    );
}
export default Navbar;