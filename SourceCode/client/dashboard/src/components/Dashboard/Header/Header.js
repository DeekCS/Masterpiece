import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.clear();
        navigate("/login");
    };
    return (
        <>
            <header className="header-desktop">
                <div className="section__content section__content--p30">
                    <div className="container-fluid">
                        <div className="header-wrap">
                            <form
                                className="form-header"
                                action=""
                                method="POST"
                            >
                                <input
                                    className="au-input au-input--xl"
                                    type="text"
                                    name="search"
                                    placeholder="Search for datas &amp; reports..."
                                />
                                <button
                                    className="au-btn--submit"
                                    type="submit"
                                >
                                    <i className="zmdi zmdi-search"></i>
                                </button>
                            </form>
                            <button
                                className="btn btn-danger"
                                onClick={handleLogout}
                            >
                                Logout
                            </button>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;
