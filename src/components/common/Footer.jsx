import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer-pro fade-up">
      <div className="container footer-grid">
        {/* ABOUT */}
        <div className="footer-col">
          <h3>HelpingHands</h3>
          <p>
            HelpingHands is a non-profit organization working towards education,
            healthcare, and social empowerment.
          </p>

          {/* SOCIAL LINKS */}
          <div className="footer-social">
            <a href="#" aria-label="Facebook">
              <span aria-hidden="true">📘</span>
            </a>
            <a href="#" aria-label="Twitter">
              <span aria-hidden="true">🐦</span>
            </a>
            <a href="#" aria-label="Instagram">
              <span aria-hidden="true">📸</span>
            </a>
            <a href="#" aria-label="LinkedIn">
              <span aria-hidden="true">🔗</span>
            </a>
          </div>
        </div>

        {/* QUICK LINKS */}
        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><a href="#programs">Programs</a></li>
            <li><a href="#gallery">Gallery</a></li>
            <li><a href="#about">About Us</a></li>
          </ul>
        </div>

        {/* CONTACT */}
        <div className="footer-col">
          <h4>Contact</h4>
          <p>📍 Kolkata, West Bengal, India</p>
          <p>📞 +91 90000 00000</p>
          <p>✉️ info@helpinghands.org</p>
        </div>

        {/* GALLERY */}
        <div className="footer-col">
          <h4>Gallery</h4>
          <div className="footer-gallery">
            <img src="https://picsum.photos/80?1" alt="Community work 1" loading="lazy" />
            <img src="https://picsum.photos/80?2" alt="Community work 2" loading="lazy" />
            <img src="https://picsum.photos/80?3" alt="Community work 3" loading="lazy" />
            <img src="https://picsum.photos/80?4" alt="Community work 4" loading="lazy" />
            <img src="https://picsum.photos/80?5" alt="Community work 5" loading="lazy" />
            <img src="https://picsum.photos/80?6" alt="Community work 6" loading="lazy" />
          </div>
        </div>
      </div>

      <div className="footer-bottom-pro">
        © {new Date().getFullYear()} HelpingHands. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
