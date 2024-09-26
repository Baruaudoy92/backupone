const blogsData = [
    {
      title: "VINLAND",
      date: "2024-09-15",
      summary: "MAPPA STUDIOS",
      image: "https://i.pinimg.com/564x/1d/25/18/1d2518a250e683c3105be8d9e7f35ca0.jpg",
    },
    {
      title: "MOB - 100",
      date: "2024-09-18",
      summary: "Mob Psycho 100 est un manga écrit et dessiné par ONE. Il est prépublié entre 2012 et 2017 dans le magazine Ura Sunday de l'éditeur Shōgakukan.",
      image: "https://i.pinimg.com/originals/32/10/08/321008d0f2331f00a3067fc4ded0509c.gif",
    },
    {
      title: "Anime vs. Manga: The Ultimate Showdown",
      date: "2024-09-18",
      summary: "An analysis of the differences between anime and manga.",
      image: "https://i.pinimg.com/736x/a2/3a/17/a23a17bea231bd8e1c4b2fd1e2aa497d.jpg",
    },
  ];
  
  const BlogSection = () => {
    return (
      <div className="blog-section">
        <h2 className="blog-title">Latest</h2>
        <div className="blog-container">
          {blogsData.map((blog, index) => (
            <div key={index} className="blog-item">
              <img src={blog.image} alt={blog.title} className="blog-image" />
              <div className="blog-content">
                <h3>{blog.title}</h3>
                <p className="blog-date">{blog.date}</p>
                <p className="blog-summary">{blog.summary}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default BlogSection;
  