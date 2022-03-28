import React, { useEffect, useState } from 'react';
import './App.css';
import Admin from './pages/Admin/Admin';
//react-router-dom v6 import
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import CreateUser from './components/Dashboard/CreateUser/CreateUser';
import UpdateUser from './components/Dashboard/UpdateUser/UpdateUser';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Users from './components/Dashboard/Users/Users';
import CreateCategory from './pages/Categories/CreateCategory';
import CreateCourse from './pages/Courses/CreateCoures';
import Categories from './pages/Categories/Categories';
import Courses from './pages/Courses/Courses';
import HeaderMob from './components/Dashboard/HeaderMob/HeaderMob';
import Home from './pages/Front/Home';
import CategoryDetail from './pages/CategoryDetail/CategoryDetail';
import AllCourses from './pages/AllCourses/AllCourses';
import Resources from './pages/Resources/Resources';
import CreateResource from './pages/Resources/CreateResource';
import RegisterHome from './components/Register/Register';
import CategoryCourses from './pages/Courses/CategoryCourses';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import Profile from './pages/Front/Profile/Profile';
import UpdateCourse from './components/Courses/UpdateCourse';

function App() {
  // const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <BrowserRouter>
      <ScrollToTop />
      {
        // <HeaderMob />
        <Routes>
          <Route path="/admin" element={<Admin />} />
          <Route path="/users" element={<Users />} />
          <Route path="/add" element={<CreateUser />} />
          <Route path="users/:id" element={<UpdateUser />} />
          <Route path="categories/add" element={<CreateCategory />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/courses/create" element={<CreateCourse />} />
          <Route path="/courses/" element={<Courses />} />
          <Route path="/courses/:id" element={<UpdateCourse />} />
          {/*<Route path="/login" element={<Login />} />*/}
          <Route path="/login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="/" element={<Home />} />
          <Route path="/course/:id" element={<CategoryDetail />} />
          <Route path="/all-courses/:id" element={<CategoryCourses />} />
          <Route path="/all-courses/" element={<AllCourses />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="resources/create-resource" element={<CreateResource />} />
          <Route path="/reg" element={<RegisterHome />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      }
    </BrowserRouter>
  );
}

export default App;
