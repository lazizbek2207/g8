import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Home from '../pages/Home'
import Properties from '../pages/Properties'
import Contacts from '../pages/Contacts'
import logo from "../assets/img/logo.png"
import login from "../assets/img/login.png"

export default function Navbar() {
    return (
        <>
            <div className="navbar">
                <div className="container">
                    <div className="navbar-content">
                        <a href="/">
                            <img src={logo} alt="" />
                        </a>
                        <ul className='navbar-menu'>
                            <li> <NavLink className="navbar-item" to={"/home"} >Home</NavLink> </li>
                            <li> <NavLink className="navbar-item" to={"/properties"} >Properties</NavLink> </li>
                            <li> <NavLink className="navbar-item" to={"/contacts"} >Contacts</NavLink> </li>
                        </ul>
                        <a href="">
                            <img src={login} alt="" />
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}
