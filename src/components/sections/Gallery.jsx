import { useEffect, useState } from "react";

const Gallery = () => {
  const [gallery, setGallery] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:4000/gallery")
      .then((res) => res.json())
      .then((data) => {
        setGallery(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <section className="gallery-section fade-up">
      <div className="container">
        <div className="section-header">
          <h2>Our Work in Action</h2>
          <p>Moments captured from our ongoing initiatives</p>
        </div>

        {loading ? (
          <div className="gallery-loading">Loading gallery...</div>
        ) : (
          <div className="gallery-grid">
            {gallery.map((item) => (
              <div className="gallery-item image-card" key={item.id}>
                <img
                  src={item.image}
                  alt={item.alt || "NGO activity"}
                  loading="lazy"
                />
                <div className="image-overlay">
                  <span>View</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
