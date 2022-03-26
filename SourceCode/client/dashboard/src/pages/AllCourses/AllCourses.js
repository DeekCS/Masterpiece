import react, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import HeaderMob from '../../components/Dashboard/HeaderMob/HeaderMob';
import Preloader from '../../components/Preloader/Preloader';
import MainHeader from '../../components/MainHeader/MainHeader';
import '../Courses/course.css';
import Pagination from 'react-js-pagination';
import ReactPaginate from 'react-paginate';
import Footer from '../../components/Footer/Footer';
// require('bootstrap/less/bootstrap.less');

const CategoryCourses = () => {
  // const { id } = useParams();
  const navigate = useNavigate();
  const [category, setCategory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [search, setSearch] = useState('');
  const [noResult, setNoResult] = useState(false);
  const [filter, setFilter] = useState('');
  const [catName, setCatName] = useState('');
  const [catId, setCatId] = useState('');
  const [page, setPage] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  // const [year, setYear] = useState('');
  const [courses, setCourses] = useState(null);

  //***************************************************

  const [postsPerPage] = useState(5);
  const [offset, setOffset] = useState(1);
  const [posts, setAllPosts] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [courseNames, setCourseNames] = useState([]);
  const [value, setValue] = useState('');
  const [newData, setNewData] = useState(posts);
  const getPostData = data => {
    return data.map((course, i) => (
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
              {loading ? (
                <div className="spinner-border text-primary" role="status">
                  <span className="sr-only">Loading...</span>
                </div>
              ) : catName === undefined ? (
                <div className="spinner-border text-primary" role="status">
                  <span className="sr-only">Loading...</span>
                </div>
              ) : (
                catName.map(item => {
                  if (item.id === course.category_id) {
                    return <Link to={`/all-courses/${course.category_id}`}>{item.name}</Link>;
                  }
                })
              )}
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
    ));
  };

  const getAllPosts = async () => {
    const res = await axios.get(`http://127.0.0.1:8000/api/course/`);
    const data = res.data;

    const slice = data.slice(offset - 1, offset - 1 + postsPerPage);
    // For displaying Data
    const postData = getPostData(slice);

    //get all courses name

    // Using Hooks to set value
    setAllPosts(postData);
    console.log(postData + 'postData');
    const courseName = data.map(item => {
      return item.name;
    });
    setCourseNames(courseName);
    setPageCount(Math.ceil(data.length / postsPerPage));
  };

  const handlePageClick = event => {
    const selectedPage = event.selected;
    setOffset(selectedPage + 1);
  };

  useEffect(() => {
    getAllPosts();
  }, [offset]);

  //***************************************************

  useEffect(() => {
    setLoading(true);
    // console.log(year);
    fetchData().then(r => {
      setLoading(false);
    });
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);
      const result = await axios(`http://127.0.0.1:8000/api/course/`);

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

  const handleSubmit = async e => {
    e.preventDefault();
    if (search === '') {
      await getAllPosts();
      return;
    }

    try {
      setAllPosts([]);
      setLoading(true);
      const res = await axios(`http://127.0.0.1:8000/api/search/${search}`);
      const data = res.data;
      const slice = data.slice(offset - 1, offset - 1 + postsPerPage);
      // For displaying Data
      const postData = getPostData(slice);

      // Using Hooks to set value
      setAllPosts(postData);
      setPageCount(Math.ceil(data.length / postsPerPage));
      setLoading(false);
      setSearch('');
    } catch (er) {
      setError(true);
      setLoading(false);
      setNoResult(er.response.data.error);
    }
  };

  const handleChange = e => {
    setValue(e.target.value);
    console.log(value + 'value');
    switch (value) {
      case 'Low price':
        setAllPosts(posts.sort((a, b) => (a.year > b.year ? 1 : -1)));
        console.log(posts.sort((a, b) => (a.year > b.year ? 1 : -1)));
        break;
      case 'High price':
        setAllPosts(posts.sort((a, b) => (b.year > a.year ? 1 : -1)));

        break;

      default:
        setAllPosts(posts);
        break;
    }
  };
  useEffect(() => {
    const fetchCategories = async () => {
      setLoading(true);
      const categories = await axios.get('http://127.0.0.1:8000/api/category/');
      //push the categories to the state
      setCatName(categories.data);

      categories.data.map(item => {
        if (item.id === category.id) {
          setCatName(item.name);
          console.log(item.name + 'name cat course');
        }

        console.log(item.name + 'catttt');
      });

      const courses = await axios.get(`http://127.0.0.1:8000/api/course/`);

      if (catName === '' || catName === undefined) {
        setCategory(courses.data);
        setLoading(false);
      } else {
        let newCourses = courses.data.map(course => {
          const newCourse = course;
          newCourse.category = catName.find(cat => cat.id === course.category_id).name;
          console.log(newCourse.category + '  new course');
          return newCourse;
        });
        setCatId(newCourses);
        console.log(newCourses + 'newCourses');
      }

      console.log(catName + 'catname');
      // categories.data.map(item => {
      //   if (item.id === category.id) {
      //     // setCatName(item.name);
      //     console.log(item.name + 'name cat course');
      //   }
      //
      //   console.log(item.name + 'catttt');
      // });
      setLoading(false);
    };
    fetchCategories();
  }, [category]);

  const handlePageChange = async pageNumber => {
    console.log(`active page is ${pageNumber}`);
    setPage(pageNumber);
    setLoading(true);
    const url = `http://127.0.0.1:8000/api/course/list/${pageNumber}`;
    const result = await axios.get(url);
    console.log(result.data + 'result');
    setCourses(result.data);
    setLoading(false);
  };

  // console.log(catId + 'catId');
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = category.slice(indexOfFirstPost, indexOfLastPost);

  // const getPagination = async (pageNumber = 1) => {};

  useEffect(() => {
    handlePageChange();
  }, []);

  // const renderCoursesList = () => {
  //   const { data, current_page, per_page, total } = courses;
  //   // const { data } = courses;
  //   return (
  //     <>
  //       <ul className={'list-group'}>
  //         {data.map(course => (
  //           <li className={'list-group-item'} key={course.id}>
  //             <Link to={`/course/${course.id}`}>{course.name}</Link>
  //           </li>
  //         ))}
  //       </ul>
  //       <div className={'mt-3'}>
  //         <Pagination
  //           activePage={current_page}
  //           totalItemsCount={total}
  //           itemsCountPerPage={per_page}
  //           onChange={pageNumber => handlePageChange(pageNumber)}
  //         />
  //         {current_page}
  //         {/*onChange={pageNumber => handlePageChange(pageNumber)}*/}
  //         {/*/>*/}
  //       </div>
  //     </>
  //   );
  // };

  //get all courses map function
  // const renderCourses = () => {
  //   return currentPosts.map((course, i) => {
  //     return (
  //       <div className="col-xl-3 col-lg-6 col-md-6 filter-item development business" key={i}>
  //         <div
  //           className="courses-one__single wow fadeInLeft"
  //           data-wow-delay="0ms"
  //           data-wow-duration="1000ms"
  //         >
  //           <div className="courses-one__single-img">
  //             <img src={'http://localhost:8000/uploads/' + course.image} alt={course.name} />
  //             <div className="overlay-text">
  //               <p>Featured</p>
  //             </div>
  //           </div>
  //           <div className="courses-one__single-content">
  //             <div className="courses-one__single-content-overlay-img">
  //               <img
  //                 src="../../assets/front-end//images/resources/courses-v1-overlay-img1.png"
  //                 alt={course.name}
  //               />
  //             </div>
  //             <h6 className="courses-one__single-content-name">
  //               {loading ? (
  //                 <div className="spinner-border text-primary" role="status">
  //                   <span className="sr-only">Loading...</span>
  //                 </div>
  //               ) : catName === undefined ? (
  //                 <div className="spinner-border text-primary" role="status">
  //                   <span className="sr-only">Loading...</span>
  //                 </div>
  //               ) : (
  //                 catName.map(item => {
  //                   if (item.id === course.category_id) {
  //                     return <Link to={`/all-courses/${course.category_id}`}>{item.name}</Link>;
  //                   }
  //                 })
  //               )}
  //             </h6>
  //             <h4 className="courses-one__single-content-title">
  //               <Link to={`/course/${course.id}`}>{course.name}</Link>
  //             </h4>
  //             <ul className="courses-one__single-content-courses-info list-unstyled" />
  //
  //             <p className="courses-one__single-content-price">
  //               {loading ? (
  //                 <div className="spinner-border text-primary" role="status">
  //                   <span className="sr-only">Loading...</span>
  //                 </div>
  //               ) : (
  //                 category.map(item => {
  //                   if (item.id === course.id) {
  //                     return <span key={item.id}>Year : {item.year}</span>;
  //                   }
  //                 })
  //               )}
  //             </p>
  //
  //             <ul className="courses-one__single-content-courses-info list-unstyled">
  //               <li>2 Lessons</li>
  //               <li>10 Hours</li>
  //               <li>Beginner</li>
  //             </ul>
  //           </div>
  //         </div>
  //       </div>
  //     );
  //   });
  // };

  return (
    <>
      <div className="page-wrapper">
        {loading && <Preloader />}
        <MainHeader />
        <section
          className="page-header clearfix "
          style={{
            backgroundImage:
              'https://gaviaspreview.com/wp/zilom/wp-content/uploads/2021/06/bg-3.jpg',
          }}
        >
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
                        <a href="/home">Home</a>
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
              className="course-filter-form select-filter-dropdow search-cols-4 mb-5"
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
            </form>

            <form className="course-filter-form select-filter-dropdow search-cols-4 mb-5">
              <div className="course-filter_search">
                <div className="content-inner">
                  <label className="title-field">Sorting</label>
                  <select id="product-filter" value={value} onChange={handleChange}>
                    <option style={{ background: 'white', color: 'black' }} value="Sort">
                      Sort
                    </option>
                    <option style={{ background: 'white', color: 'black' }} value="Low price">
                      Low price
                    </option>
                    <option style={{ background: 'white', color: 'black' }} value="High price">
                      High price
                    </option>
                  </select>
                  <i className="tutor-icon-arrow-down-1" />
                </div>
              </div>
            </form>

            <div className="row filter-layout masonary-layout">
              {loading && <Preloader />}
              {posts.length === 0 && (
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
              {/*{category.length > 0 && renderCourses()}*/}
              {/*{courses && renderCoursesList()}*/}
              {posts}

              <ReactPaginate
                previousLabel={'previous'}
                nextLabel={'next'}
                breakLabel={'...'}
                breakClassName={'break-me'}
                pageCount={pageCount}
                onPageChange={handlePageClick}
                containerClassName={'pagination'}
                subContainerClassName={'pages pagination'}
                activeClassName={'active'}
              />
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
};

export default CategoryCourses;
