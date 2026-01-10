import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import heroSlides from "../../assets/data/heroSlides";

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);
  const slide = heroSlides[current];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${slide.image})` }}
    >
      <div className="hero-overlay"></div>

      <div className="hero-content">
        <div className="hero-text">
          <h1>{slide.title}</h1>
          <p>{slide.text}</p>

          <div className="hero-buttons">
            <Link to="/donate" className="btn-primary">
              Donate Now
            </Link>
            <a href="#causes" className="btn-outline">
              Our Causes
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSlider;
