import React, { useState } from 'react';
import "./css/bootstrap.min.css";

function Register() { 
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [gender, setGender] = useState('');
  const [phone, setPhone] = useState('');
  const [img, setImage] = useState('');
  const [message, setMessage] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  }

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  }

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  }

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  }

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  }

  const handleImageChange = (event) => {
    setImage(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here, you can access all the form data using the state variables
    console.log({
      name,
      email,
      password,
      gender,
      phone,
      img,
      message
    });
  }

  return ( 
    <div className="bg-light py-3 mt-4"> 
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col-12 col-md-11 col-lg-8 col-xl-7 col-xxl-6">
            <div className="bg-white p-4 p-md-5 rounded shadow-sm">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="exampleInputName" className="form-label">Name</label>
                  <input type="text" className="form-control" id="exampleInputName" value={name} onChange={handleNameChange}/>
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                  <input type="email" className="form-control" id="exampleInputEmail1" value={email} onChange={handleEmailChange}/>
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                  <input type="password" className="form-control" id="inputPassword5" value={password} onChange={handlePasswordChange}/>
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputGender" className="form-label">Gender</label>
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="gender" id="flexRadioDefault1" value="male" checked={gender === 'male'} onChange={handleGenderChange}/>
                    <label className="form-check-label" htmlFor="flexRadioDefault1">
                      Male
                    </label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="gender" id="flexRadioDefault2" value="female" checked={gender === 'female'} onChange={handleGenderChange}/>
                    <label className="form-check-label" htmlFor="flexRadioDefault2">
                      Female
                    </label>
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPhone" className="form-label">Phone Number</label>
                  <input type="number" className="form-control" id="exampleInputPhone" value={phone} onChange={handlePhoneChange}/>
                </div>
                <div className="mb-3">
                  <div className="form-floating">
                    <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea" value={message} onChange={handleMessageChange}></textarea>
                    <label htmlFor="floatingTextarea">Comments</label>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="formFile" className="form-label">Default file input example</label>
                    <input className="form-control" type="file" id="formFile" value={img} onChange={handleImageChange}/>
                  </div>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div> 
  ); 
} 

export default Register;
