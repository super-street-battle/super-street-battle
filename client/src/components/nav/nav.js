import React from 'react'
import logo from '../../assets/SSB_logo.png'
import './nav.css'
import { GiExitDoor } from "react-icons/gi";
import { IconContext } from "react-icons";


const Nav = props => {
    return (
        <nav className="navbar">
            <img className="logo" src={logo} alt="Super Street Battle"/>
            <IconContext.Provider value={{ color: "black", size: "1.5em", className: "global-class-name" }}>
            <button onClick={_ => {
                    props.FirebaseAuth.signOut()
                    localStorage.removeItem('_id')
                    localStorage.removeItem('uid')
                }} 
                className="signoutbtn"><GiExitDoor id="signoutbtn2"/>
            </button>
            </IconContext.Provider>
        </nav>
    )
}

export default Nav