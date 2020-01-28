import React from 'react';
import {NavLink} from "react-router-dom";

function NavBar(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav justify-content-center">
                    <li className="nav-item">
                        <NavLink className="nav-link text-light p-3" to='/'>Search</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link text-light p-3" to='/favourites'>Favourites</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default NavBar;
