import React from "react";
import { NavLink } from "react-router-dom";
import web from "../src/Images/a.jpg";


const About = () => {
    return (
        <>
            <br/>
      
        <div className="p-3 mb-2 bg-dark text-white text-center"><strong><p class="fs-5">About Us</p></strong></div>
        <section id="header" className="row d-flex justify-content-center">
                <div className="container-fluid ">
                    <div className="row">
                        <div className="col-10 mx-auto"></div>
                        <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                            <h1>
                             
                                <strong className="brand-name text-primary"> OUR STORY </strong>
                            </h1>
                            <p class="h4">Let's Do It was founded in 2012 as a family owned and operated business specialising in high-quality gym at great prices.</p>
                            <p class="h5 lead text-justify">
                            One of the best gyms to start your workout journey with. A very well managed Gym. Good staff. Good knowledge trainers. One of the special thing about the gym is positive energy, none of the gym have this kind of energy as compared to any other Gyms in this area. You will always feel energetic whenever you step in the Gym.
                            </p> 
                           
                        </div>
                        <div className="col-lg-6 order-1 order-lg-2 header-img">
                            <img src={web} className=".bg-light img-fluid animated " alt="home img" />
                        </div>
                    </div>
                </div>

            </section>
               
              <div> 
              
                  <NavLink to="/Contact" className="btn btn-outline-secondary ">Get in touch</NavLink>
              </div>
        </>
    );

};

export default About;
