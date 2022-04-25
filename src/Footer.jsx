import React from "react";
import web1 from "../src/Images/chest.gif";
import web2 from "../src/Images/back.gif";
import web3 from "../src/Images/bisecps.gif";
import web4 from "../src/Images/triseps.gif";
import web5 from "../src/Images/shoulder.gif";
import web6 from "../src/Images/legs.gif";
import { NavLink } from "react-router-dom";

const Footer = () => {
    return (
        <>
        <br/>
        <br/>
            <div className="row gy-5 footer footer-expand-xl">
                <div className="col-lg-2 col-md-12 mb-4 mb-md-0">
                    <div
                        className="bg-image hover-overlay ripple shadow-1-strong rounded"
                        data-ripple-color="light"
                    >
                        <div className="text-center">
                        <img
                            src={web1}
                            className="w-100"
                            alt="..."
                        />         
                        <a href="https://www.youtube.com/watch?v=65sJFUtJ1BU" className="text-reset "><strong>Chest</strong></a>
                        </div>     
                    </div>
                </div>
                <div className="col-lg-2 col-md-12 mb-4 mb-md-0">
                    <div
                        className="bg-image hover-overlay ripple shadow-1-strong rounded"
                        data-ripple-color="light"
                    >
                        <div className="text-center">
                        <img
                            src={web2}
                            className="w-100"
                            alt="..."
                        />
                        <a href="https://www.youtube.com/watch?v=EZe2uJTHeHI" className="text-reset "><strong>Back</strong></a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-2 col-md-12 mb-4 mb-md-0">
                    <div
                        className="bg-image hover-overlay ripple shadow-1-strong rounded text-center"
                        data-ripple-color="light"
                    >
                        <img
                            src={web3}
                            className="w-100"
                            alt="..."
                        />
                        <a href="https://www.youtube.com/watch?v=mqfzsbV0lUs" className="text-reset "><strong>Bisecps</strong></a>
                    </div>
                </div>
                <div className="col-lg-2 col-md-12 mb-4 mb-md-0">
                    <div
                        className="bg-image hover-overlay ripple shadow-1-strong rounded text-center"
                        data-ripple-color="light"
                    >
                        <img
                            src={web4}
                            className="w-100"
                            alt="..."
                        />
                        <a href="https://www.youtube.com/watch?v=ztvYapM5O4Y" className="text-reset "><strong>Trisecps</strong></a>
                    </div>
                </div>
                <div className="col-lg-2 col-md-12 mb-4 mb-md-0">
                    <div
                        className="bg-image hover-overlay ripple shadow-1-strong rounded text-center"
                        data-ripple-color="light"
                    >
                        <img
                            src={web5}
                            className="w-100"
                            alt="..."
                        />
                        <a href="https://www.youtube.com/watch?v=Vk3Q8WvUwf4" className="text-reset "><strong>Shoulder</strong></a>
                    </div>
                </div>
                <div className="col-lg-2 col-md-12 mb-4 mb-md-0">
                    <div
                        className=".bg-image hover-overlay ripple shadow-1-strong rounded text-center"
                        data-ripple-color="light"
                    >
                        <img
                            src={web6}
                            className="w-100"
                            alt="..."
                        />
                        <a href="https://www.youtube.com/watch?v=LLp8zCB3zXc" className="text-reset "><strong>Legs</strong></a>
                    </div>
                </div>
                         
            </div>
            <br/>
            <footer className="text-center text-lg-start .bg-light text-muted">

                <section>
                    <div>

                        <div className="me-5 d-none d-lg-block">                            
                        </div>
                          <span>
                        <div className="social-links mt-3">
                            <NavLink to="#" className="twitter">
                                <i className="bx bxl-twitter"></i>
                            </NavLink>
                            <NavLink to="#" className="facebook">
                                <i className="bx bxl-facebook"></i>
                            </NavLink>
                            <NavLink to="#" className="instagram">
                                <i className="bx bxl-instagram"></i>
                            </NavLink>
                            <NavLink to="#" className="linkedin">
                                <i className="bx bxl-linkedin"></i>
                            </NavLink>
                        </div>
                            </span>
                    </div>
                </section>



                <section className="">
                    <div className="container text-center text-md-start mt-5">

                        <div className="row mt-3">

                            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">

                                <h6 className="text-uppercase fw-bold mb-4">
                                    <i className="fas fa-gem me-3"></i>Lets Do It
                                </h6>
                                <p>
                                    Let's Do It!!!
                                    We keep you fit!!!
                                    Trusted by more and more Gym freaks
                                </p>
                            </div>



                            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">

                                <h6 className="text-uppercase fw-bold mb-4">
                                    We are in
                                </h6>
                                <p>
                                    <a href="#!" className="text-reset">Jhansi</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">Gwalior</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">Bhopal</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">New Delhi</a>
                                </p>
                            </div>



                            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

                                <h6 className="text-uppercase fw-bold mb-4">
                                    Useful links
                                </h6>
                                <p>
                                    <NavLink to="#!" className="text-reset">Personal Trainer Program</NavLink>
                                </p>
                                <p>
                                    <NavLink to="#!" className="text-reset">Corporate Wellness Program</NavLink>
                                </p>
                                <p>
                                    <NavLink to="#!" className="text-reset">Group Program</NavLink>
                                </p>
                                <p>
                                    <NavLink to="#!" className="text-reset">Help</NavLink>
                                </p>
                            </div>



                            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

                                <h6 className="text-uppercase fw-bold mb-4">
                                    Contact
                                </h6>
                                <p><i className="fas fa-home me-3"></i> Jhansi, U.P, India</p>
                                <p>
                                    <i className="fas fa-envelope me-3"></i>
                                    Lets_Do_It@gmail.com
                                </p>
                                <p><i className="fas fa-phone me-3"></i> +91xxxxxxxxx8</p>
                                <p><i className="fas fa-print me-3"></i> +91xxxxxxxxx9</p>
                            </div>

                        </div>

                    </div>
                </section>



                <div className="text-center p-4" >
                    © 2012 Copyright:
                    <NavLink className="text-reset fw-bold" to="/">Lets_Do_It.com</NavLink>
                </div>

            </footer>

        </>
    )
}

export default Footer;
