import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="about-section fade-up">
      <div className="container about-grid">
        {/* Image */}
        <div className="about-image">
          <img
            src="https://images.unsplash.com/photo-1509099836639-18ba1795216d"
            alt="NGO volunteers teaching children"
            loading="lazy"
          />
        </div>

        {/* Content */}
        <div className="about-content">
          <h2>About Our Organization</h2>
          <p>
            HelpingHands NGO is a non-profit organization dedicated to improving
            access to education and empowering communities through sustainable
            initiatives.
          </p>

          <p>
            We believe education is the foundation of a better future. Through
            our programs, volunteers, and donors, we work to create meaningful
            impact in the lives of children and families.
          </p>

          <Link to="/about" className="btn-primary">
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
