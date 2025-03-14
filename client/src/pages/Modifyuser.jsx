import React, { useState } from 'react';
import axios from 'axios';
import '../styles/modifyuser.css';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Modifyuser = () => {
  const navigate = useNavigate();
  const {id}=useParams();
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone_number: '',
    address: '',
    birth_date: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`http://localhost:4000/auth/users/${id}`, formData)
      console.log('New user registered:', response.data);
      navigate("/login");
      // You can redirect or show a success message here
    } catch (error) {
      console.error('Registration error:', error.response.data);
      // Handle error, show error message, etc.
    }
  };

  return (
    <div className="register_page">
      <div className="card_page">
        <div className="left">
          <h1 className='theone'>ONE</h1>
          <p>"Welcome! Delighted to have you join us. Let's dive in and make great things happen!"</p>
          <span>New ADMIN ?</span>
        </div>
        <div className="right">
          <h2 className='modify1'>Modifier User</h2>
          <form onSubmit={handleSubmit}>
            <input type="text" name="first_name" placeholder="First Name" onChange={handleChange} />
            <input type="text" name="last_name" placeholder="Last Name" onChange={handleChange} />
            <input type="email" name="email" placeholder="Email" onChange={handleChange} />
            <input type="text" name="phone_number" placeholder="Phone Number" onChange={handleChange} />
            <input type="text" name="address" placeholder="Address" onChange={handleChange} />
            <input type="date" name="birth_date" placeholder="Birth Date" onChange={handleChange} />
            <input type="password" name="password" placeholder="Password" onChange={handleChange} />
            <button className='modifyuser' type="submit">Modifier</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modifyuser;
