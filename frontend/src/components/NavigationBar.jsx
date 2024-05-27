// src/Navbar.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import './navbar.css'

const Navbar = () => {
    return (
        <>
        <nav className="navbar navbar-expand-sm ">
            <a className="navbar-brand" href="#">Todo Manager</a>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavs" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>


            <div className="collapse navbar-collapse " id="navbarNavs">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/login">Login </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/signup">Signup</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/home">Home</Link>
                    </li>
                    
                </ul>
            </div>
        </nav>


        </>
    );
};

export default Navbar;
