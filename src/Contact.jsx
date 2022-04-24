import React, { useState } from "react";
import "./App.css";

const Contact = () => {
  const [data, setData] = useState({
    fullname:"",
    mobile:"",
    email:"",
    message:"",
  });

  const InputEvent = (event) =>{
    const { name, value } = event.target;

    setData((preValue) => {
      return {
        ...preValue,
        [name] : value, 
      }
    })
  }
  const formSubmit = (e) => {
    e.preventDefault();
    alert(`My name is ${data.fullname}. My mobile number is ${data.mobile_no}. My email is ${data.email}. Here is what I want to say ${data.message}`);
  }; 
  return (
    <>
     <br/>
    <div class="p-3 mb-2 bg-dark text-white text-center">
    
      <strong><p class="fs-5">Contact Us</p></strong>
      </div>
      <br/>
      <div className="container contact_div">
        <div className="row gy-5">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formSubmit}>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Full Name</label>
                <input type="text" className="form-control" id="exampleFormControlInput1" name="fullname" value={data.fullname} onChange={InputEvent} placeholder="Enter your name" />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Mobile No.</label>
                <input type="number" className="form-control" id="exampleFormControlInput1" name="mobile no." value={data.mobile} onChange={InputEvent} placeholder="Enter your Mobile No." />
              </div><div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" name="email" value={data.email} onChange={InputEvent} placeholder="name@example.com" />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlTextarea1" className="form-label">Message</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" name="message" value={data.message} onChange={InputEvent} ></textarea>
              </div>
              <div className="col-12">
                <button className="btn btn-outline-primary" type="submit"> Submit form </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );

};

export default Contact;