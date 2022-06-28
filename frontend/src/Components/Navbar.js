import React from "react";
import { Link, useNavigate } from "react-router-dom";
var values = require('../values')

function Navbar() {

    const user = localStorage.getItem('username');
    const registrar = localStorage.getItem('registrar');

    var content = null;

    const navigate = useNavigate();

    const logout = () => {
        localStorage.setItem('username', 'loggedOut');
        navigate('/').then(() => window.location.reload());
    }

    if (user === 'loggedIn') {
        content = 
            <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                    <Link
                        to="/create"
                        className="text-blue-500 py-3 block"
                    >
                        Create Cases
                    </Link>
                    <Link
                        to='/caseList'
                        className="text-blue-500 py-3 block"
                    >
                        Cases
                    </Link>
                    <Link
                        onClick={logout}
                        className="text-blue-500 py-3 block"
                    >
                        Logout
                    </Link>
                </div>
            </div>
    }
    else {
        content = 
            <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                    <Link
                        to="/RegisterUser"
                        className="text-blue-500 py-3 block"
                    >
                        Register
                    </Link>
                    <Link
                        to="/"
                        className="text-blue-500 py-3 block">
                        Login
                    </Link>
                </div>
            </div>
    }

    return (
        <nav className="bg-gray-800 text-white">
            <div className="flex flex-row items-center justify-around">
                <Link to='/' className="navbar-brand">Judiciary Information System</Link>
                <div className="flex items-center justify-between h-16">
                    {content}
                </div>
            </div>
        </nav>
    )
}

export default Navbar;