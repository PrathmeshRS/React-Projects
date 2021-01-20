import React from "react";
import "./Header.css";
import MenuIcon from '@material-ui/icons/Menu';
import { Avatar, IconButton } from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import SettingsIcon from '@material-ui/icons/Settings';
import AppsIcon from '@material-ui/icons/Apps';
import gmail from "./gmail.png";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "./features/userSlice";
import { auth } from "./firebase";

function Header() {
    const dispatch = useDispatch();

    const user = useSelector(selectUser);

    const singout = () => {
        auth.signOut().then(() => {
            dispatch(logout());
        });
    };

    return (
        <div className="header">
            <div className="header__left">
                <IconButton>
                    <MenuIcon />
                </IconButton>
                <img src={gmail} alt="logo" />
            </div>
            <div className="header__middle">
                <IconButton size="small"><SearchIcon /></IconButton>
                <input placeholder="Search mail" type="text" />
                <IconButton size="small"><ArrowDropDownIcon /></IconButton>
            </div>
            <div className="header__right">
                <IconButton size="small"><HelpOutlineIcon /></IconButton>
                <IconButton size="small"><SettingsIcon /></IconButton>
                <IconButton size="small"><AppsIcon /></IconButton>
                <Avatar variant="circle" onClick={singout} className="avatar" src={user?.photoUrl} />
            </div>
        </div>
    );
}

export default Header;