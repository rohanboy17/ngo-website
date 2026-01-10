import causes from "../../assets/data/causes";

const Causes = () => {
  return (
    <section className="causes-section fade-up">
      <div className="container">
        <div className="section-header">
          <h2>Our Causes</h2>
          <p>Focused initiatives that create long-term community impact.</p>
        </div>

        <div className="causes-grid">
          {causes.map((cause, i) => (
            <div className="cause-card" key={i}>
              {/* IMAGE AREA */}
              <div
                className="cause-image"
                style={{ backgroundImage: `url(${cause.image})` }}
              >
                <div className="cause-overlay"></div>
                <h3>{cause.title}</h3>
              </div>

              {/* CONTENT */}
              <div className="cause-content">
                <p>{cause.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Causes;
