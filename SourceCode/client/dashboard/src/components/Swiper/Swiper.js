import react, { useEffect } from 'react';

const Swiper = () => {
  useEffect(() => {
    const path = window.location.pathname;

    //reload once the page is loaded
    if (path === '/home') {
      // window.location.reload();
    }
  }, []);
  return (
    <section className="main-slider main-slider-one">
      <div
        className="swiper-container thm-swiper__slider"
        data-swiper-options='{"slidesPerView": 1, "loop": true, "effect": "fade", "pagination": {
        "el": "#main-slider-pagination",
        "type": "bullets",
        "clickable": true
        },
        "navigation": {
        "nextEl": "#main-slider__swiper-button-next",
        "prevEl": "#main-slider__swiper-button-prev"
        },
        "autoplay": {
        "delay": 7000
        }}'
      >
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <div className="shape1">
              <img src="../../assets/front-end/images/shapes/slider-v1-shape1.png" alt="" />
            </div>
            <div className="shape2">
              <img src="../../assets/front-end/images/shapes/slider-v1-shape2.png" alt="" />
            </div>
            {/*<div*/}
            {/*  className="image-layer"*/}
            {/*  style={{ backgroundImage: 'assets/images/backgrounds/main-slider-v1-1.jpg' }}*/}
            {/*/>*/}

            <div className="container">
              <div className="main-slider__content">
                <div className="main-slider__content-icon-one">
                  <span className="icon-lamp" />
                </div>
                <div className="main-slider__content-icon-two">
                  <span className="icon-human-resources" />
                </div>
                <div className="main-slider-one__round-box">
                  <div className="main-slider-one__round-box-inner">
                    <p>
                      Professional <br />
                      teachers
                    </p>
                    <div className="icon">
                      <i className="fas fa-sort-up" />
                    </div>
                  </div>
                </div>
                <div className="main-slider__content-tagline">
                  <h2>Ready to learn?</h2>
                </div>
                <h2 className="main-slider__content-title">
                  Learn new <br />
                  things daily
                </h2>
                <p className="main-slider__content-text">
                  Get free access to 6800+ different courses from
                  <br /> 680 professional teachers
                </p>
                <div className="main-slider__content-btn">
                  <a href="#" className="thm-btn">
                    Discover more
                  </a>
                </div>
                <div className="main-slider-one__img">
                  <img
                    src="https://img.freepik.com/free-vector/online-learning-process-remote-selfeducation-realistic-laptop-with-educational-program-screen_451939-65.jpg?w=1060"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="swiper-slide">
            <div className="shape1">
              <img src="../../assets/front-end/images/shapes/slider-v1-shape1.png" alt="" />
            </div>
            <div className="shape2">
              <img src="../../assets/front-end/images/shapes/slider-v1-shape2.png" alt="" />
            </div>
            {/*<div*/}
            {/*  className="image-layer"*/}
            {/*  style={{ backgroundImage: 'assets/images/backgrounds/main-slider-v1-1.jpg' }}*/}
            {/*/>*/}

            <div className="container">
              <div className="main-slider__content">
                <div className="main-slider__content-icon-one">
                  <span className="icon-lamp" />
                </div>
                <div className="main-slider__content-icon-two">
                  <span className="icon-human-resources" />
                </div>
                <div className="main-slider-one__round-box">
                  <div className="main-slider-one__round-box-inner">
                    <p>
                      Professional <br />
                      teachers
                    </p>
                    <div className="icon">
                      <i className="fas fa-sort-up" />
                    </div>
                  </div>
                </div>
                <div className="main-slider__content-tagline">
                  <h2>Ready to learn?</h2>
                </div>
                <h2 className="main-slider__content-title">
                  Learn new <br />
                  things daily
                </h2>
                <p className="main-slider__content-text">
                  Get free access to 6800+ different courses from
                  <br /> 680 professional teachers
                </p>
                <div className="main-slider__content-btn">
                  <a href="#" className="thm-btn">
                    Discover more
                  </a>
                </div>
                <div className="main-slider-one__img">
                  <img
                    src="https://img.freepik.com/free-vector/flat-design-learn-from-home-illustration_23-2149245116.jpg?w=740"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="swiper-slide">
            <div className="shape1">
              <img src="../../assets/front-end/images/shapes/slider-v1-shape1.png" alt="" />
            </div>
            <div className="shape2">
              <img src="../../assets/front-end/images/shapes/slider-v1-shape2.png" alt="" />
            </div>
            <div
              className="image-layer"
              style={{
                backgroundImage: '../../assets/front-end/images/backgrounds/main-slider-v1-1.jpg',
              }}
            />

            <div className="container">
              <div className="main-slider__content">
                <div className="main-slider__content-icon-one">
                  <span className="icon-lamp" />
                </div>
                <div className="main-slider__content-icon-two">
                  <span className="icon-human-resources" />
                </div>
                <div className="main-slider-one__round-box">
                  <div className="main-slider-one__round-box-inner">
                    <p>
                      Professional <br />
                      teachers
                    </p>
                    <div className="icon">
                      <i className="fas fa-sort-up" />
                    </div>
                  </div>
                </div>
                <div className="main-slider__content-tagline">
                  <h2>Ready to learn?</h2>
                </div>
                <h2 className="main-slider__content-title">
                  Learn new <br />
                  things daily
                </h2>
                <p className="main-slider__content-text">
                  Get free access to 6800+ different courses from
                  <br /> 680 professional teachers
                </p>
                <div className="main-slider__content-btn">
                  <a href="#" className="thm-btn">
                    Discover more
                  </a>
                </div>
                <div className="main-slider-one__img">
                  <img
                    src="https://img.freepik.com/free-vector/kids-taking-online-lessons_23-2148505029.jpg?w=740"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="swiper-pagination" id="main-slider-pagination" />
        <div className="main-slider__nav">
          <div className="swiper-button-prev" id="main-slider__swiper-button-next">
            <span className="icon-left" />
          </div>
          <div className="swiper-button-next" id="main-slider__swiper-button-prev">
            <span className="icon-right" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Swiper;
