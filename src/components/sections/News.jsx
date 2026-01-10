import { useEffect, useState } from "react";

const News = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:4000/news")
      .then((res) => res.json())
      .then((data) => {
        setNews(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <section className="news-section fade-up">
      <div className="container">
        <div className="section-header">
          <h2>Latest Updates</h2>
          <p>Updates managed dynamically from the system</p>
        </div>

        {loading ? (
          <div className="news-loading">Loading news...</div>
        ) : (
          <div className="news-grid">
            {news.map((item) => (
              <div className="news-card image-card" key={item.id}>
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                />

                <div className="image-overlay">
                  <span>Read More</span>
                </div>

                <div className="news-content">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default News;
