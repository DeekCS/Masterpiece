import react, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === "email") {
            setEmail(value);
        } else if (name === "password") {
            setPassword(value);
        }
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await axios.post(
                "http://127.0.0.1:8000/api/login",
                {
                    email,
                    password,
                }
            );
            if (response.data.message === "Email is not registered") {
                setError(response.data.error);
                await Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Email is not registered",
                });
            } else if (response.data.message === "Password is incorrect") {
                setError(response.data.error);
                await Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Password is incorrect",
                });
            } else if (response.data.error) {
                setError(response.data.error);
                await Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Something went wrong",
                });
            } else {
                localStorage.setItem(
                    "token",
                    JSON.stringify(response.data.token)
                );
                localStorage.setItem(
                    "user",
                    JSON.stringify(response.data.user)
                );
                const loggedUser = JSON.parse(localStorage.getItem("user"));
                if (loggedUser.is_admin === 1) {
                    navigate("/admin");
                } else {
                    console.log("he is an user");
                    //navigate him to home page
                }
            }
        } catch (error) {
            console.log(error);
        }
        setLoading(false);
    };

    return (
        <div className="page-content--bge5">
            <div className="container">
                <div className="login-wrap">
                    <div className="login-content">
                        <div className="login-logo">
                            <a href="#">
                                <img
                                    src="./assets/images/icon/logo.png"
                                    alt="CoolAdmin"
                                />
                            </a>
                        </div>
                        <div className="login-form">
                            <form action="" onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label>Email Address</label>
                                    <input
                                        className="au-input au-input--full"
                                        type="email"
                                        name="email"
                                        value={email}
                                        onChange={handleChange}
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
                                        onChange={handleChange}
                                        placeholder="Password"
                                    />
                                </div>

                                <button
                                    className="au-btn au-btn--block au-btn--green m-b-20"
                                    type="submit"
                                >
                                    sign in
                                </button>
                            </form>
                            <div className="register-link">
                                <p>
                                    Don't you have account?
                                    <Link to="/register">Sign Up Here</Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
