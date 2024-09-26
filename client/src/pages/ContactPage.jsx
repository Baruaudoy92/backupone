import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { submitContactForm } from '../contact/contactActions';
import '../styles/contactpage.css';

const ContactPage = () => {
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.contact.formData); // Get form data from Redux state

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { name, email, message };
    
    // Dispatch the action to submit the form data
    dispatch(submitContactForm(data));
    
    // Clear the form fields
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div>
      <h2 className='homecontactuscon'>Contact Us</h2>
      <form className='formcontact' onSubmit={handleSubmit}>
        <div>
          <label className='leb00'>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label className='leb00'>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label className='leb00'>Message:</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>
        <button className='btn_btn00' type="submit">Submit</button>
      </form>

      {/* Display submitted form data */}
      {formData.name && (
        <div>
          <h3>Submitted Data:</h3>
          <p>Name: {formData.name}</p>
          <p>Email: {formData.email}</p>
          <p>Message: {formData.message}</p>
        </div>
      )}
    </div>
  );
};

export default ContactPage;
