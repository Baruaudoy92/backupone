import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import User from './User';
import '../styles/admin.css';

function Admin() {
  const [mangas, setMangas] = useState([]);
  const navigate = useNavigate();
  const user = localStorage.getItem("user");

  useEffect(() => {
    if (user) {
      axios.get('http://localhost:4000/mangas/allmangas')
        .then(res => setMangas(res.data))
        .catch(error => console.log(error));
    } else {
      navigate('/login');
    }
  }, [navigate, user]);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:4000/mangas/mangas/${id}`)
      .then(res => {
        console.log(res.data);
        window.location.reload();
      })
      .catch(error => console.log(error));
  };

  const handleLogout = () => {
    localStorage.removeItem("user"); // Clear the user from localStorage
    navigate('/home'); // Redirect to the homepage
  };

  return (
    <div className="admin-container">
      <div className="admin-header">
        <User />
        <h1 className='mangaa'>Manga</h1>
        <div className="admin-nav">
          <Link to='/addmanga'>Add-MANGA</Link>
        </div>
        <button onClick={handleLogout} className="logout-btn">Logout</button>
      </div>
      <div className='hellomanga'>HELLO! Ooops HOLY MANGAS!</div>
      <div className="admin-content">
        {mangas.map((livre) => (
          <div className="manga-card" key={livre.manga_id}>
            <img src={livre.image} alt={livre.title} />
            <p>{livre.title}</p>
            <p>{livre.author}</p>
            <p>{livre.genre}</p>
            <p>{livre.description}</p>
            <div>
              <button onClick={() => navigate(`/modifymanga/${livre.manga_id}`)}>Modifier</button>
              <button onClick={() => handleDelete(livre.manga_id)}>Supprimer</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Admin;
