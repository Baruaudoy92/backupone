import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './changingBanner.css';

const bannerImages = [
  "https://i.pinimg.com/564x/2c/2a/ee/2c2aee1ffd78a77f656c257ba36f2b11.jpg",
  "https://i.pinimg.com/564x/c6/94/aa/c694aaf0a79327fad11ff2be1091f373.jpg",
  "https://i.pinimg.com/564x/1a/b9/68/1ab968a464e0ad5d97589bdc410e3960.jpg",
  "https://i.pinimg.com/564x/ec/db/91/ecdb91a6773cfd214e33344600e43008.jpg",
  "https://i.pinimg.com/564x/e5/f9/43/e5f943c9e8f6fd58a57e4ce451285407.jpg",
];

const ChangingBanner = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const navigate = useNavigate();

  const goToMangaPage = () => {
    navigate('/mangapage');
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % bannerImages.length);
    }, 1000); // Change image every 2 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="banner-history-wrapper">
      {/* Banner Section */}
      <div className="changing-banner-container-home">
        <div className="changing-banner-home">
          <img
            src={bannerImages[currentImageIndex]}
            alt={`Banner ${currentImageIndex + 1}`}
            className="changing-banner-imghome"
          />
          <div className="banner-overlay">
            <button onClick={goToMangaPage} className="explore-button">
              Explore MANGA
            </button>
          </div>
        </div>
      </div>

      {/* History Section */}
      <div className="history-section">
        <h3>About Our Site</h3>
        <p>
          Welcome to our Manga site! Discover new adventures and immerse yourself in thrilling stories from different genres. From action-packed tales to heartwarming comedies, we have something for every manga enthusiast.
        </p>
        <div className="flag-container">
          <img
            src="https://upload.wikimedia.org/wikipedia/en/9/9e/Flag_of_Japan.svg"
            alt="Japanese flag"
            className="japan-flag"
          />
          <span>Origin: Japan</span>
        </div>
      </div>

      {/* New Section: What are Mangas */}
      <div className="manga-info-section">
        <h3>What Are Mangas?</h3>
        <p>
          Manga are Japanese comic books or graphic novels that have gained global popularity. They cover a wide range of genres, from action and fantasy to romance and slice of life, captivating audiences of all ages.
        </p>
        <p>
          Originating in Japan, manga's unique art style and storytelling techniques have influenced both literature and pop culture worldwide. They are often serialized in magazines before being compiled into volumes.
        </p>
      </div>

       {/* New Section: What are Mangas */}
       <div className="manga-info-section">
        <h3>ICHIBAN JAPON</h3>
        <p>
        Japanese culture is a blend of deep tradition and modern innovation. It includes practices like the tea ceremony, flower arranging (Ikebana), and calligraphy. Cuisine such as sushi, ramen, and kaiseki emphasize freshness and seasonal ingredients. Festivals like Hanami (cherry blossom viewing) and Gion Matsuri are widely celebrated. Fashion ranges from traditional kimonos to bold street styles, while architecture and design focus on simplicity and harmony with nature. Pop culture, especially anime and manga, has a global influence, and martial arts like karate and judo highlight discipline and respect.
        </p>
      </div>
    </div>
    
  );
};

export default ChangingBanner;
