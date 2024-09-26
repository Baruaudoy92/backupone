import React from 'react';
import '../styles/home.css';
import ChangingBanner from '../components/ChangingBanner';
import Partners from '../components/Partners';
import HomeBannerSlide from '../components/Homebannerslide';

const mangaImages = [
  "https://i.pinimg.com/564x/e4/4a/93/e44a938be76196ec90e80e0895e10189.jpg",
  "https://i.pinimg.com/564x/87/f1/2b/87f12b5aa154ab54c2ebe8e84950b48f.jpg",
  "https://i.pinimg.com/564x/17/bf/cc/17bfccaad83ba48a3ae30ca1fc2bcabe.jpg",
  "https://i.pinimg.com/564x/6e/53/96/6e539640053f2812f166b7940895f7d6.jpg",
  "https://i.pinimg.com/564x/f3/95/20/f39520ee9cac2b9d3c5429fc61f52939.jpg",
];

const miniMangaImages = [
  "https://i.pinimg.com/originals/a6/15/4a/a6154a883b6956306c53b07b27047b22.jpg?mode=crop&width=300&height=300&rnd=0.0.1",
  "https://i.pinimg.com/564x/5a/4e/08/5a4e08b6533f1a1d96876663d8416362.jpg?mode=crop&width=300&height=300&rnd=0.0.1",
  "https://i.pinimg.com/736x/e2/62/2a/e2622ae0a24dfd20a3e99d8bf834d565.jpg?mode=crop&width=300&height=300&rnd=0.0.1",
  "https://i.pinimg.com/736x/9c/15/51/9c1551de81fc9cd23c5148e4d09d4d98.jpg?mode=crop&width=300&height=300&rnd=0.0.1",
  "https://i.pinimg.com/736x/06/02/c3/0602c35d22aa2b1b0de86ac8b432f4a1.jpg?mode=crop&width=300&height=300&rnd=0.0.1",
  "https://i.pinimg.com/736x/80/85/85/808585f911c1c4b8df273ba78834c058.jpg?mode=crop&width=300&height=300&rnd=0.0.1",
];

const Home = () => {
  return (
    <div className="home">
      {/* Banner Section */}
      <section className="banner">
        <div className="banner-content">
          <h1>Discover the Best Manga</h1>
          <p>Explore our diverse collection of manga series from various genres!</p>
        </div>
      </section>

      {/* Manga Section */}
      <section className="manga-gallery">
        <h2>Featured Manga</h2>
        <div className="manga-grid-1">
          {mangaImages.map((image, index) => (
            <div key={index} className="manga-item-home">
              <img src={image} alt={`Manga ${index + 1}`} />
              <p>ONE {index + 1}</p>
            </div>
          ))}
          <h1 className='newsofhome'> ニュース</h1>
        </div>
      </section>
      
      <HomeBannerSlide />
      <ChangingBanner />

      {/* Poster Section with Mini Manga */}
      <section className="poster-with-manga">
        {/* Poster Section */}
        <div className="poster-section">
          <div className="poster-content">
            <h2 className='animeup'>Upcoming Anime</h2>
            <img src="https://www.manga-news.com/public/bans/confe_rence-depresse-kishimoto.webp" alt="Anime Poster" className="poster-img" />
            <p>Stay tuned for the release of our new anime series!</p>
          </div>
        </div>

        {/* Mini Manga Section */}
        <div className="mini-manga-section">
          <h2>More Manga</h2>
          <div className="mini-manga-grid">
            {miniMangaImages.map((image, index) => (
              <div key={index} className="mini-manga-item">
                <img src={image} alt={`Mini Manga ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </section>
      <Partners />
    </div>
  );
};

export default Home;
