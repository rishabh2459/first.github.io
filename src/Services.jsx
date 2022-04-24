import React from "react";
import Card from "./Card";

const Service = () => {
  return (
    <>
      <br/>
      <div class="p-3 mb-2 bg-dark text-white text-center"><strong><p class="fs-5">Fitness and Exercise</p></strong></div>
      <br/>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-8 mx-auto">
            <div className="row gy-5">
              <Card />
            </div>
          </div>
        </div>
      </div>
    </>
  );

};

export default Service;