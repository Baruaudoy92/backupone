import React from "react";
import '../styles/aboutus.css';
import Comments from "../components/Comments";
import Partners from "../components/Partners";

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <h1 className="welcome-title">Nice to Meet You!</h1>

      <div className="welcome-section">
        <div className="welcome-text">
          <p>
            Welcome to our platform, your ultimate destination for exploring the 
            wonderful world of Manga. Whether you're a dedicated manga enthusiast 
            or just getting started, we aim to provide you with a deep insight into 
            Japanese culture, art, and storytelling through manga.
          </p>
        </div>
        <img 
          className="about-image" 
          src="https://i.pinimg.com/564x/95/2a/54/952a54498a960373fd284ec914d85416.jpg" 
          alt="Japanese culture and manga illustration" 
        />
      </div>

      <div className="media-section">
        <h2 className="section-title">NEWS FOOD & OISHI PLACES</h2>
        <div className="mangas-grid">
          <div className="manga-item_aboutus">
            <img 
              src="https://i.pinimg.com/564x/00/a9/fc/00a9fc13ecacfbc0907e5ed29e1d15cb.jpg" 
              alt="Delicious Ramen bowl" 
            />
            <p>Exciting RAMEN</p>
          </div>
          <div className="manga-item_aboutus">
            <img 
              src="https://i.pinimg.com/564x/4e/0f/c4/4e0fc48ede0867798550e860f634dffb.jpg" 
              alt="Onigiri rice ball adventure" 
            />
            <p>ONIGIRI Adventures</p>
          </div>
          <div className="manga-item_aboutus">
            <img 
              src="https://i.pinimg.com/736x/1c/5b/92/1c5b925c0027cb4cf4830af1ac69d248.jpg" 
              alt="Stunning view of Tokyo" 
            />
            <p>Amazing TOKYO</p>
          </div>
          <div className="manga-item_aboutus">
            <img 
              src="https://i.pinimg.com/564x/23/fc/68/23fc6801ccb60141ea33c75be6f0c58c.jpg" 
              alt="Breaking news in the manga world" 
            />
            <p>NEWS Storyline</p>
          </div>
        </div>
      </div>

      <div className="journey-section">
        <h2>Our Journey</h2>
        <p>
          Our journey began with a deep love for the art and culture of Japan. We 
          are passionate about bringing this rich cultural experience to everyone, 
          sharing the essence of Japan through its most beloved art form—manga. 
          From traditional manga to the latest releases, we aim to curate the 
          best for you.
        </p>
      </div>

      <div className="culture-section">
        <h2>The Culture of Manga and Japan</h2>
        <p>
          Manga is more than just stories and pictures; it is a representation of 
          Japan's rich cultural heritage. Through the lens of manga, we explore the 
          deeper meanings of everyday life, the struggles and triumphs of humanity, 
          and the unique artistic style that Japan offers. From its intricate 
          storytelling to the profound character development, manga offers something 
          for everyone. Japan, known for its innovative and creative culture, finds 
          a voice in every manga artist's work.
        </p>
      </div>

      <div className="video-section">
        <h2>ONSEN MIXTE ET RENCONTRES À AKITA</h2>
        <iframe
         className="about-video"
         width="560"
         height="315"
         src="https://www.youtube.com/embed/smeW7gB8914" 
         title="YouTube video player"
         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
         allowFullScreen
        ></iframe>
      </div>

      <div className="logo-section">
        <h2>YOUTUBE & Collaborations</h2>
        <div className="logos">
          <img src="https://i.ytimg.com/an/KwLqdUm-iOxVA2ERRTsFng/featured_channel.jpg?v=53781eba" alt="Partner Logo 1" />
          <img src="https://yt3.googleusercontent.com/ytc/AIdro_nxEQRG2V0XxTQi7JJ6yROQGZGuPEvKgTizxriqkhKM1aA=s160-c-k-c0x00ffffff-no-rj" alt="Partner Logo 2" />
          <img src="https://yt3.googleusercontent.com/ytc/AIdro_lxfjzMi2Mqpbqe1jJ3b-q91BpI3tfWqckFNeogjPFOFzA=s160-c-k-c0x00ffffff-no-rj" alt="Partner Logo 3" />
          <img src="https://yt3.googleusercontent.com/ytc/AIdro_mS5txkmzNfeuojeK6kWGL251DDo2diY37j-LMXp2oe0U8=s160-c-k-c0x00ffffff-no-rj" alt="Partner Logo 4" />
          <img src="https://yt3.googleusercontent.com/ytc/AIdro_m9Kv4NG1wDcPZ8xqznU_Xv5QQ0Na0hUxc4MN0LBVdgVFw=s160-c-k-c0x00ffffff-no-rj" alt="Partner Logo 4" />
        </div>
        <Comments />
        <Partners />
      </div>
    </div>
  );
};

export default AboutUs;
