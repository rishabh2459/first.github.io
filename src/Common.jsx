import React from "react";
import { NavLink } from "react-router-dom";

const Common = (props) => {
    return (
        <>
            <section id="header" className="row d-flex justify-content-center">
                <div className="container-fluid ">
                    <div className="row .bg-white">
                        <div className="col-10 mx-auto"></div>
                        <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                            <h1>
                            {props.name}    
                                <strong className="brand-name text-success"> Lets Do IT </strong>
                            </h1>
                            <h4 className="my-3">
                            <p>
                            We are the team of well trained and motivated body shaper.
                            </p>
                            <p> Our aim is to fit maximum people.</p>
                            </h4>
                            <div className="mt-3">
                                <NavLink to={props.visit} className="btn btn-outline-secondary">
                                    {props.btname}
                                </NavLink>
                            </div>
                        </div>
                        <div className="col-lg-6 order-1 order-lg-2 header-img">
                            <img src={props.imgsrc} className=".bg-light img-fluid animated " alt="home img" />
                        </div>
                    </div>
                </div>

            </section>
        </>
    );

};

export default Common;
