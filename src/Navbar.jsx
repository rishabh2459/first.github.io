import React from "react";
import { NavLink } from "react-router-dom";
import web from "../src/Images/log.jpg";

const Navbar = () => {
    return (
        <>
            <div className="container-fluid nav_bg ">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <nav className="navbar navbar-expand-xl navbar-light .bg-white fs-4">
                            <div className="container-fluid ">
                                
                            <div class="position-absolute top-0 start-0">
                                <NavLink className="navbar-brand text-primary" to="/">
                                <img src={web} alt="" width="80" height="70" />                                 
                                </NavLink>
                            </div>  
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                        <li className="nav-item">
                                            <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className="nav-link" to="/Services">Fitness and Exercise</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className="nav-link" to="/About">About</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className="nav-link" to="/Contact">Contact</NavLink>
                                        </li>
                                      
                                        
                                    </ul>
                                   
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;