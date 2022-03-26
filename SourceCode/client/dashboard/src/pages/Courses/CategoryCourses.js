import react, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import HeaderMob from '../../components/Dashboard/HeaderMob/HeaderMob';
import Preloader from '../../components/Preloader/Preloader';
import MainHeader from '../../components/MainHeader/MainHeader';
import './course.css';

const CategoryCourses = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [category, setCategory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [search, setSearch] = useState('');
  const [noResult, setNoResult] = useState(false);
  const [filter, setFilter] = useState('');
  const [catName, setCatName] = useState('');
  // const [year, setYear] = useState('');

  useEffect(() => {
    setLoading(true);
    // console.log(year);
    fetchData().then(r => {
      setLoading(false);
    });
  }, [id]);

  const fetchData = async () => {
    try {
      // setLoading(true);
      const result = await axios(`http://127.0.0.1:8000/api/courses/category/${id}`);
      setCategory(result.data);
      // console.table(year + 'year');
      // setLoading(false);
      // result.data.map(item => {
      //   console.table(item);
      //   setYear(item.year);
      // });
      // console.log(category + 'category');
    } catch (er) {
      setError(true);
    }
  };

  const handleSearch = e => {
    setSearch(e.target.value);
  };

  const handleFilter = e => {
    setFilter(e.target.value);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    if (search === '') {
      await fetchData();
      return;
    }

    try {
      setCategory([]);
      setLoading(true);
      const result = await axios(`http://127.0.0.1:8000/api/search/${search}`);
      setCategory(result.data);
      setLoading(false);
      setSearch('');
    } catch (er) {
      setError(true);
      setLoading(false);
      setNoResult(er.response.data.error);
    }
  };

  useEffect(() => {
    if (filter === 'year') {
      setCategory(category.sort((a, b) => a.year - b.year));
    } else if (filter === 'name') {
      setCategory(category.sort((a, b) => a.name.localeCompare(b.name)));
    } else if (filter === 'asc') {
      setCategory(category.sort((a, b) => a.year - b.year));
    } else if (filter === 'desc') {
      setCategory(category.sort((a, b) => b.year - a.year));
    } else {
      setCategory(category.sort((a, b) => a.year - b.year));
    }
  }, [filter]);

  useEffect(() => {
    const fetchCategories = async () => {
      setLoading(true);
      const categories = await axios.get('http://127.0.0.1:8000/api/category/');
      //push the categories to the state
      setCatName(categories.data);
      categories.data.map(item => {
        if (item.id === id) {
          setCatName(item.name);
        }

        console.log(item.name + 'name');
      });
      setLoading(false);
    };
    fetchCategories();
  }, [catName.name]);

  //get all courses map function
  const renderCourses = () => {
    return category.map((course, i) => {
      return (
        <div className="col-xl-3 col-lg-6 col-md-6 filter-item development business" key={i}>
          <div
            className="courses-one__single wow fadeInLeft"
            data-wow-delay="0ms"
            data-wow-duration="1000ms"
          >
            <div className="courses-one__single-img">
              <img src={'http://localhost:8000/uploads/' + course.image} alt={course.name} />
              <div className="overlay-text">
                <p>Featured</p>
              </div>
            </div>
            <div className="courses-one__single-content">
              <div className="courses-one__single-content-overlay-img">
                <img
                  src="../../assets/front-end//images/resources/courses-v1-overlay-img1.png"
                  alt={course.name}
                />
              </div>
              <h6 className="courses-one__single-content-name">
                {/*{loading ? (*/}
                {/*  <div className="spinner-border text-primary" role="status">*/}
                {/*    <span className="sr-only">Loading...</span>*/}
                {/*  </div>*/}
                {/*) : (*/}
                {/*  catName.map(item => {*/}
                {/*    if (item.id === course.category_id) {*/}
                {/*      return <span key={item.id}>{item.name}</span>;*/}
                {/*    }*/}
                {/*  })*/}
                {/*)}*/}
              </h6>
              <h4 className="courses-one__single-content-title">
                <Link to={`/course/${course.id}`}>{course.name}</Link>
              </h4>
              <ul className="courses-one__single-content-courses-info list-unstyled" />

              <p className="courses-one__single-content-price">
                {loading ? (
                  <div className="spinner-border text-primary" role="status">
                    <span className="sr-only">Loading...</span>
                  </div>
                ) : (
                  category.map(item => {
                    if (item.id === course.id) {
                      return <span key={item.id}>Year : {item.year}</span>;
                    }
                  })
                )}
              </p>

              <ul className="courses-one__single-content-courses-info list-unstyled">
                <li>2 Lessons</li>
                <li>10 Hours</li>
                <li>Beginner</li>
              </ul>
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <>
      <div className="page-wrapper">
        {loading && <Preloader />}
        <MainHeader />
        <section className="page-header clearfix">
          {/*// style="background-image: url(assets/images/backgrounds/page-header-bg.jpg);">*/}
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="page-header__wrapper clearfix">
                  <div className="page-header__title">
                    <h2>Courses</h2>
                  </div>
                  <div className="page-header__menu">
                    <ul className="page-header__menu-list list-unstyled clearfix">
                      <li>
                        <a href="index.html">Home</a>
                      </li>
                      <li className="active">Courses</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="courses-one courses-one--courses">
          <div className="container">
            <div className="section-title text-center">
              <span className="section-title__tagline">Checkout New List</span>
              <h2 className="section-title__title">Explore Courses</h2>
            </div>

            <form
              className="course-filter-form select-filter-dropdow search-cols-4"
              onSubmit={handleSubmit}
            >
              <div className="course-filter_search">
                <div className="content-inner">
                  <label className="title-field">Search Keyword</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search Courses ..."
                    onChange={handleSearch}
                  />
                  <i className="tutor-icon-magnifying-glass-1" />
                </div>
              </div>

              <div className="course-filter_search">
                <div className="content-inner">
                  <label className="title-field">Sorting</label>
                  <select
                    className="dropdown-css select-filter-dropdow"
                    onChange={e => {
                      handleFilter(e);
                    }}
                  >
                    <option value="">All Courses</option>
                    <option value="asc">A-Z</option>
                    <option value="desc">Z-A</option>
                    <option value="name">By Name</option>
                    <option value="year">By year</option>
                  </select>
                  <i className="tutor-icon-arrow-down-1" />
                </div>
              </div>
              {/*<div className="course-filter_category course-checkbox-filter">*/}
              {/*  <div className="show-results" data-placehoder="Al Categories">*/}
              {/*    <div className="content-inner">Al Categories</div>*/}
              {/*  </div>*/}
              {/*  <div className="checkbox-filter-content">*/}
              {/*    <div className="content-inner">*/}
              {/*      <div className="tutor-form-check tutor-mb-20">*/}
              {/*        <input*/}
              {/*          type="checkbox"*/}
              {/*          className="tutor-form-check-input"*/}
              {/*          id="71"*/}
              {/*          name="tutor-course-filter-category"*/}
              {/*          value="71"*/}
              {/*        />*/}
              {/*        &nbsp;*/}
              {/*        <label htmlFor="71">Art &amp; Design </label>*/}
              {/*      </div>*/}
              {/*      <div className="tutor-form-check tutor-mb-20">*/}
              {/*        <input*/}
              {/*          type="checkbox"*/}
              {/*          className="tutor-form-check-input"*/}
              {/*          id="75"*/}
              {/*          name="tutor-course-filter-category"*/}
              {/*          value="75"*/}
              {/*        />*/}
              {/*        &nbsp;*/}
              {/*        <label htmlFor="75">Business </label>*/}
              {/*      </div>*/}
              {/*      <div className="tutor-form-check tutor-mb-20">*/}
              {/*        <input*/}
              {/*          type="checkbox"*/}
              {/*          className="tutor-form-check-input"*/}
              {/*          id="72"*/}
              {/*          name="tutor-course-filter-category"*/}
              {/*          value="72"*/}
              {/*        />*/}
              {/*        &nbsp;*/}
              {/*        <label htmlFor="72">Lifestyle </label>*/}
              {/*      </div>*/}
              {/*      <div className="tutor-form-check tutor-mb-20">*/}
              {/*        <input*/}
              {/*          type="checkbox"*/}
              {/*          className="tutor-form-check-input"*/}
              {/*          id="74"*/}
              {/*          name="tutor-course-filter-category"*/}
              {/*          value="74"*/}
              {/*        />*/}
              {/*        &nbsp;*/}
              {/*        <label htmlFor="74">Marketing </label>*/}
              {/*      </div>*/}
              {/*      <div className="tutor-form-check tutor-mb-20">*/}
              {/*        <input*/}
              {/*          type="checkbox"*/}
              {/*          className="tutor-form-check-input"*/}
              {/*          id="73"*/}
              {/*          name="tutor-course-filter-category"*/}
              {/*          value="73"*/}
              {/*        />*/}
              {/*        &nbsp;*/}
              {/*        <label htmlFor="73">Photography </label>*/}
              {/*      </div>*/}
              {/*    </div>*/}
              {/*  </div>*/}
              {/*</div>*/}
              {/*<div className="course-filter_level course-checkbox-filter">*/}
              {/*  <div className="show-results" data-placehoder="Level">*/}
              {/*    <div className="content-inner">Level</div>*/}
              {/*  </div>*/}
              {/*  <div className="checkbox-filter-content">*/}
              {/*    <div className="content-inner">*/}
              {/*      <label>*/}
              {/*        <input type="checkbox" name="tutor-course-filter-level" value="beginner" />*/}
              {/*        &nbsp; Beginner{' '}*/}
              {/*      </label>*/}
              {/*      <label>*/}
              {/*        <input*/}
              {/*          type="checkbox"*/}
              {/*          name="tutor-course-filter-level"*/}
              {/*          value="intermediate"*/}
              {/*        />*/}
              {/*        &nbsp; Intermediate{' '}*/}
              {/*      </label>*/}
              {/*      <label>*/}
              {/*        <input type="checkbox" name="tutor-course-filter-level" value="expert" />*/}
              {/*        &nbsp; Expert{' '}*/}
              {/*      </label>*/}
              {/*    </div>*/}
              {/*  </div>*/}
              {/*</div>*/}
              {/*<div className="course-filter-price_type course-checkbox-filter">*/}
              {/*  <div className="show-results" data-placehoder="Price">*/}
              {/*    <div className="content-inner">Price</div>*/}
              {/*  </div>*/}
              {/*  <div className="checkbox-filter-content">*/}
              {/*    <div className="content-inner">*/}
              {/*      <label>*/}
              {/*        <input type="checkbox" name="tutor-course-filter-price" value="free" />*/}
              {/*        &nbsp; Free{' '}*/}
              {/*      </label>*/}
              {/*      <label>*/}
              {/*        <input type="checkbox" name="tutor-course-filter-price" value="paid" />*/}
              {/*        &nbsp; Paid{' '}*/}
              {/*      </label>*/}
              {/*    </div>*/}
              {/*  </div>*/}
              {/*</div>*/}
              {/*<input type="hidden" name="course_per_page" value="8" />*/}
              {/*<input type="hidden" name="course_column_lg" value="4" />*/}
              {/*<input type="hidden" name="course_column_md" value="4" />*/}
              {/*<input type="hidden" name="course_column_sm" value="2" />*/}
              {/*<input type="hidden" name="course_column_xs" value="2" />*/}
              {/*<input type="hidden" name="course_column_xx" value="1" />*/}
              {/*<div className="tutor-clear-all-filter">*/}
              {/*  <a href="#" onClick="window.location.reload()">*/}
              {/*    <i className="tutor-icon-cross"></i> Clear All Filter*/}
              {/*  </a>*/}
              {/*</div>*/}
            </form>
            {/*{showData && <div className="row filter-layout masonary-layout">{renderCourses()}</div>}*/}

            <div className="row filter-layout masonary-layout">
              {loading && <Preloader />}
              {category.length === 0 && (
                <>
                  <div className="tutor-empty-state td-empty-state tutor-p-32 tutor-text-center">
                    <img
                      src="https://gaviaspreview.com/wp/zilom/wp-content/plugins/tutor/assets/images/emptystate.svg"
                      alt="No Data Available in this Section"
                      width="85%"
                    />
                    <div className="tutor-fs-6 tutor-fw-normal tutor-color-black-60 tutor-text-center">
                      No Data Available in this Section
                    </div>
                  </div>
                </>
              )}
              {category.length > 0 && renderCourses()}
            </div>
          </div>
        </section>

        <footer className="footer-one">
          <div className="footer-one__bg" />
          <div className="footer-one__top">
            <div className="container">
              <div className="row">
                <div
                  className="col-xl-2 col-lg-4 col-md-4 wow animated fadeInUp"
                  data-wow-delay="0.1s"
                >
                  <div className="footer-widget__column footer-widget__about">
                    <div className="footer-widget__about-logo">
                      <a href="index.html">
                        <img src="../../assets/front-end/images/resources/footer-logo.png" alt="" />
                      </a>
                    </div>
                  </div>
                </div>

                <div
                  className="col-xl-2 col-lg-4 col-md-4 wow animated fadeInUp"
                  data-wow-delay="0.3s"
                >
                  <div className="footer-widget__column footer-widget__courses">
                    <h3 className="footer-widget__title">Courses</h3>
                    <ul className="footer-widget__courses-list list-unstyled">
                      <li>
                        <a href="#">UI/UX Design</a>
                      </li>
                      <li>
                        <a href="#">WordPress Development</a>
                      </li>
                      <li>
                        <a href="#">Business Strategy</a>
                      </li>
                      <li>
                        <a href="#">Software Development</a>
                      </li>
                      <li>
                        <a href="#">Business English</a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div
                  className="col-xl-2 col-lg-4 col-md-4 wow animated fadeInUp"
                  data-wow-delay="0.5s"
                >
                  <div className="footer-widget__column footer-widget__links">
                    <h3 className="footer-widget__title">Links</h3>
                    <ul className="footer-widget__links-list list-unstyled">
                      <li>
                        <a href="about.html">About Us</a>
                      </li>
                      <li>
                        <a href="#">Overview</a>
                      </li>
                      <li>
                        <a href="teachers-1.html">Teachers</a>
                      </li>
                      <li>
                        <a href="#">Join Us</a>
                      </li>
                      <li>
                        <a href="news.html">Our News</a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div
                  className="col-xl-3 col-lg-6 col-md-6 wow animated fadeInUp"
                  data-wow-delay="0.7s"
                >
                  <div className="footer-widget__column footer-widget__contact">
                    <h3 className="footer-widget__title">Contact</h3>
                    <p className="text">88 broklyn street, New York USA</p>
                    <p>
                      <a href="mailto:info@templatepath.com">needhelp@company.com</a>
                    </p>
                    <p className="phone">
                      <a href="tel:123456789">92 888 666 0000</a>
                    </p>
                  </div>
                </div>

                <div
                  className="col-xl-3 col-lg-6 col-md-6 wow animated fadeInUp"
                  data-wow-delay="0.9s"
                >
                  <div className="footer-widget__column footer-widget__social-links">
                    <ul className="footer-widget__social-links-list list-unstyled clearfix">
                      <li>
                        <a href="#">
                          <i className="fab fa-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-instagram"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-dribbble"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-one__bottom">
            <div className="container">
              <div className="row">
                <div className="col-xl-12">
                  <div className="footer-one__bottom-inner">
                    <div className="footer-one__bottom-text text-center">
                      <p>&copy; Copyright 2021 by Layerdrops.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default CategoryCourses;
