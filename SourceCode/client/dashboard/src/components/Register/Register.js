import react from 'react';
import './Register.css';
const RegisterHome = () => {
  return (
    <>
      <div className={'page-wrapper'}>
        <div id="wp-main-content" className="clearfix main-page">
          <div className="custom-breadcrumb text-light text-left show-bg">
            <div className="breadcrumb-overlay" />
            <div className="breadcrumb-main">
              <div className="container">
                <div className="breadcrumb-container-inner">
                  <h2 className="heading-title">Instructor Registration</h2>
                  <ol className="breadcrumb">
                    <li>
                      <a href="https://gaviaspreview.com/wp/zilom">Home</a>
                    </li>
                    <li className="active">Instructor Registration</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
          <div className="container-layout-content container">
            <div className="content-page-wrap">
              <div className="main-page-content base-layout has-no-sidebar">
                <div className="content-page clearfix">
                  <div className="content-page-inner">
                    <div
                      className="clearfix post-866 page type-page status-publish hentry"
                      id="866"
                    >
                      <h1 className="title">Instructor Registration</h1>
                      <div className="z-register-form">
                        <div className="row no-margin">
                          <div className="col-12 col-md-5 register-content-left">
                            <span className="img-register">
                              <img
                                src="https://gaviaspreview.com/wp/zilom/wp-content/themes/zilom/images/register.png"
                                alt="register"
                              />
                            </span>
                            <div className="content-inner">
                              <div className="quick-login">
                                <span className="text">Already a member</span>
                                <a
                                  className="btn-theme btn-small login-link"
                                  href="#"
                                  data-toggle="modal"
                                  data-target="#form-ajax-login-popup"
                                >
                                  Login <span className="btn-hover-effect" />
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="register-form-content col-12 col-md-7">
                            <h2 className="form-title">Create a free account</h2>
                            <div className="form-des">
                              A few clicks away from creating your account.
                            </div>
                            <div className="form-links">
                              <a href="https://gaviaspreview.com/wp/zilom/student-registration/">
                                Student
                              </a>
                              <a className="active">Instructor</a>
                            </div>
                            {/*<form method="post" encType="multipart/form-data">*/}
                            {/*  <input type="hidden" id="_tutor_nonce" name="_tutor_nonce" />*/}
                            {/*  <input type="hidden" name="_wp_http_referer">*/}
                            {/*    <input*/}
                            {/*      type="hidden"*/}
                            {/*      value="tutor_register_instructor"*/}
                            {/*      name="tutor_action"*/}
                            {/*    />*/}
                            {/*    <div className="tutor-form-row">*/}
                            {/*      <div className="tutor-form-col-6">*/}
                            {/*        <div className="tutor-form-group">*/}
                            {/*          <label>First Name </label>*/}
                            {/*          <input*/}
                            {/*            type="text"*/}
                            {/*            name="first_name"*/}
                            {/*            value=""*/}
                            {/*            placeholder="First Name"*/}
                            {/*            required=""*/}
                            {/*            autoComplete="given-name"*/}
                            {/*          />*/}
                            {/*        </div>*/}
                            {/*      </div>*/}
                            {/*      <div className="tutor-form-col-6">*/}
                            {/*        <div className="tutor-form-group">*/}
                            {/*          <label>Last Name</label>*/}
                            {/*          <input*/}
                            {/*            type="text"*/}
                            {/*            name="last_name"*/}
                            {/*            value=""*/}
                            {/*            placeholder="Last Name"*/}
                            {/*            required=""*/}
                            {/*            autoComplete="family-name"*/}
                            {/*          />*/}
                            {/*        </div>*/}
                            {/*      </div>*/}
                            {/*    </div>*/}
                            {/*    <div className="tutor-form-row">*/}
                            {/*      <div className="tutor-form-col-6">*/}
                            {/*        <div className="tutor-form-group">*/}
                            {/*          <label>User Name</label>*/}
                            {/*          <input*/}
                            {/*            type="text"*/}
                            {/*            name="user_login"*/}
                            {/*            className="tutor_user_name"*/}
                            {/*            value=""*/}
                            {/*            placeholder="User Name"*/}
                            {/*            required=""*/}
                            {/*            autoComplete="username"*/}
                            {/*          />*/}
                            {/*        </div>*/}
                            {/*      </div>*/}
                            {/*      <div className="tutor-form-col-6">*/}
                            {/*        <div className="tutor-form-group">*/}
                            {/*          <label>E-Mail</label>*/}
                            {/*          <input*/}
                            {/*            type="text"*/}
                            {/*            name="email"*/}
                            {/*            value=""*/}
                            {/*            placeholder="E-Mail"*/}
                            {/*            required=""*/}
                            {/*            autoComplete="email"*/}
                            {/*          />*/}
                            {/*        </div>*/}
                            {/*      </div>*/}
                            {/*    </div>*/}
                            {/*    <div className="tutor-form-row">*/}
                            {/*      <div className="tutor-form-col-6">*/}
                            {/*        <div className="tutor-form-group">*/}
                            {/*          <label>Password</label>*/}
                            {/*          <input*/}
                            {/*            type="password"*/}
                            {/*            name="password"*/}
                            {/*            value=""*/}
                            {/*            placeholder="Password"*/}
                            {/*            required=""*/}
                            {/*            autoComplete="new-password"*/}
                            {/*            aria-autocomplete="list"*/}
                            {/*          />*/}
                            {/*        </div>*/}
                            {/*      </div>*/}
                            {/*      <div className="tutor-form-col-6">*/}
                            {/*        <div className="tutor-form-group">*/}
                            {/*          <label>Password confirmation</label>*/}
                            {/*          <input*/}
                            {/*            type="password"*/}
                            {/*            name="password_confirmation"*/}
                            {/*            value=""*/}
                            {/*            placeholder="Password Confirmation"*/}
                            {/*            required=""*/}
                            {/*            autoComplete="new-password"*/}
                            {/*          />*/}
                            {/*        </div>*/}
                            {/*      </div>*/}
                            {/*    </div>*/}
                            {/*    <div className="tutor-form-row">*/}
                            {/*      <div className="tutor-form-col-12">*/}
                            {/*        <div className="tutor-form-group">*/}
                            {/*          <div id="nsl-custom-login-form-1">*/}
                            {/*            <div*/}
                            {/*              className="nsl-container nsl-container-block"*/}
                            {/*              data-align="left"*/}
                            {/*            >*/}
                            {/*              <div className="nsl-container-buttons">*/}
                            {/*                <a*/}
                            {/*                  href="https://gaviaspreview.com/wp/zilom/wp-login.php?loginSocial=google&amp;redirect=https%3A%2F%2Fgaviaspreview.com%2Fwp%2Fzilom%2Finstructor-registration%2F"*/}
                            {/*                  rel="nofollow"*/}
                            {/*                  aria-label="Continue with <b>Google</b>"*/}
                            {/*                  data-plugin="nsl"*/}
                            {/*                  data-action="connect"*/}
                            {/*                  data-provider="google"*/}
                            {/*                  data-popupwidth="600"*/}
                            {/*                  data-popupheight="600"*/}
                            {/*                >*/}
                            {/*                  <div*/}
                            {/*                    className="nsl-button nsl-button-default nsl-button-google"*/}
                            {/*                    data-skin="dark"*/}
                            {/*                  >*/}
                            {/*                    <div className="nsl-button-svg-container">*/}
                            {/*                      <svg*/}
                            {/*                        xmlns="http://www.w3.org/2000/svg"*/}
                            {/*                        viewBox="0 0 24 24"*/}
                            {/*                      >*/}
                            {/*                        <path*/}
                            {/*                          fill="#4285F4"*/}
                            {/*                          d="M20.64 12.2045c0-.6381-.0573-1.2518-.1636-1.8409H12v3.4814h4.8436c-.2086 1.125-.8427 2.0782-1.7959 2.7164v2.2581h2.9087c1.7018-1.5668 2.6836-3.874 2.6836-6.615z"*/}
                            {/*                        />*/}
                            {/*                        <path*/}
                            {/*                          fill="#34A853"*/}
                            {/*                          d="M12 21c2.43 0 4.4673-.806 5.9564-2.1805l-2.9087-2.2581c-.8059.54-1.8368.859-3.0477.859-2.344 0-4.3282-1.5831-5.036-3.7104H3.9574v2.3318C5.4382 18.9832 8.4818 21 12 21z"*/}
                            {/*                        />*/}
                            {/*                        <path*/}
                            {/*                          fill="#FBBC05"*/}
                            {/*                          d="M6.964 13.71c-.18-.54-.2822-1.1168-.2822-1.71s.1023-1.17.2823-1.71V7.9582H3.9573A8.9965 8.9965 0 0 0 3 12c0 1.4523.3477 2.8268.9573 4.0418L6.964 13.71z"*/}
                            {/*                        />*/}
                            {/*                        <path*/}
                            {/*                          fill="#EA4335"*/}
                            {/*                          d="M12 6.5795c1.3214 0 2.5077.4541 3.4405 1.346l2.5813-2.5814C16.4632 3.8918 14.426 3 12 3 8.4818 3 5.4382 5.0168 3.9573 7.9582L6.964 10.29C7.6718 8.1627 9.6559 6.5795 12 6.5795z"*/}
                            {/*                        />*/}
                            {/*                      </svg>*/}
                            {/*                    </div>*/}
                            {/*                    <div className="nsl-button-label-container">*/}
                            {/*                      Continue with <b>Google</b>*/}
                            {/*                    </div>*/}
                            {/*                  </div>*/}
                            {/*                </a>*/}
                            {/*              </div>*/}
                            {/*            </div>*/}
                            {/*          </div>*/}
                            {/*        </div>*/}
                            {/*      </div>*/}
                            {/*    </div>*/}
                            {/*    <div className="tutor-form-row">*/}
                            {/*      <div className="tutor-form-col-12">*/}
                            {/*        <div className="tutor-form-group tutor-reg-form-btn-wrap">*/}
                            {/*          <button*/}
                            {/*            type="submit"*/}
                            {/*            name="tutor_register_instructor_btn"*/}
                            {/*            value="register"*/}
                            {/*            className="tutor-button"*/}
                            {/*          >*/}
                            {/*            Register as instructor*/}
                            {/*          </button>*/}
                            {/*        </div>*/}
                            {/*      </div>*/}
                            {/*    </div>*/}
                            {/*  </input>*/}
                            {/*</form>*/}
                          </div>
                        </div>
                      </div>
                      <div className="link-pages" />
                      <div className="comment-page-wrapper clearfix" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterHome;
