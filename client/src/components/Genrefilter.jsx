import React, { useState } from 'react';
import './genrefilter.css';

const GenreFilter = ({ genres, items, onFilter }) => {
  const [selectedGenre, setSelectedGenre] = useState('');

  // Handle genre selection
  const handleGenreChange = (e) => {
    const genre = e.target.value;
    setSelectedGenre(genre);

    // If a genre is selected, filter items
    if (genre === 'all') {
      onFilter(items); // Show all items
    } else {
      const filteredItems = items.filter(item => item.genre === genre);
      onFilter(filteredItems); // Show filtered items
    }
  };

  return (
    <div className="genre-filter">
      <label htmlFor="genre">Filter by Genre: </label>
      <select id="genre" value={selectedGenre} onChange={handleGenreChange}>
        <option value="all">All</option>
        {genres.map((genre, index) => (
          <option key={index} value={genre}>
            {genre}
          </option>
        ))}
      </select>
    </div>
  );
};

export default GenreFilter;
