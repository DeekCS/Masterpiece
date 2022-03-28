import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import axios from 'axios';
import HeaderMob from '../Dashboard/HeaderMob/HeaderMob';
import Header from '../Dashboard/Header/Header';
// import HeaderMob from '../../HeaderMob/HeaderMob';
// import Header from '../../Header/Header';

const UpdateCourse = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [course, setCourse] = useState({
    name: '',
    description: '',
    year: '',
    requirements: '',
    category_id: '',
    image: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [category_id, setCategoryId] = useState('');

  const [categories, setCategories] = useState([]);
  const [image, setImage] = useState('');
  const handleChange = e => {
    const { name, value } = e.target;
    setCourse({ ...course, [name]: value });
  };
  const handleImage = file => {
    setImage(file[0]);
  };

  useEffect(() => {
    const fetchCategories = async () => {
      const categories = await axios.get('http://127.0.0.1:8000/api/category/');
      //push the categories to the state
      setCategories(categories.data);
    };
    fetchCategories().then(r => console.log('Test Categories'));
  }, []);

  useEffect(() => {
    const getCourse = async () => {
      try {
        setLoading(true);
        const result = await axios.get(`http://127.0.0.1:8000/api/course/${id}`);
        console.log(result.data + 'data');
        setCourse(result.data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(true);
      }
    };
    getCourse();
  }, [id]);

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      setLoading(true);
      setError(false);
      await axios
        .put(`http://127.0.0.1:8000/api/course/${id}`, course)
        .then(res => {
          setLoading(false);
          Swal.fire({
            title: 'Success',
            text: 'course updated successfully',
            icon: 'success',
            showCancelButton: false,
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'OK',
          }).then(result => {
            if (result.value) {
              navigate('/courses');
            }
          });
        })
        .catch(err => {
          console.log(err + 'error ddddd');
          setLoading(false);
          setError(true);
          Swal.fire({
            title: 'Error',
            text: err.response.data.message,
            icon: 'error',
            showCancelButton: false,
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'OK',
          });
          console.log(err + 'error');
        });
    } catch (err) {
      setLoading(false);
      setError(true);
      console.log(err.response.data + 'error22');
      await Swal.fire({
        title: 'Error',
        text: err.response.data,
        icon: 'error',
        showCancelButton: false,
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'OK',
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
                  <form action="" method="" encType="multipart/form-data" onSubmit={handleSubmit}>
                    <div className="card-body">
                      <div className="form-group">
                        <label htmlFor="name">Course Name</label>
                        <input
                          type="text"
                          className="form-control"
                          name="name"
                          id="name"
                          placeholder="Enter Course name"
                          onChange={handleChange}
                          value={course.name}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="description">Course description</label>
                        <textarea
                          className="form-control"
                          name="description"
                          id="description"
                          placeholder="Enter Course description"
                          onChange={handleChange}
                          value={course.description}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="year">Year</label>
                        <input
                          type="year"
                          className="form-control"
                          id="year"
                          name="year"
                          value={course.year}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="requirements">Course requirements</label>
                        <input
                          type="text"
                          className="form-control"
                          id="requirements"
                          name="requirements"
                          value={course.requirements}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="category_id">Category ID</label>
                        {loading ? (
                          <select
                            className="form-control"
                            name="category_id"
                            id="category_id"
                            value={course.category_id}
                            onChange={handleChange}
                          >
                            <option value="">Loading...</option>
                          </select>
                        ) : (
                          <select
                            className="form-control"
                            name="category_id"
                            id="category_id"
                            value={course.category_id}
                            onChange={handleChange}
                          >
                            <option value="">Select Category</option>
                            {categories.map(category => (
                              <option key={category.id} value={category.id}>
                                {category.name}
                              </option>
                            ))}
                          </select>
                        )}
                      </div>
                      <div className="form-group">
                        <label htmlFor="image">Image</label>
                        <input
                          type="file"
                          className="form-control"
                          id="image"
                          name="image"
                          onChange={e => {
                            handleImage(e.target.files);
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

export default UpdateCourse;
