import react from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper';
import { Link } from 'react-router-dom';
import React from 'react';

const Testimoneal = () => {
  const styles = {
    root: {
      maxWidth: 345,
    },
    swiper: {
      padding: '3rem',
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

  const reviews = [
    {
      id: 1,
      name: 'Александр Сергеевич',
      description:
        'Очень доволен работой компании и профессионализмом их сотрудников. Спасибо за профессионализм и оперативность в обработке заявок.',
    },
    {
      id: 2,
      name: 'Александр Сергеевич',
      description:
        'Очень доволен работой компании и профессионализмом их сотрудников. Спасибо за профессионализм и оперативность в обработке заявок.',
    },
  ];

  return (
    <>
      <section className="testimonials-one clearfix">
        <div className="auto-container">
          <div className="section-title text-center">
            <span className="section-title__tagline">Our Testimonials</span>
            <h2 className="section-title__title">What They Say?</h2>
          </div>
          <div className="row">
            <>
              <div className="swiper-container"></div>
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
                {reviews.map(course => (
                  <SwiperSlide key={course.id}>
                    <div className="col-12">
                      <div className="testimonials-one__wrapper">
                        <div className="testimonials-one__pattern">
                          <img
                            src="../../assets/front-end/pattern/testimonials-one-left-pattern.png"
                            alt=""
                          />
                        </div>
                        <div className="row">
                          <div className="col-12">
                            <div className="testimonials-one__carousel owl-carousel owl-theme owl-dot-type1 owl-loaded owl-drag">
                              <div className="owl-stage-outer">
                                <>
                                  <div
                                    className="testimonials-one__single wow fadeInUp animated"
                                    data-wow-delay="100ms"
                                    data-wow-duration="1500ms"
                                  >
                                    <div className="testimonials-one__single-inner">
                                      <h4 className="testimonials-one__single-title">
                                        Amazing Courses
                                      </h4>
                                      <p className="testimonials-one__single-text">
                                        Lorem ipsum is simply free text dolor sit amet, consectetur
                                        notted adipisicing elit sed do eiusmod tempor incididunt ut
                                        labore et dolore magna aliqua.
                                      </p>
                                      <div className="testimonials-one__single-client-info">
                                        <div className="testimonials-one__single-client-info-img">
                                          <img
                                            src="../../assets/front-end/images/testimonial/testimonials-v1-client-info-img2.png"
                                            alt=""
                                          />
                                        </div>
                                        <div className="testimonials-one__single-client-info-text">
                                          <h5>Christine Eve</h5>
                                          <p>Developer</p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </>
                              </div>
                              <div className="owl-nav disabled">
                                <button type="button" role="presentation" className="owl-prev">
                                  <span className="icon-right-arrow left"></span>
                                </button>
                                <button type="button" role="presentation" className="owl-next">
                                  <span className="icon-right-arrow"></span>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimoneal;
