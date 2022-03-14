import React from "react";
import { Link } from "react-router-dom";

const AddItem = ({ title, name, path }) => {
    return (
        <div className="row">
            <div className="col-md-12">
                <div className="overview-wrap">
                    <h2 className="title-1">{title}</h2>
                    <Link
                        to={path}
                        className="au-btn au-btn-icon au-btn--blue text-decoration-none"
                    >
                        <i className="zmdi zmdi-plus"></i>
                        {name}
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default AddItem;
