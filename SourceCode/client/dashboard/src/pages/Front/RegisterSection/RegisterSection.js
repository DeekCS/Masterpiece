import react, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
import React from 'react';

const RegisterSection = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    password2: '',
  });
  const { first_name, last_name, email, password, password2 } = user;

  const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });
  const onSubmit = async e => {
    e.preventDefault();

    if (
      first_name === '' ||
      last_name === '' ||
      email === '' ||
      password === '' ||
      password2 === ''
    ) {
      await Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'All fields are required',
      });

      return;
    }
    const response = await axios.get(`http://127.0.0.1:8000/api/users/check/${email}`);

    console.log(response.data.message);
    if (response.data.message === 'Email already registered') {
      await Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Email already registered',
      });
    } else if (password !== password2) {
      await Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Password does not match',
      });
    } else {
      const res = await axios.post('http://127.0.0.1:8000/api/users/', user);
      // const {first_name,last_name,email,password,password2} = user;
      //handle for login after register
      // localStorage.setItem('token',res.data.token);
      localStorage.setItem('user', JSON.stringify(res.data.user));
      try {
        await Swal.fire({
          icon: 'success',
          title: 'Success',
          text: res.data.message,
        });

        navigate('/all-courses');
      } catch (e) {
        console.log(e);
      }
    }
  };
  return (
    <section
      className="registration-one jarallax"
      data-jarallax=""
      data-speed="0.2"
      data-imgposition="50% 0%"
    >
      <div className="registration-one__bg"></div>
      <div className="container">
        <div className="row">
          <div className="col-xl-7 col-lg-7">
            <div className="registration-one__left">
              <div className="section-title">
                <span className="section-title__tagline">Get Free Registration</span>
                <h2 className="section-title__title">
                  Register your Account
                  <br /> Get free Access to{' '}
                  <span className="odometer odometer-auto-theme" data-count="66000">
                    <div className="odometer-inside">
                      <span className="odometer-digit">
                        <span className="odometer-digit-spacer">8</span>
                        <span className="odometer-digit-inner">
                          <span className="odometer-ribbon">
                            <span className="odometer-ribbon-inner">
                              <span className="odometer-value">6</span>
                            </span>
                          </span>
                        </span>
                      </span>
                      <span className="odometer-digit">
                        <span className="odometer-digit-spacer">8</span>
                        <span className="odometer-digit-inner">
                          <span className="odometer-ribbon">
                            <span className="odometer-ribbon-inner">
                              <span className="odometer-value">6</span>
                            </span>
                          </span>
                        </span>
                      </span>
                      <span className="odometer-formatting-mark">,</span>
                      <span className="odometer-digit">
                        <span className="odometer-digit-spacer">8</span>
                        <span className="odometer-digit-inner">
                          <span className="odometer-ribbon">
                            <span className="odometer-ribbon-inner">
                              <span className="odometer-value">0</span>
                            </span>
                          </span>
                        </span>
                      </span>
                      <span className="odometer-digit">
                        <span className="odometer-digit-spacer">8</span>
                        <span className="odometer-digit-inner">
                          <span className="odometer-ribbon">
                            <span className="odometer-ribbon-inner">
                              <span className="odometer-value">0</span>
                            </span>
                          </span>
                        </span>
                      </span>
                      <span className="odometer-digit">
                        <span className="odometer-digit-spacer">8</span>
                        <span className="odometer-digit-inner">
                          <span className="odometer-ribbon">
                            <span className="odometer-ribbon-inner">
                              <span className="odometer-value">0</span>
                            </span>
                          </span>
                        </span>
                      </span>
                    </div>
                  </span>
                  <br />
                  Online Courses
                </h2>
              </div>
              <p className="registration-one__left-text">
                There are many variations of passages of lorem ipsum available but the majority have
                suffered alteration in some form.
              </p>
              <div className="registration-one__left-transform-box">
                <div className="registration-one__left-transform-box-icon">
                  <span className="icon-online-course"></span>
                </div>
                <div className="registration-one__left-transform-box-text">
                  <h3>
                    <a href="#">Transform Access To Education</a>
                  </h3>
                  <p>
                    Discover creative projects limited editions of 100 <br />
                    from artists, designers, and more.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-5 col-lg-5">
            <div
              className="registration-one__right wow slideInRight animated"
              data-wow-delay="100ms"
              data-wow-duration="2500ms"
            >
              <div className="registration-one__right-form">
                <div className="title-box">
                  <h4>Fill your Registration</h4>
                </div>
                <div className="form-box">
                  <form method="post" onSubmit={onSubmit}>
                    <div className="form-group">
                      <input
                        className="au-input au-input--full"
                        type="text"
                        name="first_name"
                        value={first_name}
                        onChange={e => onChange(e)}
                        placeholder="Your First Name"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        className="au-input au-input--full"
                        type="text"
                        name="last_name"
                        value={last_name}
                        onChange={e => onChange(e)}
                        placeholder="Your Last Name"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        className="au-input au-input--full"
                        type="email"
                        name="email"
                        value={email}
                        onChange={e => onChange(e)}
                        placeholder="Email Address"
                      />{' '}
                    </div>
                    <div className="form-group">
                      <input
                        className="au-input au-input--full"
                        type="password"
                        name="password"
                        value={password}
                        onChange={e => onChange(e)}
                        placeholder="Password"
                      />{' '}
                    </div>
                    <div className="form-group">
                      <input
                        className="au-input au-input--full"
                        type="password"
                        name="password2"
                        value={password2}
                        onChange={e => onChange(e)}
                        placeholder="Confirm Password"
                      />
                    </div>
                    <button
                      className="registration-one__right-form-btn"
                      type="submit"
                      name="submit-form"
                    >
                      <span className="thm-btn">apply for it</span>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegisterSection;
