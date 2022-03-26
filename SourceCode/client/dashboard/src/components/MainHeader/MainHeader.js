import react, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const MainHeader = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    const loggedUser = JSON.parse(localStorage.getItem('user'));
    setUser(loggedUser);
  }, []);
  return (
    <>
      <header className="main-header main-header--one  clearfix ">
        <div className="main-header--one__top clearfix ">
          <div className="container ">
            <div className="main-header--one__top-inner clearfix ">
              <div className="main-header--one__top-left">
                <div className="main-header--one__top-logo">
                  <Link to="/home">
                    <img src="../../assets/front-end/images/resources/logo-1.png" alt="" />
                  </Link>
                </div>
              </div>

              <div className="main-header--one__top-right clearfix ">
                <ul className="main-header--one__top-social-link list-unstyled clearfix">
                  <li>
                    <a href="#">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-pinterest-p"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </li>
                </ul>

                <div className="main-header--one__top-contact-info clearfix">
                  <ul className="main-header--one__top-contact-info-list list-unstyled ">
                    <li className="main-header--one__top-contact-info-list-item">
                      <div className="icon">
                        <span className="icon-phone-call-1" />
                      </div>
                      <div className="text">
                        <h6>Call Us</h6>
                        <p>
                          <a href="tel:123456789">962 777 685 126</a>
                        </p>
                      </div>
                    </li>
                    <li className="main-header--one__top-contact-info-list-item">
                      <div className="icon">
                        <span className="icon-message" />
                      </div>
                      <div className="text">
                        <h6>Contact Us</h6>
                        <p>
                          <a href="mailto:abdelkarim.aldeek@gmail.com">
                            abdelkarim.aldeek@gmail.com
                          </a>
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="main-header-one__bottom clearfix ">
          <div className="container">
            <div className="main-header-one__bottom-inner clearfix">
              <nav className="main-menu main-menu--1 fixed-top">
                <div className="main-menu__inner fixed-top">
                  <a href="#" className="mobile-nav__toggler">
                    <i className="fa fa-bars"></i>
                  </a>

                  <div className="left ">
                    <ul className="main-menu__list">
                      <li className="dropdown ">
                        <Link to="/home">Home</Link>
                      </li>
                      <li className="dropdown">
                        <Link to="/all-courses/">Courses</Link>
                      </li>
                    </ul>
                  </div>

                  <div className="right">
                    <div className="main-menu__right">
                      <div className="main-menu__right-login-register">
                        <ul className="list-unstyled">
                          {user ? (
                            <li className="main-menu__right-login-register-item">
                              <Link to="/profile">
                                <i className="fa fa-user"></i>
                                <span> Welcome, {user.first_name}</span>
                              </Link>
                            </li>
                          ) : (
                            <>
                              <li>
                                <Link to="/login">Login</Link>
                              </li>
                              <li>
                                <Link to="/register">Register</Link>
                              </li>
                            </>
                          )}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>

      <div className="stricky-header stricked-menu main-menu">
        <div className="sticky-header__content"></div>
      </div>
    </>
  );
};

export default MainHeader;
