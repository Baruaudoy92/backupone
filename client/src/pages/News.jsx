import React from 'react';
import '../styles/news.css';
import BlogSection from '../components/Blogsection';
import VideoBlog from '../components/Videoblog';
import Partners from '../components/Partners';

const newsData = [
  {
    title: "ONE: JAPON",
    date: "2024-10-01",
    description: "魔法の領域の騎士を描いたエキサイティングな新しい漫画シリーズ。",
    image: "https://i.pinimg.com/originals/aa/8d/79/aa8d79b7d3d771867507c234e835b6b5.gif",
  },
  {title: "72 SEASONS OF JAPON",
    date: "2024-09-15",
    summary: "Discover the new Blogs of ICHIBAN JAPAN",
    image: "https://ichiban-japan.com/wp-content/uploads/2024/03/A7405060-edited.jpg",
  },
  {
    title: "Manga Blog: The Evolution of Shonen Manga",
    date: "2024-09-20",
    description: "A deep dive into how shonen manga has evolved over the decades.",
    image: "https://i.pinimg.com/originals/e5/6d/ce/e56dce27697674007697bdf13f53dd62.gif",
  },
];

const News = () => {
  return (
    <div className="news-page">
      <h1 className="news-title">THE CULTURE</h1>
      <div className="news-container">
        {newsData.map((newsItem, index) => (
          <div key={index} className="news-item">
            <img src={newsItem.image} alt={newsItem.title} className="news-image" />
            <div className="news-content">
              <h2>{newsItem.title}</h2>
              <p className="news-date">{newsItem.date}</p>
              <p className="news-description">{newsItem.description}</p>
            </div>
          </div>
        ))}
      </div>
      <BlogSection />
      <VideoBlog />
      < Partners/>
    </div>
  );
};

export default News;
