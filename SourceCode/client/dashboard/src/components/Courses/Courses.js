import React, { useEffect, useState } from 'react';
// import './swiper.style.scss';
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import { Link, useParams } from 'react-router-dom';
import Button from '@mui/material/Button';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import swal from 'sweetalert';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import axios from 'axios';

const styles = {
  root: {
    maxWidth: 345,
  },
  swiper: {
    padding: '3rem',
    backgroundColor: '#fff',
  },
  media: {
    //contain
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundColor: '#fff',
  },
  section: {
    backgroundColor: '#fff',
  },
  btn: {
    //awesome button like material ui
    backgroundColor: '#00bcd4',
    color: '#fff',
    '&:hover': {
      backgroundColor: '#00acc1',
      padding: '0.5rem',
      margin: '0.5rem',
      borderRadius: '0.5rem',
      fontSize: '1rem',
      fontWeight: 'bold',
    },

    // width: '100%',
  },
};

const Courses = () => {
  const { id } = useParams();
  const [category, setCategory] = useState([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState(false);

  const [catName, setCatName] = useState('');

  useEffect(() => {
    setLoading(true);
    // console.log(year);
    fetchData().then(r => {
      setLoading(false);
    });
  }, [id]);

  const handleChange = e => {
    setCategory(e.target.value);
  };
  const fetchData = async () => {
    try {
      // setLoading(true);
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

  //courses/category/{id}
  // useEffect(() => {
  //     const fetchData = async (id) => {
  //     try {
  //       const result = await axios.get(
  //         `http://127.0.0.1:8000/api/courses/category/${id}`
  //       );
  //       setCourses(result.data);
  //       setLoading(false);
  //       console.log(result.data);
  //     } catch (er) {
  //       setError(er.message);
  //       setLoading(false);
  //     }
  //   };
  //   fetchData(category).then(r => console.log(r));
  // }, [category]);

  return (
    <>
      <div className="swiper-container">
        <div className="section-title text-center mt-3">
          <span className="section-title__tagline">Checkout New List</span>
          <h2 className="section-title__title">Explore Featured Courses</h2>
        </div>
      </div>
      <Swiper
        className="swiper-container"
        style={styles.swiper}
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        pagination={{ clickable: true }}
        loop
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={swiper => console.log(swiper)}
        breakpoints={{
          // when window width is >= 320px
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          // when window width is >= 480px
          480: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          // when window width is >= 640px
          640: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          // when window width is >= 768px
          768: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          // when window width is >= 1024px
          1024: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
        }}
        autoplay={{
          delay: 200,
          disableOnInteraction: false,
        }}
      >
        {category.map(course => (
          <SwiperSlide key={course.id}>
            <div className="col-lg-12 filter-item development business">
              <div
                className="courses-one__single wow fadeInLeft"
                data-wow-delay="0ms"
                data-wow-duration="1000ms"
              >
                <div className="courses-one__single-img">
                  <img
                    src={'http://localhost:8000/uploads/' + course.image}
                    alt={course.name}
                    style={styles.media}
                  />
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
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Courses;
