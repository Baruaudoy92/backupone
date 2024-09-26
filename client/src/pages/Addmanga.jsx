import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../styles/addmanga.css';

function AddManga() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    genre: '',
    description: '',
    publication_date: '',
    image: ''
  });

  const genres = ['Action', 'Adventure', 'Fantasy', 'Comedy', 'Drama', 'Slice of Life', 'Horror', 'Mystery', 'Sci-Fi', 'Romance'];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send new manga data to the server
      const response = await axios.post('http://localhost:4000/mangas/create', formData);
      console.log('Manga added:', response.data);
      navigate('/admin'); // Redirect to the admin page after successful addition
    } catch (error) {
      console.error('Error adding manga:', error.response.data);
      // Handle error if needed
    }
  };

  return (
    <div className="add-manga-container">
      <h1 className='addnewmanga'>Add New Manga</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="author"
          placeholder="Author"
          value={formData.author}
          onChange={handleChange}
          required
        />

        {/* Dropdown for Genre selection */}
        <select name="genre" value={formData.genre} onChange={handleChange} required>
          <option value="">Select Genre</option>
          {genres.map((genre, index) => (
            <option key={index} value={genre}>
              {genre}
            </option>
          ))}
        </select>

        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          required
        />
        <input
          type="date"
          name="publication_date"
          value={formData.publication_date}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={formData.image}
          onChange={handleChange}
          required
        />
        <button type="submit">Add Manga</button>
      </form>
    </div>
  );
}

export default AddManga;
