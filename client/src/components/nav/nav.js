import React from 'react'
import logo from '../../assets/SSB_logo.png'
import './nav.css'
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert'; 
import ListItemIcon from '@material-ui/core/ListItemIcon';
import { GiHomeGarage, GiF1Car } from "react-icons/gi";
import { IoMdHome, IoIosLogOut } from "react-icons/io";
import { Link } from 'react-router-dom'

const ITEM_HEIGHT = 48;

const Nav = _ => {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    function handleClick(event) {
        setAnchorEl(event.currentTarget);
    }

    function handleClose() {
        setAnchorEl(null);
    }

    return (
        <nav className="navbar">
            <IconButton
                aria-label="More"
                aria-controls="long-menu"
                aria-haspopup="true"
                onClick={handleClick}
            >
            <MoreVertIcon />
            </IconButton>
            <Menu
                id="long-menu"
                anchorEl={anchorEl}
                keepMounted
                open={open}
                onClose={handleClose}
                PaperProps={{
                style: {
                    maxHeight: ITEM_HEIGHT * 4.5,
                    width: 250,
                    marginTop: 53.5
                },
                }}
            >
                <MenuItem>
                    <ListItemIcon>
                        <IoMdHome className="navicon"/>
                    </ListItemIcon>
                    <Link to="/" onClick={handleClose}>Home</Link>
                </MenuItem>
                <MenuItem>
                    <ListItemIcon>
                        <GiF1Car className="navicon2"/>
                    </ListItemIcon>
                    <Link to="/Challenge" onClick={handleClose}>Challenge</Link>
                </MenuItem>
                <MenuItem>
                    <ListItemIcon>
                        <GiHomeGarage className="navicon"/>
                    </ListItemIcon>
                    <Link to="/Garage" onClick={handleClose}>Garage</Link>
                </MenuItem>
                <MenuItem onClick={_ => console.log('log out of app')}>
                    <ListItemIcon>
                        <IoIosLogOut className="navicon"/>
                    </ListItemIcon>
                    Log Out
                </MenuItem>
            </Menu>
            <img className="logo" src={logo} alt="Super Street Battle"/>
        </nav>
    )
}

export default Nav