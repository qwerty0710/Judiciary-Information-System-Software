import React from "react";
import axios from "axios";

function CreateUser() {

    const [UserDetails, setUserDetails] = useState({
        username: '',
        password: '',
        designation: ''
    });

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

        const newUser = {
            username: UserDetails.username,
            password: UserDetails.password,
            designation: UserDetails.designation
        }

        console.log(newUser);

        axios.post('http://localhost:3004/users/add', user)
            .then(res => {
                console.log(res.data);
                alert("User added successfully!");
            })
            .catch(err => {
                console.log("errror: ", err);
            })

        setUserDetails({
            username: '',
            password: '',
            designation: ''
        })
    }

    return (
        <div className="w-100 text-center">
            <h3>Register User</h3>
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
                    />
                </div>
            </form>
        </div>
    )
}

export default CreateUser;