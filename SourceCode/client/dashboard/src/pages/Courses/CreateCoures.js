import React, { useEffect, useState } from "react";
import HeaderMob from "../../components/Dashboard/HeaderMob/HeaderMob";
import Header from "../../components/Dashboard/Header/Header";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import FileInput from "../../components/FileInput";
import login from "../Login/Login";

const CreateCourse = () => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [image, setImage] = useState("");
    const [requirements, setRequirements] = useState("");
    const [category_id, setCategoryId] = useState("");
    const [categories, setCategories] = useState([]);
    const [year, setYear] = useState("");
    const navigate = useNavigate();
    useEffect(() => {
        const isLoggedIn = JSON.parse(localStorage.getItem("user"));
        if (!isLoggedIn || isLoggedIn.is_admin !== 1) {
            navigate("/login");
        }
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === "name") {
            setName(value);
        } else if (name === "description") {
            setDescription(value);
        } else if (name === "requirements") {
            setRequirements(value);
        } else if (name === "category_id") {
            setCategoryId(value);
        } else if (name === "year") {
            setYear(value);
        }
    };

    //handle image upload
    const handleImage = (file) => {
        setImage(file[0]);
    };

    //handle submit to upload a new course with image and data

    useEffect(() => {
        const fetchCategories = async () => {
            const categories = await axios.get(
                "http://127.0.0.1:8000/api/category/"
            );
            //push the categories to the state
            setCategories(categories.data);
        };
        fetchCategories().then((r) => console.log("Test Categories"));
    }, []);

    console.log(category_id + "this is category id");
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const formData = new FormData();
        formData.append("name", name);
        formData.append("description", description);
        formData.append("image", image);
        formData.append("category_id", category_id);
        formData.append("year", year);
        formData.append("requirements", requirements);
        // console.log(category_id + "this is category id");
        try {
            const res = await axios.post(
                "http://127.0.0.1:8000/api/course/",
                formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                }
            );
            setLoading(false);
            Swal.fire({
                title: "Success",
                text: "Course created successfully",
                icon: "success",
                confirmButtonText: "OK",
            }).then((result) => {
                if (result.value) {
                    navigate("/categories");
                }
            });
        } catch (err) {
            setLoading(false);
            setError(err.response.data.error);
            await Swal.fire({
                title: "Error",
                text: err.response.data.error,
                icon: "error",
                confirmButtonText: "OK",
            });
        }
        setLoading(false);
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
                                        onSubmit={handleSubmit}
                                    >
                                        <div className="card-body">
                                            <div className="form-group">
                                                <label htmlFor="name">
                                                    Course Name
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    name="name"
                                                    id="name"
                                                    placeholder="Enter Category name"
                                                    onChange={handleChange}
                                                    value={name}
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="description">
                                                    Description
                                                </label>
                                                <textarea
                                                    className="form-control"
                                                    name="description"
                                                    id="description"
                                                    placeholder="Enter Description of the Course"
                                                    onChange={handleChange}
                                                    value={description}
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="year">
                                                    Year
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="year"
                                                    name="year"
                                                    value={year}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="category_id">
                                                    Category ID
                                                </label>
                                                {loading ? (
                                                    <select
                                                        className="form-control"
                                                        name="category_id"
                                                        id="category_id"
                                                        value={category_id}
                                                        onChange={handleChange}
                                                    >
                                                        <option value="">
                                                            Loading...
                                                        </option>
                                                    </select>
                                                ) : (
                                                    <select
                                                        className="form-control"
                                                        name="category_id"
                                                        id="category_id"
                                                        value={category_id}
                                                        onChange={handleChange}
                                                    >
                                                        <option value="">
                                                            Select Category
                                                        </option>
                                                        {categories.map(
                                                            (category) => (
                                                                <option
                                                                    key={
                                                                        category.id
                                                                    }
                                                                    value={
                                                                        category.id
                                                                    }
                                                                >
                                                                    {
                                                                        category.name
                                                                    }
                                                                </option>
                                                            )
                                                        )}
                                                    </select>
                                                )}
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="requirement">
                                                    Requirement
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="requirement"
                                                    name="requirements"
                                                    value={requirements}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="img">
                                                    Image
                                                </label>
                                                <input
                                                    type="file"
                                                    className="form-control"
                                                    id="image"
                                                    name="image"
                                                    onChange={(e) => {
                                                        handleImage(
                                                            e.target.files
                                                        );
                                                    }}
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

export default CreateCourse;
