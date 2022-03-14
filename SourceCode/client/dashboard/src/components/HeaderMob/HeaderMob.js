import React from "react";
import { Link } from "react-router-dom";

const HeaderMob = () => {
    return (
        <>
            <header className="header-mobile d-block d-lg-none">
                <div className="header-mobile__bar">
                    <div className="container-fluid">
                        <div className="header-mobile-inner">
                            <a className="logo" href="index.html">
                                <img
                                    src="assets/images/icon/logo.png"
                                    alt="CoolAdmin"
                                />
                            </a>
                            <button
                                className="hamburger hamburger--slider"
                                type="button"
                            >
                                <span className="hamburger-box">
                                    <span className="hamburger-inner"></span>
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
                <nav className="navbar-mobile">
                    <div className="container-fluid">
                        <ul className="navbar-mobile__list list-unstyled">
                            <li className="has-sub">
                                <Link
                                    className="js-arrow text-decoration-none"
                                    to="/"
                                >
                                    <i className="fas fa-tachometer-alt"></i>
                                    Dashboard
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>

            <aside className="menu-sidebar d-none d-lg-block">
                <div className="logo">
                    <a href="#">
                        <img
                            src="./assets/images/icon/logo.png"
                            alt="Cool Admin"
                        />
                    </a>
                </div>
                <div className="menu-sidebar__content js-scrollbar1">
                    <nav className="navbar-sidebar">
                        <ul className="list-unstyled navbar__list">
                            {" "}
                            <li className="has-sub">
                                <Link
                                    className="js-arrow text-decoration-none"
                                    to="/"
                                >
                                    <i className="fas fa-tachometer-alt"></i>
                                    Dashboard
                                </Link>
                            </li>
                            <li>
                                <Link to="/users">
                                    <i className="fas fa-chart-bar text-decoration-none " />
                                    Users
                                </Link>
                            </li>
                            <li>
                                <Link to="/categories">
                                    <i className="fas fa-chart-bar text-decoration-none " />
                                    Categories
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </aside>
        </>
    );
};

export default HeaderMob;
