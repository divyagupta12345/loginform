

import React, { useState } from "react";
import Container from "./Container";

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');

  const UsernameChange = (e) => {
    setUsername(e.target.value);
  };
  const PasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const EmailChange = (e) => {
    setEmail(e.target.value);
  };
  const ContactChange = (e) => {
    setContact(e.target.value);
  };
  const Submit = (e) => {
    e.preventDefault();
  };

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '7rem auto',
    backgroundColor:'pink',
    width: '300px',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '10px',
    boxShadow: '0 0 5px rgba(0, 0, 0, 0.2)',
    cursor:'pointer',
  };

  const inputStyle = {
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    cursor:'pointer',
  };

  const submitButtonStyle = {
    backgroundColor: '#007bff',
    color: '#fff',
    padding: '10px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    margin: '10px',
  };

  return (
    <>
      <div style={formStyle}>
        <Container />
        <h2>LoginForm</h2>
        <form onSubmit={Submit}>
          <div>
            <label htmlFor="username">Username: </label> <br />
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={UsernameChange}
              style={inputStyle}
            />
          </div>
          <div>
            <label htmlFor="password">Password: </label> <br />
            <input
              type="password"
              id="password"
              name="password"
              onChange={PasswordChange}
              style={inputStyle}
            />
          </div>
          <div>
            <label htmlFor="Email">Email: </label> <br />
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={EmailChange}
              style={inputStyle}
            />
          </div>
          <div>
            <label htmlFor="Contact">Contact: </label> <br />
            <input
              type="number"
              id="contact"
              name="contact"
              value={contact}
              onChange={ContactChange}
              style={inputStyle}
            />
          </div>
          <div>
            <button type="submit" style={submitButtonStyle}>
              Login
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default LoginForm;