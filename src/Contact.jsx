import React, { useState } from 'react';

const Contact = () => {

  const [data,setData] = useState({
    name:'',
    phone:'',
    email:'',
    message:'',
  });

  const InputEvent = (event) => {
    const { name, value} = event.target;
    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };

  const formSumbit = (e) => {
    e.preventDefault();
    alert(`My name is ${data.name} and here is what i want to say ${data.message}.`);
  }
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Contact Us</h1>
      </div>
      <div className="container contact_div">
        <div className="col-md-6 col-10 mx-auto">
          <form onSubmit={formSumbit}>
            <div className="mb-3">
              <label for="exampleforcontrolinput1" className="form-label">Email Address</label>
              <input type="email" required='true' className="form-control" id="exampleforcontrolinput1" name="email" value={data.email} onChange={InputEvent} placeholder="name@gmail.com" />
            </div>
            <div className="mb-3">
              <label for="exampleforcontrolinput1" className="form-label">Full name</label>
              <input type="text" required='true' className="form-control" id="exampleforcontrolinput1"  name="name" value={data.name} onChange={InputEvent} placeholder="Your name" />
            </div>
            <div className="mb-3">
              <label for="exampleforcontrolinput1" className="form-label">Phone number</label>
              <input type="number" required='true' className="form-control" id="exampleforcontrolinput1"  name="phone" value={data.phone} onChange={InputEvent} placeholder="Mobile Number" />
            </div>
            <div className="mb-3">
              <label for="exampleforcontroltextarea1" className="form-label">Message</label>
              <textarea required='true' className="form-control" id="exampleforcontroltextarea1" name="message" value={data.message} onChange={InputEvent} rows="3"></textarea>
            </div>
            <div className="col-12 text-center">
              <button className="btn btn-outline-primary" type="submit" >Sumbit </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;