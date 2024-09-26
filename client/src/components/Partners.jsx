import React from 'react';
import './partners.css'; // Add your own CSS styles here

const partnersLogos = [
  "https://upload.wikimedia.org/wikipedia/en/thumb/e/ef/Toei_Animation_logo.svg/640px-Toei_Animation_logo.svg.png",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgc9mweww_pwrtON-JAWvOTxdTnc2s1zOoEA&s",
  "https://ih1.redbubble.net/image.5220979668.5238/bg,f8f8f8-flat,750x,075,f-pad,750x1000,f8f8f8.jpg",
  "https://www.zarla.com/images/zarla-pixanime-1x1-2400x2400-20220324-tpv6f6djk3vhk8p8ttgd.png?crop=1:1,smart&width=250&dpr=2",
];

const Partners = () => {
  return (
    <div className="partners-container">
      <h2>Our Partners</h2>
      <div className="logos-grid">
        {partnersLogos.map((logo, index) => (
          <div key={index} className="logo-item">
            <img src={logo} alt={`Partner logo ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Partners;
