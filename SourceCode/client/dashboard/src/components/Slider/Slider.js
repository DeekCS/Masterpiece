import React, { useEffect, useState } from 'react';
import './swiper.style.scss';
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
  },
  media: {
    height: 140,
    backgroundSize: 'contain',
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
const Slider = () => {
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
  return (
    <>
      <div className="title-section ">
        <h2 className="">Featured Courses</h2>
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
        {category.map(item => (
          <SwiperSlide key={item.id}>
            <Card>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Contemplative Reptile"
                  style={styles.media}
                  image={'http://localhost:8000/uploads/' + item.image}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    <Link to={`/course/${item.id}`}>{item.name}</Link>
                  </Typography>
                </CardContent>
              </CardActionArea>
              {/*<CardActions>*/}
              {/*  <Link style={styles.btn} to={`/course/${item.id}`}>*/}
              {/*    View Product*/}
              {/*  </Link>*/}
              {/*</CardActions>*/}
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
export default Slider;
