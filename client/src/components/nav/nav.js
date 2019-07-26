import React from 'react'
import logo from '../../assets/SSB_logo.png'
import './nav.css'
import { GiExitDoor } from "react-icons/gi";

const Nav = props => {
    return (
        <nav className="navbar">
            <img className="logo" src={logo} alt="Super Street Battle"/>
            <button onClick={_ => {
                    props.FirebaseAuth.signOut()
                    localStorage.removeItem('_id')
                    localStorage.removeItem('uid')
                }} 
                className="signoutbtn"><GiExitDoor />
            </button>
        </nav>
    )
}

export default Nav