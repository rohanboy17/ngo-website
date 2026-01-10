import { useEffect, useState } from "react";

const Programs = () => {
  const [programs, setPrograms] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:4000/programs")
      .then((res) => res.json())
      .then((data) => {
        setPrograms(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <section className="programs-section fade-up">
      <div className="container">
        <div className="section-header">
          <h2>Our Programs</h2>
          <p>Programs managed dynamically from the system</p>
        </div>

        {loading ? (
          <div className="programs-loading">Loading programs...</div>
        ) : (
          <div className="programs-grid">
            {programs.map((p) => (
              <div className="program-card image-card" key={p.id}>
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                />

                <div className="image-overlay">
                  <span>Learn More</span>
                </div>

                <div className="program-content">
                  <h3>{p.title}</h3>
                  <p>{p.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Programs;
