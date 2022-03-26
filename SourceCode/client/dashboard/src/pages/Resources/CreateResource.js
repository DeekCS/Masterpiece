import React, { useEffect, useState } from 'react';
import HeaderMob from '../../components/Dashboard/HeaderMob/HeaderMob';
import Header from '../../components/Dashboard/Header/Header';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
import FileInput from '../../components/FileInput';

const CreateCategory = () => {
  const [name, setName] = useState('');
  const [videos, setVideos] = useState('');
  const [loading, setLoading] = useState(false);
  const [courses_id, setCoursesId] = useState('');
  const [error, setError] = useState('');
  const [image, setImage] = useState('');
  const [file, setFile] = useState('');
  const [courses, setCourses] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = JSON.parse(localStorage.getItem('user'));
    if (!isLoggedIn || isLoggedIn.is_admin !== 1) {
      navigate('/login');
    }
  }, []);

  const handleChange = e => {
    const { name, value } = e.target;
    if (name === 'videos') {
      setVideos(value);
    } else if (name === 'courses_id') {
      setCoursesId(value);
    }
  };

  //handle image upload
  const handleImage = file => {
    setImage(file[0]);
  };

  //handle file upload

  const handleFile = file => {
    setFile(file[0]);
  };

  //handle submit to upload a new course with image and data

  useEffect(() => {
    const fetchCourses = async () => {
      const courses = await axios.get('http://127.0.0.1:8000/api/course');
      //push the categories to the state
      setCourses(courses.data);
    };
    fetchCourses().then(r => console.log('Test courses'));
  }, []);

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData();
    formData.append('files', file);
    formData.append('videos', videos);
    formData.append('images', image);
    formData.append('courses_id', courses_id);
    try {
      const res = await axios.post('http://127.0.0.1:8000/api/resource/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      if (res.data.success === 'Resource Created Successfully') {
        await Swal.fire({
          icon: 'success',
          title: 'Resource Created Successfully',
          showConfirmButton: false,
          timer: 1500,
        });
        navigate('/resources');
        // window.location.reload();
      }
    } catch (err) {
      setLoading(false);
      setError(err.response.data.error);
      await Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: err.response.data.error,
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
                  <form action="" method="" onSubmit={handleSubmit}>
                    <div className="card-body">
                      <div className="form-group">
                        <label htmlFor="courses_id">Course ID</label>
                        {loading ? (
                          <select
                            className="form-control"
                            name="courses_id"
                            id="courses_id"
                            value={courses_id}
                            onChange={handleChange}
                          >
                            <option value="">Loading...</option>
                          </select>
                        ) : (
                          <select
                            className="form-control"
                            name="courses_id"
                            id="courses_id"
                            value={courses_id}
                            onChange={handleChange}
                          >
                            <option value="">Select Course</option>
                            {courses.map(course => (
                              <option key={course.id} value={course.id}>
                                {course.name}
                              </option>
                            ))}
                          </select>
                        )}
                      </div>
                      <div className="form-group">
                        <label htmlFor="videos">video url</label>
                        <input
                          type="text"
                          className="form-control"
                          id="videos"
                          name="videos"
                          value={videos}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="images">Images</label>
                        <input
                          type="file"
                          className="form-control"
                          id="images"
                          name="images"
                          onChange={e => {
                            handleImage(e.target.files);
                          }}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="files">Upload File</label>
                        <input
                          type="file"
                          className="form-control"
                          id="files"
                          name="files"
                          onChange={e => {
                            handleFile(e.target.files);
                          }}
                        />
                      </div>
                    </div>
                    <div className="card-footer">
                      <button type="submit" className="btn btn-primary">
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
