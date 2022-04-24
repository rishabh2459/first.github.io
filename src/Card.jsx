import React from "react";
import web from "../src/Images/yog.jpg";
import web1 from "../src/Images/runn.jpg";
import web2 from "../src/Images/car.jpg";
import web3 from "../src/Images/weight lifting.jpg";
import web4 from "../src/Images/zumbaa.webp";
import web5 from "../src/Images/m.jpg";

import './style.css'

const Card = () => {
  return (
    <>
      <style />
      
      <div className="container-fluid mb-6 expand-lg">
        <div className="row row-cols-5 row-cols-md-10">
          <div className="col-12 mx-auto"> 
            <div className="row gy-5">
              <div className="col-md-6 col-lg-4 mx-auto">
                <div className="card">
                  <img src={web} className="card-img-top" alt="YOGA" />
                  <div className="card-body">
                    <h5 className="card-title">YOGA</h5>
                    <p className="card-text">Yoga is a group of physical, mental, and spiritual practices or disciplines which originated in ancient India and aim to control and still the mind</p>
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                      <li className="nav-item">
                        <a className="btn btn-outline-primary" aria-current="page" href="https://www.nytimes.com/guides/well/beginner-yoga">Click for more</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-10 mx-auto ">
                <div className="card">
                  <img src={web1} className="card-img-top" alt="RUNNING" />
                  <div className="card-body">
                    <h5 className="card-title">RUNNING</h5>
                    <p className="card-text">Both running and jogging are forms of aerobic exercise. A beginner to exercise should start with brisk walking, progress to jogging and work up to running.</p>
                    <a href="https://www.medicinenet.com/running/article.htm" className="btn btn-outline-primary">Click for more</a>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-10 mx-auto">
                <div className="card">
                  <img src={web2} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">CARDIO</h5>
                    <p className="card-text">Cardio exercise, which is sometimes referred to as aerobic exercise, is any rhythmic activity that raises your heart rate into your target heart rate zone.</p>
                    <a href="https://www.verywellfit.com/everything-you-need-to-know-about-cardio-1229553" className="btn btn-outline-primary">Click for more</a>
                  </div>
                </div>
              </div><div className="col-md-4 col-10 mx-auto">
                <div className="card">
                  <img src={web3} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">STRENGTH</h5>
                    <p className="card-text">Learn physical exercises that are designed to improve strength and endurance. It is often associated with the lifting of weights</p>
                    <a href="https://www.womenshealthmag.com/fitness/g27393163/strength-training-exercises/" className="btn btn-outline-primary">click for more</a>
                  </div>
                </div>
              </div><div className="col-md-4 col-10 mx-auto">
                <div className="card">
                  <img src={web4} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">ZUMBA</h5>
                    <p className="card-text">Zumba dance class features high and low-intensity intervals that help improve cardiovascular fitness</p>
                    <a href="https://www.verywellfit.com/zumba-pros-cons-and-how-it-works-4688722" className="btn btn-outline-primary">Click for more</a>
                  </div>
                </div>
              </div>

              <div className="col-md-4 col-10 mx-auto">
                <div className="card">
                  <img src={web5} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">MEDITATION</h5>
                    <p className="card-text">  Learn how to control your mind, relieve anxiety, and live a life full of purpose and true satisfaction through mantra meditation.                    
                    </p>
                    <a href="https://www.nytimes.com/guides/well/how-to-meditate" className="btn btn-outline-primary">Click for more</a>
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

export default Card;