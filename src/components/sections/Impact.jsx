import stats from "../../assets/data/stats";

const Impact = () => {
  return (
    <section className="impact-section fade-up">
      <div className="container">
        <div className="impact-grid">
          {stats.map((s, i) => (
            <div className="impact-card" key={i}>
              <h2>{s.number}</h2>
              <p>{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Impact;
