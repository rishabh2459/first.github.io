import React from "react";
import './style.css'
import web1 from "../src/Images/fun1.gif";
import web2 from "../src/Images/f.gif";
import web3 from "../src/Images/re.webp";
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>


const Choose = () => {
    return (
        <>
            <style />
            <div className="row gy-5 ">
                <div className="col-lg-2 col-md-12 mb-4 mb-md-0"></div>
                <div class="p-3 mb-2 bg-info text-dark position-relative ">
                    <div class="position-absolute top-50 start-50 translate-middle">
                        <div class="height-100 container d-flex justify-content-center align-items-center">
                            <div class="card p-3 p-3 mb-2 bg-info text-dark">
                                <div class="d-flex justify-content-between align-items-center">
                                    <div class="ratings"> <i class="fa fa-star rating-color"></i> <i class="fa fa-star rating-color"></i> <i class="fa fa-star rating-color"></i> <i class="fa fa-star rating-color"></i> <i class="fa fa-star "></i> </div>
                                    <h5 class="review-count">265 Reviews</h5>
                                </div>
                                <div class="mt-5 d-flex justify-content-between align-items-center">
                                    <h5 class="review-stat">Trainer</h5>
                                    <div class="small-ratings"> <i class="fa fa-star rating-color"></i> <i class="fa fa-star rating-color"></i> <i class="fa fa-star rating-color"></i> <i class="fa fa-star rating-color"></i> <i class="fa fa-star"></i> </div>
                                </div>
                                <div class="mt-1 d-flex justify-content-between align-items-center">
                                    <h5 class="review-stat">Equipments</h5>
                                    <div class="small-ratings"> <i class="fa fa-star rating-color"></i> <i class="fa fa-star rating-color"></i> <i class="fa fa-star rating-color"></i> <i class="fa fa-star rating-color"></i> <i class="fa fa-star"></i> </div>
                                </div>
                                <div class="mt-1 d-flex justify-content-between align-items-center">
                                    <h5 class="review-stat">Ambience</h5>
                                    <div class="small-ratings"> <i class="fa fa-star rating-color"></i> <i class="fa fa-star rating-color"></i> <i class="fa fa-star rating-color"></i> <i class="fa fa-star rating-color"></i> <i class="fa fa-star rating-color"></i> </div>
                                </div>
                                <div class="mt-1 d-flex justify-content-between align-items-center">
                                    <h5 class="review-stat">Washroom</h5>
                                    <div class="small-ratings"> <i class="fa fa-star rating-color"></i> <i class="fa fa-star rating-color"></i> <i class="fa fa-star rating-color"></i> <i class="fa fa-star rating-color"></i> <i class="fa fa-star"></i> </div>
                                </div>
                                <div class="mt-1 d-flex justify-content-between align-items-center">
                                    <h5 class="review-stat">Cleanliness</h5>
                                    <div class="small-ratings"> <i class="fa fa-star rating-color"></i> <i class="fa fa-star rating-color"></i> <i class="fa fa-star rating-color"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container-fluid .bg-gradient">
                        <h1>
                            Why choose Let's Do It?
                        </h1>
                        <div className="row">
                            <h2 class="display-3">
                                1200+ <br />
                            </h2>
                            <p>Members</p>
                            <h2 class="display-3">
                                800+ <br />
                            </h2>
                            <p>Active members</p>
                            <h2 class="display-3">
                                100+ <br />
                            </h2>
                            <p>Equipments</p>
                        </div>
                    </div>

                </div>
                <div class="bg-success p-2 text-dark bg-opacity-50">
                    <h2 >ACHIEVE THE RESULTS YOU NEED WITH OUR WINNING FORMULA</h2>
                    <div>
                        <div class="row row-cols-1 row-cols-md-3 g-4">
                            <div class="col">
                                <div class="card h-100">
                                    <img src={web1} class="card-img-top" alt="..." />
                                   
                                    <br/>
                                    <br/>
                                    <br/>
                                    <br/>
                                    <div class="card-body">
                                        <h5 class="card-title">Fun & Supportive</h5>
                                        <p class="card-text">Become part of a fun non judgemental, friendly and super supportive fitness community.</p>
                                    </div>

                                </div>
                            </div>
                            <div class="col">
                                <div class="card h-100">
                                    <img src={web2} class="card-img-top" alt="..." />
                                    <br/>
                                    
                                    <br/>
                                    <br/>
                                    <br/>
                                    <div class="card-body">
                                        <h5 class="card-title">Friendly & Experienced</h5>
                                        <p class="card-text">Be guided every step on your health and fitness journey by our knowledgeable, experienced and friendly fitness experts.</p>
                                    </div>

                                </div>
                            </div>
                            <div class="col">
                                <div class="card h-100">
                                    <img src={web3} class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">Achieve Results</h5>
                                        <p class="card-text">Finally end the frustration of searching for a fitness regime that you can enjoy and feel at ease with. Start seeing the results you have always wanted to achieve, with your fitness and with weight loss.</p>
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

export default Choose;