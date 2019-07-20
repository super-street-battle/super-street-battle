import React from 'react'
import { Link } from 'react-router-dom'
import "./nav2.css"

const Nav2 = _ => {
    return (
        <div className="nav2">
            <Link to="/">Top10</Link>
            <Link to="/Garage">Garage</Link>
            <Link to="/Junkyard">Junkyard</Link>
            <Link to="/Race">Race</Link>
        </div>
    )
}

export default Nav2