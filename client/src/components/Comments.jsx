import React from 'react';
import './comments.css'; // Create this CSS file for custom styles

const Comments = () => {
  const comments = [
    {
      id: 1,
      text: "Amazing manga! The story was captivating.",
      date: "2024-09-20",
      stars: 5,
      userImage: "https://i.pinimg.com/564x/ba/c7/64/bac7649b9fef7d28036fa948be3bc9cb.jpg", // User image
    },
    {
      id: 2,
      text: "Loved the art style! A must-read for any manga fan.",
      date: "2024-09-21",
      stars: 4,
      userImage: "https://i.pinimg.com/564x/d2/31/d8/d231d8222688d7a702e0a8255a3f65b1.jpg",
    },
    {
      id: 3,
      text: "NICE Manga WEBSITE.",
      date: "2024-09-22",
      stars: 4.5,
      userImage: "https://i.pinimg.com/736x/d2/64/a0/d264a022f779e68531d3c589a0fd84de.jpg",
    },
    {
        id: 4,
        text: "Great characters and plot development.",
        date: "2024-09-22",
        stars: 5,
        userImage: "https://i.pinimg.com/564x/4d/db/79/4ddb79c4b06c16b583fbd2952109de4d.jpg",
      },
  ];

  return (
    <div className="comments-container">
      <h2>User Comments</h2>
      {comments.map(comment => (
        <div key={comment.id} className="comment">
          <img src={comment.userImage} alt={`User ${comment.id}`} className="user-image" />
          <div className="comment-content">
            <p className="comment-text">{comment.text}</p>
            <div className="comment-rating">
              {Array.from({ length: comment.stars }, (_, index) => (
                <span key={index} className="star">★</span>
              ))}
            </div>
            <p className="comment-date">{comment.date}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Comments;
