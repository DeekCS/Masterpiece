import React, { useEffect } from "react";
import HeaderMob from "../../components/HeaderMob/HeaderMob";
import Header from "../../components/Header/Header";
import { useNavigate } from "react-router-dom";

const Admin = () => {
    const navigate = useNavigate();
    useEffect(() => {
        const isLoggedIn = JSON.parse(localStorage.getItem("user"));
        if (!isLoggedIn || isLoggedIn.is_admin !== 1) {
            navigate("/login");
        }
    }, []);

    return (
        <>
            <div className="">
                <div className="page-wrapper">
                    <HeaderMob />

                    <div className="page-container">
                        <Header />
                        <div className="main-content">
                            <div className="section__content section__content--p30">
                                <div className="container-fluid"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Admin;
