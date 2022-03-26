import React, {useEffect, useState} from "react";
import axios from "axios";
import Swal from "sweetalert2";
import {useNavigate} from "react-router-dom";
import HeaderMob from "../../components/Dashboard/HeaderMob/HeaderMob";
import Header from "../../components/Dashboard/Header/Header";
import AddItem from "../../components/Dashboard/AddItem/AddItem";

function Courses() {
    const navigate = useNavigate();

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [courses, setCourses] = useState({
        id: 1, name: "", description: "", image: "", requirements: "", category_id: "",
    });

    const [image, setImage] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const {data} = await axios.get("http://127.0.0.1:8000/api/course");

// const {response} = await axios.get(`http://127.0.0.1:8000/api/course/image/1`);
// console.log(response + 'image');
                setCourses(data);
// setImage(response);

// setImage(img.data.image);
                setLoading(false);
                setError(false);
            } catch (er) {
                setLoading(false);
                setError(true);
            }
        };
        fetchData().then((r) => setLoading(false));
    }, [courses.id]);

//get image from database
    const getImage = async () => {
        try {
// setLoading(true);
// const res = await axios.get("http://127.0.0.1:8000/api/course");
// const img = res.data.image;
            const {response} = await axios.get(`http://127.0.0.1:8000/api/course/image/1`);
// console.log(response + 'image');
            setImage(response);
            console.log(image);
// return response;
        } catch (er) {
// setLoading(false);
// setError(true);
            console.log(er);
        }
    };

    const deleteCourse = async (id) => {
        console.log(id);
        try {
            Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!",
            }).then((result) => {
                if (result.value) {
                    Swal.fire("Deleted!", "Your course has been deleted.", "success");
                    axios.delete(`http://127.0.0.1:8000/api/course/${id}`);
                    setCourses(courses.filter((category) => category.id !== id));
                }
                navigate("/courses");
            });
        } catch (er) {
            console.log(er);
        }
    };

    return (
        <>
        <div className="page-wrapper">
            <HeaderMob/>
            <div className="page-container">
                <Header/>
                <div className="main-content">
                    <div className="section__content section__content--p30">
                <div className="container-fluid">
                    <AddItem
                        title={"Courses"}
                        name={"Add New Course"}
                        path={"create"}
                    />
                <div className="row mt-3">
                    <div className="col-lg-12">
                        <div className="table-responsive table--no-card m-b-40">
                            <table className="table table-borderless table-striped table-earning">
                                <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>Description</th>
                                    <th className="text-right">
                                        Image
                                    </th>
                                    <th className="text-right">
                                        Requirements
                                    </th>
                                    <th className="text-right">
                                        Category
                                    </th>
                                    <th className="text-right">
                                        Action
                                    </th>
                                </tr>
                                </thead>
                                <tbody>
                                {loading ? (<tr>
                                    <td colSpan="7">
                                        Loading...
                                    </td>
                                </tr>) : error ? (<tr>
                                    <td colSpan="7">
                                        Something went
                                        wrong. Please
                                        try again.
                                    </td>
                                </tr>) : (courses.map((course, index) => (<tr key={index}>
                                    <td>
                                        {course.id}
                                    </td>
                                    <td>
                                        {course.name}
                                    </td>
                                    <td>
                                        {course.description}
                                    </td>
                                    <td>
                                        {/*    display the image from res*/}
                                        <img
                                            src={"http://localhost:8000/uploads/" + course.image}
                                            alt="course"
                                            className="w-25"
                                        />
                                    </td>
                                    <td className="text-right">
                                        {course.requirements}
                                    </td>
                                    <td className="text-right">
                                        {course.category_id}
                                    </td>

                                    <td className="text-right">
                                        <i
                                            className="fas fa-trash text-danger"
                                            onClick={() => deleteCourse(course.id)}
                                        />
                                        <i
                                            className="m-2 fas fa-edit text-primary"
                                            onClick={() => navigate()}
                                        />
                                    </td>
                                </tr>)))}
                                {courses.length === 0 && !loading && !error && (<tr>
                                    <td
                                        colSpan="7"
                                        className={"text-center"}
                                    >
                                        <h1>
                                            {" "}
                                            No
                                            Courses
                                            found.{" "}
                                        </h1>
                                    </td>
                                </tr>)}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    {/*<CreateUser />*/}
                </div>
                </div>
                    </div>
                </div>
            </div>
            </div>
        </>);
}

export default Courses;
