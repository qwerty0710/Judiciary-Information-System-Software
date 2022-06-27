import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { withRouter } from "../withRouter";

function Login() {

    const navigate = useNavigate();

    const [UserDetails, setUserDetails] = useState({
        username: '',
        password: '',
        designation: ''
    });

    const createItem = () => {
        localStorage.setItem('mytime', Date.now());
    }

    const readValue = () => {
        var x = localStorage.getItem('mytime');
        document.getElementById('demo').innerHTML = x;
    }

    const onChangeUsername = (e) => {
        setUserDetails({
            username: e.target.value,
            password: UserDetails.password,
            designation: UserDetails.designation
        })
    }

    const onChangePassword = (e) => {
        setUserDetails({
            username: UserDetails.username,
            password: e.target.value,
            designation: UserDetails.designation
        })
    }

    const onChangeDesignation = (e) => {
        setUserDetails({
            username: UserDetails.username,
            password: UserDetails.password,
            designation: e.target.value
        })
    }

    const onSubmit = (e) => {
        e.preventDefault();

        const user = {
            username: UserDetails.username,
            password: UserDetails.password,
            designation: UserDetails.designation
        }

        console.log(user);

        fetch('http://localhost:3004/users/login', {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => {
                return res.json();
            })
            .then(data => {
                if (data.success) {
                    navigate('/caseList').then(() => window.location.reload());
                    alert("Login Successful");
                    console.log(data);
                }
                else {
                    alert("Invalid Credentials")
                }
            })
        
        setUserDetails({
            username: '',
            password: '',
            designation: ''
        })

        console.log(localStorage.getItem('registrar'));
    }

    return (
        <div className="w-100 text-center">
            <h3>Login</h3>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <div className="w-72">
                        <select
                            label="designation"
                            className="form-control"
                            value={UserDetails.designation}
                            onChange={onChangeDesignation}
                            required
                        >
                            <option>Registrar</option>
                            <option>Judge</option>
                            <option>Lawyer</option>
                        </select>
                    </div>
                </div>
                <div className="form-group">
                    <label>Username: </label>
                    <input
                        type="text"
                        className="form-control"
                        value={UserDetails.username}
                        onChange={onChangeUsername}
                        required
                    />
                </div>
                <div>
                    <label>Password: </label>
                    <input
                        type="password"
                        className="form-control"
                        value={UserDetails.password}
                        onChange={onChangePassword}
                        required
                    />
                </div>
                <div className="form-group">
                    <input
                        type="submit"
                        className="btn btn-primary"
                        value="Login"
                        onSubmit={onSubmit}
                    />
                </div>
            </form>
        </div>
    )
}

export default withRouter(Login);