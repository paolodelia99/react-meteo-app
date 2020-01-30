import React from 'react';
import {NavLink} from "react-router-dom";

function NavBar(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="navbar-collapse collapse justify-content-center order-2" id="navbarNav">
                <ul className="navbar-nav justify-content-center pull-sm-left">
                    <li className="nav-item">
                        <NavLink className="nav-link text-light p-3" to='/'><b>Search</b></NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link text-light p-3" to='/favourites'><b>Favourites</b></NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default NavBar;
