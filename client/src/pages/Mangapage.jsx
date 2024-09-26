import axios from "axios"; 
import '../styles/mangapage.css';import 
{ useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import BannerSlider from "../components/BannerSlider";
import GenreFilter from "../components/Genrefilter";

function Mangapage() {
  const [mangas, setMangas] = useState([]); // State for the list of mangas
  const [filteredMangas, setFilteredMangas] = useState([]); // State for the filtered list of mangas
  const navigate = useNavigate();

  // Fetch mangas from API on component mount
  useEffect(() => {
    axios.get('http://localhost:4000/mangas/allmangas') 
      .then(res => {
        setMangas(res.data);
        setFilteredMangas(res.data); // Set filteredMangas to the fetched data initially
      })
      .catch(error => console.log(error));
  }, []);

  // Extract unique genres from the mangas for the filter
  const genres = [...new Set(mangas.map(manga => manga.genre))];

  return (
    <>
    <BannerSlider />
      <GenreFilter 
        genres={genres} 
        items={mangas} 
        onFilter={setFilteredMangas} // Pass setFilteredMangas to filter the manga list
      />
      <div className="mangas-container">
       {/* Mapping sur la liste des mangas pour afficher chaque élément */}
        {filteredMangas.map((livre) => (
          <div
            onClick={() => navigate(`/produitmanga/${livre.manga_id}`)}
            key={livre.manga_id}
            className="manga-item-manga"
          >
             {/* Affichage des informations de chaque manga */}
            <img src={livre.image} alt={livre.title} />
            <p className="manga-para-1">{livre.title}</p>
            <p className="manga-para-2">{livre.genre}</p>
              <button className="btn-btn-manga">Details</button>
          </div>
        ))}
      </div>
    </>
  );
}

export default Mangapage;
