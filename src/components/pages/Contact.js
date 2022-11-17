// Refer to how to make a contact form
import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

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
    } else if (inputType === 'userName') {
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
    alert(`Contact info successful sent ${contactName}`);
  };

  return (
    <div>
      <form className="form">
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="email"
        />
        <input
          value={contactName}
          name="contactName"
          onChange={handleInputChange}
          type="text"
          placeholder="Name"
        />
        <input
          value={contactMessage}
          name="message"
          onChange={handleInputChange}
          type="text"
          placeholder="message"
        />
        <button type="button" onClick={handleFormSubmit}>
          Submit
        </button>
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