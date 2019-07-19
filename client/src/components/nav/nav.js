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
                <Link to="/" onClick={handleClose}>
                    <MenuItem>
                        <ListItemIcon>
                            <IoMdHome className="navicon"/>
                        </ListItemIcon>
                            Home
                    </MenuItem>
                </Link>
                <Link to="/Challenge" onClick={handleClose}>
                    <MenuItem>
                        <ListItemIcon>
                            <GiF1Car className="navicon2"/>
                        </ListItemIcon>
                            Challenge
                    </MenuItem>
                </Link>
                <Link to="/Garage" onClick={handleClose}>
                    <MenuItem>
                        <ListItemIcon>
                            <GiHomeGarage className="navicon"/>
                        </ListItemIcon>
                            Garage
                    </MenuItem>
                </Link>
                <MenuItem onClick={_ => {
                    localStorage.removeItem('userId')
                    window.location.reload()
                    // change player online status to false
                }}>
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