// Refer to how to make a contact form
import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';
import '../styles/main.css';

function Contact() {
  const [email, setEmail] = useState('');
  const [contactName, setConName] = useState('');
  const [contactMessage, sendMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'name') {
      setConName(inputValue);
    }
    else {
      sendMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setErrorMessage('Email is invalid');
      return;
    }
    if (!contactName) {
      setErrorMessage('Please enter a name');
      return;
    }
    if (!contactMessage){
        setErrorMessage('Please enter a message to send');
        return
    }

    setConName('');
    sendMessage('');
    setEmail('');
    alert(`Contact info successfully sent ${contactName}`);
  };

  return (
    <div>
        <h1>Contact Me</h1>
      <form className="form">
        <div className="mb3">
        <input
          className="form-control inBox"
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="email"
        />
        </div>
        <div className="mb3">
        <input
          className="form-control inBox"
          value={contactName}
          name="name"
          onChange={handleInputChange}
          type="text"
          placeholder="name"
        />
        </div>
        <div className="mb3">
        <textarea
          className="form-control mesBox"
          value={contactMessage}
          name="message"
          onChange={handleInputChange}
          type="text"
          placeholder="message"
        />
        </div>
        <div className="mb3 subButton">
        <button type="button" onClick={handleFormSubmit}>
          Submit
        </button>
        </div>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
  );
}

export default Contact;