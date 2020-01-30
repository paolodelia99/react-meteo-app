import React from 'react';
import {NavLink, Link} from "react-router-dom";

function NavBar(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
            <div className="d-flex w-50 order-0">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <Link className="navbar-brand ml-3" to="/">
                    <h5 className="py-4 text-white">
                        React Weather App
                    </h5>
                </Link>
            </div>
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
