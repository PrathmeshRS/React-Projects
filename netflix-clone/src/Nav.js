import React, { useEffect, useState } from 'react';
import "./Nav.css";
import logo from "./logo.png";
import avatar from "./avatar.jpg"

function Nav() {

    const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                handleShow(true);
            } else {
                handleShow(false);
            }
        });
        return () => {
            window.removeEventListener("scroll");
        };
    }, [])

    return (
        <div className={`nav ${show && "nav__black"}`}>
            <img
                src={logo}
                className="nav__logo"
                alt="Netflix logo"
            />
            <img
                src={avatar}
                className="nav__avatar"
                alt="Netflix logo"
            />
        </div>
    )
}

export default Nav;
