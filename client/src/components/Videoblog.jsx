import React from 'react';
import './videoblog.css';

const videoBlogsData = [
  {
    title: "Osaka",
    date: "31 May 2015",
    description: "ICHIBAN JAPAN - Saison 3 Épisode 1 : Rallye de la bouffe à Osaka - Documentaire Japon",
    videoId: "https://youtu.be/ryMlaZ-YV50?list=PLAn2TkVtvvkTafOhQHvj7xA1rPgO5I28y&t=7", // Replace with actual YouTube video ID
  },
  {
    title: "Une journée dans un lycée au Japon",
    date: "2 Mars 2023",
    description: "Vidéo exceptionnelle aujourd'hui : je passe une journée dans un lycée japonais, plus précisément un lycée pour filles au Japon !",
    videoId: "https://youtu.be/o64-7jZxsvw?list=PLAn2TkVtvvkQiVgthlxULF7vIB93LGZG4&t=1",
  },
  {
    title: "Saison 3 Épisode 6 - Sexy Nagoya",
    date: "13 Juin 2015",
    description: "LA CUISINE DE NAGOYA.",
    videoId: "https://www.youtube.com/watch?v=-D8Ouwq9yoM&t=629shttps://www.youtube.com/watch?v=4BaK3jUjqOg&list=PLAn2TkVtvvkTafOhQHvj7xA1rPgO5I28y&index=6", 
  },
];

const VideoBlog = () => {
  return (
    <div className="video-blog-section">
      <h2 className="video-blog-title">Video Blogs</h2>
      <div className="video-blog-container">
        {videoBlogsData.map((video, index) => (
          <div key={index} className="video-blog-item">
            <iframe
              className="video-blog-embed"
              src={`https://www.youtube.com/embed/${video.videoId}`}
              frameBorder="0"
              title={`Video Blog: ${video.title}`} // Added title for accessibility
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <div className="video-blog-content">
              <h3>{video.title}</h3>
              <p className="video-blog-date">{video.date}</p>
              <p className="video-blog-description">{video.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoBlog;