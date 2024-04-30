import React, { useState } from 'react';
import ".components/Pages/css/bootstrap.min.css";

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setEmailError('');
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    setPasswordError('');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!email) {
      setEmailError('Email is required');
      return;
    }
    if (!password) {
      setPasswordError('Password is required');
      return;
    }
    if (email === 'demo@gmail.com' && password === 'demo123') {
      setLoggedIn(true);
    } else {
      alert("Incorrect email or password");
      window.location.reload();
    }
  };
  return (
    <div className="bg-light py-3 mt-4">
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col-12 col-md-11 col-lg-8 col-xl-7 col-xxl-6">
            <div className="bg-white p-4 p-md-5 rounded shadow-sm">
              {loggedIn ? (
                <div>
                  <h2>Welcome! {email}</h2>
                </div>
              ) : (
                <div>
                  <div className="row">
                    <div className="col-12">
                      <div className="mb-5">
                        <h2>Login</h2>
                      </div>
                    </div>
                  </div>
                  <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <label>Email:</label>
                      <input type="email" className="form-control" id="email" value={email} onChange={handleEmailChange} />
                      {emailError && <div className="text-danger">{emailError}</div>}
                    </div>
                    <div className="mb-3">
                      <label>Password:</label>
                      <input type="password" className="form-control" id="password" value={password} onChange={handlePasswordChange} />
                      {passwordError && <div className="text-danger">{passwordError}</div>}
                    </div>
                    <div className="col-12">
                      <div className="d-grid">
                        <button className="btn btn-lg btn-primary" type="submit">Submit</button>
                      </div>
                    </div>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
