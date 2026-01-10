import { useEffect, useState } from "react";

const API = "http://localhost:4000";

const AdminDashboard = () => {
  const [programs, setPrograms] = useState([]);
  const [news, setNews] = useState([]);
  const [gallery, setGallery] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  const [newsTitle, setNewsTitle] = useState("");
  const [newsDesc, setNewsDesc] = useState("");
  const [newsImage, setNewsImage] = useState("");

  const [galleryImage, setGalleryImage] = useState("");
  const [galleryAlt, setGalleryAlt] = useState("");

  // FETCH ALL DATA
  useEffect(() => {
    Promise.all([
      fetch(`${API}/programs`).then(res => res.json()),
      fetch(`${API}/news`).then(res => res.json()),
      fetch(`${API}/gallery`).then(res => res.json())
    ])
      .then(([programsData, newsData, galleryData]) => {
        setPrograms(programsData || []);
        setNews(newsData || []);
        setGallery(galleryData || []);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load admin data");
        setLoading(false);
      });
  }, []);

  /* ---------- HANDLERS ---------- */

  const handleAddProgram = (e) => {
    e.preventDefault();
    if (!title || !description || !image) return;

    fetch(`${API}/programs`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, description, image }),
    })
      .then(res => res.json())
      .then(data => {
        setPrograms([...programs, data]);
        setTitle(""); setDescription(""); setImage("");
      });
  };

  const handleDeleteProgram = (id) => {
    fetch(`${API}/programs/${id}`, { method: "DELETE" })
      .then(() => setPrograms(programs.filter(p => p.id !== id)));
  };

  const handleAddNews = (e) => {
    e.preventDefault();
    if (!newsTitle || !newsDesc || !newsImage) return;

    fetch(`${API}/news`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: newsTitle, description: newsDesc, image: newsImage }),
    })
      .then(res => res.json())
      .then(data => {
        setNews([...news, data]);
        setNewsTitle(""); setNewsDesc(""); setNewsImage("");
      });
  };

  const handleDeleteNews = (id) => {
    fetch(`${API}/news/${id}`, { method: "DELETE" })
      .then(() => setNews(news.filter(n => n.id !== id)));
  };

  const handleAddGallery = (e) => {
    e.preventDefault();
    if (!galleryImage || !galleryAlt) return;

    fetch(`${API}/gallery`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ image: galleryImage, alt: galleryAlt }),
    })
      .then(res => res.json())
      .then(data => {
        setGallery([...gallery, data]);
        setGalleryImage(""); setGalleryAlt("");
      });
  };

  const handleDeleteGallery = (id) => {
    fetch(`${API}/gallery/${id}`, { method: "DELETE" })
      .then(() => setGallery(gallery.filter(g => g.id !== id)));
  };

  /* ---------- UI ---------- */

  if (loading) return <div className="admin-page">Loading admin data...</div>;
  if (error) return <div className="admin-page error">{error}</div>;

  return (
    <div className="admin-page">
      <h2>Admin Dashboard</h2>
      <p>Manage programs, news, and gallery content</p>

      {/* PROGRAMS */}
      <section className="admin-section">
        <h3>Programs</h3>

        <form className="admin-form" onSubmit={handleAddProgram}>
          <input placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} />
          <input placeholder="Image URL" value={image} onChange={e => setImage(e.target.value)} />
          <textarea placeholder="Description" value={description} onChange={e => setDescription(e.target.value)} />
          <button className="btn-primary">Add Program</button>
        </form>

        <div className="admin-list">
          {programs.map(p => (
            <div className="admin-item" key={p.id}>
              <span>{p.title}</span>
              <button className="btn-danger" onClick={() => handleDeleteProgram(p.id)}>Delete</button>
            </div>
          ))}
        </div>
      </section>

      {/* NEWS */}
      <section className="admin-section">
        <h3>News</h3>

        <form className="admin-form" onSubmit={handleAddNews}>
          <input placeholder="Title" value={newsTitle} onChange={e => setNewsTitle(e.target.value)} />
          <input placeholder="Image URL" value={newsImage} onChange={e => setNewsImage(e.target.value)} />
          <textarea placeholder="Description" value={newsDesc} onChange={e => setNewsDesc(e.target.value)} />
          <button className="btn-primary">Add News</button>
        </form>

        <div className="admin-list">
          {news.map(n => (
            <div className="admin-item" key={n.id}>
              <span>{n.title}</span>
              <button className="btn-danger" onClick={() => handleDeleteNews(n.id)}>Delete</button>
            </div>
          ))}
        </div>
      </section>

      {/* GALLERY */}
      <section className="admin-section">
        <h3>Gallery</h3>

        <form className="admin-form" onSubmit={handleAddGallery}>
          <input placeholder="Image URL" value={galleryImage} onChange={e => setGalleryImage(e.target.value)} />
          <input placeholder="Alt text" value={galleryAlt} onChange={e => setGalleryAlt(e.target.value)} />
          <button className="btn-primary">Add Image</button>
        </form>

        <div className="admin-list">
          {gallery.map(g => (
            <div className="admin-item" key={g.id}>
              <span>{g.alt}</span>
              <button className="btn-danger" onClick={() => handleDeleteGallery(g.id)}>Delete</button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AdminDashboard;
