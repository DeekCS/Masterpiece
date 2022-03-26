import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Preloader from '../Preloader/Preloader';
import axios from 'axios';

const Categories = () => {
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState('');
  const [courses, setCourses] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get('http://127.0.0.1:8000/api/category/');
        setCategory(result.data);
        setLoading(false);
        console.log(result.data);
      } catch (er) {
        setError(er.message);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <section className="courses-one">
        <div className="container">
          <div className="section-title text-center mt-3">
            <span className="section-title__tagline mt-3">Checkout New List</span>
            <h2 className="section-title__title">Explore Categories</h2>
          </div>
          <div className="row">
            {loading ? (
              <Preloader />
            ) : (
              <>
                {category.map(item => {
                  return (
                    <div
                      className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
                      data-wow-delay="0ms"
                      data-wow-duration="1500ms"
                      key={item.id}
                    >
                      <div className="categories-one__single">
                        <div className="categories-one__single-img">
                          <img
                            src={'http://localhost:8000/uploads/categories/' + item.img}
                            alt={item.name}
                          />
                          <div className="categories-one__single-overlay">
                            <div className="categories-one__single-overlay-text1">
                              <p>{item.length} full courses</p>
                            </div>
                            <div className="categories-one__single-overlay-text2">
                              <h4>{item.name}</h4>
                            </div>
                            <div className="categories-one__single-icon">
                              <Link to={`/all-courses/${item.id}`}>
                                <i className="fa fa-play-circle-o" />
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
                <div className="categories-one__btn text-center">
                  <Link to={`/all-courses`} className="thm-btn">
                    view all courses
                  </Link>
                </div>
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Categories;
