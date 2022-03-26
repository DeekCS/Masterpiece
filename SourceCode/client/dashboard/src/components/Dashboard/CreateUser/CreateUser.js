import React, {useEffect, useState} from "react";
import axios from "axios";
import Swal from "sweetalert2";
import {useNavigate} from "react-router-dom";
import HeaderMob from "../HeaderMob/HeaderMob";
import Header from "../Header/Header";

const CreateUser = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const handleChange = (e) => {
        setUser({
            ...user, [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            setLoading(true);
            setError(false);
            await axios
                .post("http://127.0.0.1:8000/api/users/", user)
                .then((res) => {
                    setLoading(false);
                    Swal.fire({
                        title: "Success",
                        text: "User created successfully",
                        icon: "success",
                        showCancelButton: false,
                        confirmButtonColor: "#3085d6",
                        confirmButtonText: "OK",
                    }).then((result) => {
                        if (result.value) {
                            navigate("/users");
                        }
                    });
                })
                .catch((err) => {
                    console.log(err + "error ddddd");
                    setLoading(false);
                    setError(true);
                    Swal.fire({
                        title: "Error",
                        text: err.response.data.message,
                        icon: "error",
                        showCancelButton: false,
                        confirmButtonColor: "#3085d6",
                        confirmButtonText: "OK",
                    });
                    console.log(err + "error");
                });
        } catch (err) {
            setLoading(false);
            setError(true);
            console.log(err.response.data + "error22");
            await Swal.fire({
                title: "Error",
                text: err.response.data,
                icon: "error",
                showCancelButton: false,
                confirmButtonColor: "#3085d6",
                confirmButtonText: "OK",
            });
        }
    };
    return (<>
        <div className="">
            <div className="page-wrapper">
                <HeaderMob/>

                <div className="page-container">
                    <Header/>
                    <div className="main-content">
                        <div className="section__content section__content--p30">
                            <div className="container-fluid">
                                <form
                                    action=""
                                    method=""
                                    encType="multipart/form-data"
                                    onSubmit={handleSubmit}
                                >
                                    <div className="card-body">
                                        <div className="form-group">
                                            <label htmlFor="first_name">
                                                First Name
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="first_name"
                                                id="first_name"
                                                placeholder="Enter First name"
                                                onChange={handleChange}
                                                value={user.first_name}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="last_name">
                                                Last Name
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="last_name"
                                                id="last_name"
                                                placeholder="Enter Last name"
                                                onChange={handleChange}
                                                value={user.last_name}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="email">
                                                Email
                                            </label>
                                            <input
                                                type="email"
                                                className="form-control"
                                                id="email"
                                                name="email"
                                                value={user.email}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="password">
                                                Password
                                            </label>
                                            <input
                                                type="password"
                                                className="form-control"
                                                id="password"
                                                name="password"
                                                value={user.password}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="social">
                                                Social
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="social"
                                                name="social"
                                                value={user.social}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="address">
                                                Address
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="address"
                                                name="address"
                                                value={user.address}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>
                                    <div className="card-footer">
                                        <button
                                            type="submit"
                                            className="btn btn-primary"
                                        >
                                            Submit
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>);
};
export default CreateUser;
