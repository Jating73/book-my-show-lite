import React from 'react'
import './Header.css'

const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                <img src={`${process.env.PUBLIC_URL}/header-logo.png`} alt="BookMyShow Logo" />
            </div>
            <div className="search-bar">
                <input
                    type="text"
                    placeholder="Search for Movies"
                />
            </div>
            <button className="sign-in-btn">Sign in</button>
        </header>
    )
}

export default Header
