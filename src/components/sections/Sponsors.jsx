import { Link } from "react-router-dom";
import sponsors from "../../assets/data/sponsors";

const Sponsors = () => {
  return (
    <section className="sponsors-section fade-up">
      <div className="container sponsors-header">
        <h2>Our Sponsors</h2>
        <Link to="/contact" className="btn-primary">
          Become a Sponsor
        </Link>
      </div>

      <div className="container sponsors-grid">
        {sponsors.map((s, i) => (
          <div className="sponsor-card" key={i}>
            <img
              src={s.logo}
              alt={s.name}
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Sponsors;
