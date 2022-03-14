import React from "react";
import "./App.css";
import Admin from "./pages/Admin/Admin";
//react-router-dom v6 import
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateUser from "./components/CreateUser/CreateUser";
import UpdateUser from "./components/UpdateUser/UpdateUser";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Users from "./components/Users/Users";
import CreateCategory from "./pages/Categories/CreateCategory";
import CreateCourse from "./pages/Courses/CreateCoures";

function App() {
    return (
        <BrowserRouter>
            {/*    Routes only for admin dashboard*/}
            <Routes>
                <Route path="/admin" element={<Admin />} />
            </Routes>
            <Routes>
                <Route path="/users" element={<Users />} />
            </Routes>
            <Routes>
                <Route path="/add" element={<CreateUser />} />
            </Routes>
            <Routes>
                <Route path="users/:id" element={<UpdateUser />} />
            </Routes>
            <Routes>
                <Route path="/login" element={<Login />} />
            </Routes>
            <Routes>
                <Route path="/register" element={<Register />} />
            </Routes>
            <Routes>
                <Route path="/categories" element={<CreateCategory />} />
            </Routes>
            <Routes>
                <Route path="/courses/create" element={<CreateCourse />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
