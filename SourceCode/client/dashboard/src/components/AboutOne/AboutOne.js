import React from 'react';

const AboutOne = () => {
  return (
    <>
      <section className="about-one clearfix">
        <div className="container">
          <div className="row">
            <div className="col-xl-6">
              <div className="about-one__left">
                <ul className="about-one__left-img-box list-unstyled clearfix">
                  <li className="about-one__left-single">
                    <div className="about-one__left-img1">
                      <img src="../../assets/front-end/images/about/about-v1-img1.jpg" alt="" />
                    </div>
                  </li>
                  <li className="about-one__left-single">
                    <div className="about-one__left-img2">
                      <img src=".../../assets/front-end/images/about/about-v1-img2.jpg" alt="" />
                    </div>
                  </li>
                </ul>
                <div className="about-one__left-overlay">
                  <div className="icon">
                    <span className="icon-relationship" />
                  </div>
                  <div className="title">
                    <h6>
                      Trusted by
                      <br />
                      <span className="odometer" data-count="8800">
                        00
                      </span>{' '}
                      customers
                    </h6>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-6">
              <div className="about-one__right">
                <div className="section-title">
                  <span className="section-title__tagline">About Zilom Company</span>
                  <h2 className="section-title__title">
                    Welcome to the Online <br />
                    Learning Center
                  </h2>
                </div>
                <div className="about-one__right-inner">
                  <p className="about-one__right-text">
                    There are many variations of passages of lorem ipsum available but the majority
                    have suffered alteration in some form by injected humour or randomised words
                    which don't look.
                  </p>
                  <ul className="about-one__right-list list-unstyled">
                    <li className="about-one__right-list-item">
                      <div className="icon">
                        <span className="icon-confirmation" />
                      </div>
                      <div className="text">
                        <p>Get unlimited access to 66000+ of our top courses</p>
                      </div>
                    </li>

                    <li className="about-one__right-list-item">
                      <div className="icon">
                        <span className="icon-confirmation" />
                      </div>
                      <div className="text">
                        <p>Explore a variety of fresh educational topics</p>
                      </div>
                    </li>

                    <li className="about-one__right-list-item">
                      <div className="icon">
                        <span className="icon-confirmation" />
                      </div>
                      <div className="text">
                        <p>Find the best qualitfied teacher for you</p>
                      </div>
                    </li>
                  </ul>

                  <div className="about-one__btn">
                    <a href="about.html" className="thm-btn">
                      view all courses
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutOne;
