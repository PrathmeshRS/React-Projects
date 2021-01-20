import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import SearchIcon from '@material-ui/icons/Search';
import React from 'react';
import "./Header.css";
import logo from "./logo.png";
import { IconButton } from '@material-ui/core';

function Header() {
    return (
        <div className="header">
            <img src={logo} alt="logo" height="50px" className="logo" />
            <div className="header__search">
                <input className="header__searchInput" type="text" placeholder="Search for the product you wish.." />
                <SearchIcon className="header__searchIcon" fontSize="large" />
            </div>
            <div className="header__nav">
                <div className="header__option">
                    <span className="header__optionLineOne">
                        Hello Guest
                    </span>
                    <span className="header__optionLineTwo">
                        Sign In
                    </span>

                </div>
                <div className="header__option">
                    <span className="header__optionLineOne">
                        Returns
                    </span>
                    <span className="header__optionLineTwo">
                        Orders
                    </span>

                </div>
                <div className="header__option">
                    <span className="header__optionLineOne">
                        Your
                    </span>
                    <span className="header__optionLineTwo">
                        Subscription
                    </span>
                </div>
                <div className="header__optionBasket">
                    <IconButton size="small">
                        <ShoppingBasketIcon fontSize="large" />
                    </IconButton>
                    <span className="header__optionLineTwo header__basketCount">0</span>
                </div>
            </div>
        </div>
    )
}

export default Header;
