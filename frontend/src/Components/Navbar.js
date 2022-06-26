import React from "react";
import { Link, useNavigate } from "react-router-dom";
var values = require('../values')

function Navbar() {

    const user = localStorage.getItem('username');
    const registrar = localStorage.getItem('registrar');

    const content = null;

    const navigate = useNavigate();

    const logout = () => {
        localStorage.setItem('username', 'loggedOut');
        navigate('/').then(() => window.location.reload());
    }

    if (user === 'loggedIn') {
        content = 
            <ul className="navbar-nav">
                <li>
                    <Link to="/create" className="nav-link">
                        Create Cases
                    </Link>
                </li>
                <li className="navbar-item">
                    <Link to='/create' className="nav-link">
                        Cases
                    </Link>
                </li>
                <li className="navbar-item">
                    <Link onClick={logout} className="nav-link">
                        Logout
                    </Link>
                </li>
            </ul>
    }
    else {
        content = 
            <ul>
                <li className="navbar-item">
                    <Link to="/RegisterUser" className="nav-link">
                        Register
                    </Link>
                </li>
                <li className="navbar-item">
                    <Link to="/" className="nav-link">
                        Login
                    </Link>
                </li>
            </ul>
    }

    return (
        <nav className="navbar">
            <Link className="navbar-brand">Judiciary Information System</Link>
            <div className="collapse">
                {content}
            </div>
        </nav>
    )
}