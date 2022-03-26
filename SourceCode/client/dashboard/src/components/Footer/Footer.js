import react from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer-one">
      <div className="footer-one__bg" />
      <div className="footer-one__top">
        <div className="container">
          <div className="row">
            <div className="col-xl-2 col-lg-4 col-md-4 wow animated fadeInUp" data-wow-delay="0.1s">
              <div className="footer-widget__column footer-widget__about">
                <div className="footer-widget__about-logo">
                  <Link to="/">
                    <img src="../../assets/front-end/images/resources/footer-logo.png" alt="" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-xl-2 col-lg-4 col-md-4 wow animated fadeInUp" data-wow-delay="0.3s">
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

            <div className="col-xl-2 col-lg-4 col-md-4 wow animated fadeInUp" data-wow-delay="0.5s">
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

            <div className="col-xl-3 col-lg-6 col-md-6 wow animated fadeInUp" data-wow-delay="0.7s">
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

            <div className="col-xl-3 col-lg-6 col-md-6 wow animated fadeInUp" data-wow-delay="0.9s">
              <div className="footer-widget__column footer-widget__social-links">
                <ul className="footer-widget__social-links-list list-unstyled clearfix">
                  <li>
                    <a href="#">
                      <i className="fab fa-facebook" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-instagram" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-dribbble" />
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
  );
};

export default Footer;
