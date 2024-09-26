import React from 'react';
import Slider from 'react-slick';
import { useNavigate } from 'react-router-dom'; // Assuming you're using React Router for navigation
import './homebannerslide.css'; // Link to your CSS for styling

const HomeBannerSlide = () => {
  const navigate = useNavigate(); // React Router hook to navigate to the news page

  // Slick slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  // Banner images
  const images = [
    'https://i.pinimg.com/564x/5f/92/97/5f9297869aed091e2cbfc5280136a6f0.jpg',
    'https://i.pinimg.com/564x/9d/8a/e8/9d8ae85cb55db941661c7b2c967b1426.jpg',
    'https://i.pinimg.com/564x/30/df/6d/30df6d0e19168e7f42cc3baa6f9a1a9c.jpg',
  ];

  // Navigate to the news page when the button is clicked
  const handleButtonClick = () => {
    navigate('/news');
  };

  return (
    <div className="banner-container_home">
      {/* Slider component */}
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="slider-image_home">
            <img src={image} alt={`Banner ${index + 1}`} />
          </div>
        ))}
      </Slider>

      {/* Button on the right side */}
      <div className="banner-button-container_home">
        <button className="banner-button_01" onClick={handleButtonClick}>
          Explore News
        </button>
      </div>
    </div>
  );
};

export default HomeBannerSlide;
