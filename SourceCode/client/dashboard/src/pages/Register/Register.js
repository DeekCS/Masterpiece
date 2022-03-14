import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
const Register = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        password2: "",
    });
    const { first_name, last_name, email, password, password2 } = user;

    const onChange = (e) =>
        setUser({ ...user, [e.target.name]: e.target.value });
    const onSubmit = async (e) => {
        e.preventDefault();
        const response = await axios.get(
            `http://127.0.0.1:8000/api/users/check/${email}`
        );

        console.log(response.data.message);
        if (response.data.message === "Email already registered") {
            await Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Email already registered",
            });
        } else if (password !== password2) {
            await Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Password does not match",
            });
        } else {
            const res = await axios.post(
                "http://127.0.0.1:8000/api/users/",
                user
            );
            // const {first_name,last_name,email,password,password2} = user;
            //handle for login after register
            // localStorage.setItem('token',res.data.token);
            localStorage.setItem("user", JSON.stringify(res.data.user));
            try {
                await Swal.fire({
                    icon: "success",
                    title: "Success",
                    text: res.data.message,
                });

                navigate("/login");
            } catch (e) {
                console.log(e);
            }
        }
    };
    return (
        <div className="login-wrap">
            <div className="login-content">
                <div className="login-logo">
                    <Link to="/">
                        <img
                            src="../dashboard/public/assets/images/icon/logo.png"
                            alt="CoolAdmin"
                        />
                    </Link>
                </div>
                <div className="login-form">
                    <form action="" method="post" onSubmit={onSubmit}>
                        <div className="form-group">
                            <label>First Name</label>
                            <input
                                className="au-input au-input--full"
                                type="text"
                                name="first_name"
                                value={first_name}
                                onChange={(e) => onChange(e)}
                                placeholder="First Name"
                            />
                        </div>
                        <div className="form-group">
                            <label>Last Name</label>
                            <input
                                className="au-input au-input--full"
                                type="text"
                                name="last_name"
                                value={last_name}
                                onChange={(e) => onChange(e)}
                                placeholder="Last Name"
                            />
                        </div>
                        <div className="form-group">
                            <label>Email Address</label>
                            <input
                                className="au-input au-input--full"
                                type="email"
                                name="email"
                                value={email}
                                onChange={(e) => onChange(e)}
                                placeholder="Email"
                            />
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input
                                className="au-input au-input--full"
                                type="password"
                                name="password"
                                value={password}
                                onChange={(e) => onChange(e)}
                                placeholder="Password"
                            />
                        </div>
                        <div className="form-group">
                            <label>Confirm Password</label>
                            <input
                                className="au-input au-input--full"
                                type="password"
                                name="password2"
                                value={password2}
                                onChange={(e) => onChange(e)}
                                placeholder="Confirm Password"
                            />
                        </div>
                        <button
                            className="au-btn au-btn--block au-btn--green m-b-20"
                            type="submit"
                        >
                            register
                        </button>
                    </form>
                    <div className="register-link">
                        <p>
                            Already have account?
                            <Link to="/login">Sign In</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
