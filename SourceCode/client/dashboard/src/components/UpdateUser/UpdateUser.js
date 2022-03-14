import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";
import HeaderMob from "../HeaderMob/HeaderMob";
import Header from "../Header/Header";

const UpdateUser = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [user, setUser] = useState({
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        social: "",
        address: "",
        is_admin: "",
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };

    useEffect(() => {
        const getUser = async () => {
            try {
                setLoading(true);
                const result = await axios.get(
                    `http://127.0.0.1:8000/api/user/${id}`
                );
                console.log(result.data.user + "data");
                setUser(result.data.user);
                setLoading(false);
            } catch (error) {
                setLoading(false);
                setError(true);
            }
        };
        getUser();
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            setLoading(true);
            setError(false);
            await axios
                .put(`http://127.0.0.1:8000/api/users/${id}`, user)
                .then((res) => {
                    setLoading(false);
                    Swal.fire({
                        title: "Success",
                        text: "User updated successfully",
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
    return (
        <>
            <div className="">
                <div className="page-wrapper">
                    <HeaderMob />

                    <div className="page-container">
                        <Header />
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
                                                <label htmlFor="phone">
                                                    is Admin
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="is_admin"
                                                    name="is_admin"
                                                    value={user.is_admin}
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
        </>
    );
};

export default UpdateUser;
