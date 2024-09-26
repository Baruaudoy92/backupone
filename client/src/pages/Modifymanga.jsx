import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import '../styles/modifymanga.css';

function ModifyManga() {
  const { id } = useParams();
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

  useEffect(() => {
    // Fetch manga details by ID
    axios.get(`http://localhost:4000/mangas/mangas/${id}`)
      .then(response => {
        // Format the publication date for the input
        const formattedDate = response.data.publication_date ? new Date(response.data.publication_date).toISOString().substr(0, 10) : '';
        setFormData({
          title: response.data.title,
          author: response.data.author,
          genre: response.data.genre,
          description: response.data.description,
          publication_date: formattedDate, // Ensure the date is in YYYY-MM-DD format
          image: response.data.image
        });
      })
      .catch(error => {
        console.error('Error fetching manga:', error);
      });
  }, [id]);

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      // Send updated manga data to server
      const response = await axios.put(`http://localhost:4000/mangas/mangas/${id}`, formData);
      console.log('Manga updated:', response.data);
      navigate('/admin');
    } catch (error) {
      console.error('Update error:', error.response.data);
      // Handle error
    }
  };

  return (
    <div className="modify-manga-container">
      <h1 className='mangamofity'>Modify Manga</h1>
          <h1 className='theone01'>ONE</h1>
          <p className='para0001'>"Welcome! Manga MODIFIER"</p>
          <span>You already created an account ?</span>
      <form onSubmit={handleSubmit}>
        <input type="text" name="title" placeholder="Title" value={formData.title} onChange={handleChange} />
        <input type="text" name="author" placeholder="Author" value={formData.author} onChange={handleChange} />
        
        {/* Dropdown for Genre selection */}
        <select name="genre" value={formData.genre} onChange={handleChange}>
          <option value="">Select Genre</option>
          {genres.map((genre, index) => (
            <option key={index} value={genre}>{genre}</option>
          ))}
        </select>
        
        <textarea name="description" placeholder="Description" value={formData.description} onChange={handleChange} />
        
        {/* Input for Publication Date */}
        <input type="date" name="publication_date" value={formData.publication_date} onChange={handleChange} />

        <input type="text" name="image" value={formData.image} onChange={handleChange} />
        <button className='sub-btn' type="submit">Save Changes</button>
      </form>
    </div>
  );
}

export default ModifyManga;
