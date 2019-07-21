import React from 'react'
import { Link } from 'react-router-dom'
import "./nav2.css"

const Nav2 = _ => {
    return (
        <div className="nav2">
            <Link to="/" className="link">Top10</Link>
            <Link to="/Garage" className="link">Garage</Link>
            <Link to="/Junkyard" className="link">Junkyard</Link>
            <Link to="/Race" className="link">Race</Link>
        </div>
    )
}

export default Nav2