import React from "react";
import Slider from "react-slick";
import "./bannerslider.css"; // Create this CSS file for custom styles

const BannerSlider = () => {
  const images = [
    {
      src: "https://i.pinimg.com/564x/ab/02/af/ab02af7302f7ae6f962ed1327148831a.jpg", 
      description: "Exciting Manga Series",
    },
    {
      src: "https://i.pinimg.com/originals/ff/de/d4/ffded4d965a9c636c613c6ba61f2f00f.jpg",
    },
    {
      src: "https://i.pinimg.com/originals/17/bf/20/17bf20735f6c87da5905ff6cae141ab0.jpg", 
      description: "Amazing Art Styles",
    },
    {
      src: "https://ichiban-japan.com/wp-content/uploads/2024/07/festivals-dete-tohoku-1024x683.jpg", 
      description: "Fantasy World",
    },
    {
      src: "https://i.pinimg.com/originals/7f/6b/cc/7f6bccb494132981d90074cb33034c04.jpg", 
      description: "Gripping Storyline",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="banner-slider">
      {/* Title at the top */}
      <h2 className="banner-title">MANGA </h2>
      
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="slider-item">
            <img src={image.src} alt={image.description} className="slider-image" />
            <div className="slider-content">
              <p className="slider-description">{image.description}</p>
              <div className="slider-buttons">
                <button className="btn-read">Read</button>
                <button className="btn-details">Details</button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BannerSlider;
