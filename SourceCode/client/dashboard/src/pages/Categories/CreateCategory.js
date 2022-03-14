import React, { useEffect, useState } from "react";
import HeaderMob from "../../components/HeaderMob/HeaderMob";
import Header from "../../components/Header/Header";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import FileInput from "../../components/FileInput";

const CreateCategory = () => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [loading, setLoading] = useState(false);
    const [categories, setCategories] = useState([]);
    const [error, setError] = useState("");
    const [image, setImage] = useState("");
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
            setCategories(categories.data.categories);
        };
        fetchCategories().then((r) => console.log("Test Categories"));
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const formData = new FormData();
        formData.append("name", name);
        formData.append("description", description);
        formData.append("img", image);
        try {
            const res = await axios.post(
                "http://127.0.0.1:8000/api/category/",
                formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                }
            );
            if (res.data.message === "Category added successfully") {
                await Swal.fire({
                    icon: "success",
                    title: "Course Created",
                    showConfirmButton: false,
                    timer: 1500,
                });
                navigate("/categories");
                // window.location.reload();
            }
        } catch (err) {
            setError(err.response.data.error);
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
                                                    Category Name
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
                                            {/*<div className="form-group">*/}
                                            {/*    <label htmlFor="year">Year</label>*/}
                                            {/*    <input*/}
                                            {/*        type="text"*/}
                                            {/*        className="form-control"*/}
                                            {/*        id="year"*/}
                                            {/*        name="year"*/}
                                            {/*        value={year}*/}
                                            {/*        onChange={handleChange}*/}
                                            {/*    />*/}
                                            {/*</div>*/}
                                            {/*<div className="form-group">*/}
                                            {/*    <label htmlFor="category_id">Category ID</label>*/}
                                            {/*    <select*/}
                                            {/*        className="form-control"*/}
                                            {/*        id="category_id"*/}
                                            {/*        name="category_id"*/}
                                            {/*        onChange={handleChange}*/}
                                            {/*        value={category_id}*/}
                                            {/*    >*/}
                                            {/*        <option value="">Select Category</option>*/}
                                            {/*        {categories.map(category => (*/}
                                            {/*            <option key={category.id}*/}
                                            {/*                value={category.id}>{category.name}</option>*/}
                                            {/*        ))}*/}
                                            {/*    </select>*/}
                                            {/*</div>*/}
                                            {/*<div className="form-group">*/}
                                            {/*    <label htmlFor="requirement">Requirement</label>*/}
                                            {/*    <input*/}
                                            {/*        type="text"*/}
                                            {/*        className="form-control"*/}
                                            {/*        id="requirement"*/}
                                            {/*        name="requirements"*/}
                                            {/*        value={requirements}*/}
                                            {/*        onChange={handleChange}*/}
                                            {/*    />*/}
                                            {/*</div>*/}
                                            {/*<FileInput*/}
                                            {/*    name="img"*/}
                                            {/*    label="Upload Image"*/}
                                            {/*    onChange={e => {*/}
                                            {/*        handleImage(e.target.files)*/}
                                            {/*    }}*/}
                                            {/*    value={image}*/}
                                            {/*/>*/}
                                            <div className="form-group">
                                                <label htmlFor="img">
                                                    Image
                                                </label>
                                                <input
                                                    type="file"
                                                    className="form-control"
                                                    id="image"
                                                    name="img"
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

export default CreateCategory;
