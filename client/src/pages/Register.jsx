import React, { useState } from 'react';
import axios from 'axios';
import '../styles/register.css';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone_number: '',
    address: '',
    birth_date: '',
    password: '',
    confirmPassword: ''
  });

  const [error, setError] = useState(''); // Pour afficher les messages d'erreur

  // Définir les expressions régulières
  const prenomRegex = /^[a-zA-ZÀ-ÿ-]+(?:\s[a-zA-ZÀ-ÿ-]+)*$/; // Autorise les lettres, les tirets et les espaces
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; // Format d'adresse email valide
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{12,}$/; // Au moins 12 caractères avec une majuscule, une minuscule et un chiffre

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let valid = true;

    // Valider tous les champs
    if (!prenomRegex.test(formData.first_name)) {
      valid = false;
      setError("Invalid first name");
    }
    if (!prenomRegex.test(formData.last_name)) {
      valid = false;
      setError("Invalid last name");
    }
    if (!emailRegex.test(formData.email)) {
      valid = false;
      setError("Invalid email address");
    }
    if (!passwordRegex.test(formData.password)) {
      valid = false;
      setError("Password must be at least 12 characters long and include at least one uppercase letter, one lowercase letter, and one number");
    }
    if (formData.password !== formData.confirmPassword) {
      valid = false;
      setError("Passwords don't match!");
    }

    return valid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {
      const response = await axios.post('http://localhost:4000/auth/register', formData);
      console.log('New user registered:', response.data);
      navigate("/login");
    } catch (error) {
      console.error('Registration error:', error.response.data);
      setError('Registration failed: ' + error.response.data.error);
    }
  };

  return (
    <div className="register-container">
      <form className="register-form" onSubmit={handleSubmit}>
        <h2>Register</h2>

        {/* Message d'erreur d'affichage */}
        {error && <p className="error">{error}</p>}

        <input
          type="text"
          name="first_name"
          placeholder="First Name"
          value={formData.first_name}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="last_name"
          placeholder="Last Name"
          value={formData.last_name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="phone_number"
          placeholder="Phone Number"
          value={formData.phone_number}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleChange}
          required
        />
        <input
          type="date"
          name="birth_date"
          value={formData.birth_date}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;